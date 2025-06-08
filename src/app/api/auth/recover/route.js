import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import mailjet from 'node-mailjet';
import { getMysqlConfig } from '../../_db';

// Usa las variables de entorno correctas para Mailjet
const MJ_APIKEY_PUBLIC = process.env.MAILJET_API_KEY;
const MJ_APIKEY_PRIVATE = process.env.MAILJET_API_SECRET;
const MJ_FROM_EMAIL = process.env.MAILJET_FROM_EMAIL;
const MJ_FROM_NAME = process.env.MAILJET_FROM_NAME;

// Solo inicializa Mailjet si hay claves
let mailjetClient = null;
if (MJ_APIKEY_PUBLIC && MJ_APIKEY_PRIVATE) {
  mailjetClient = mailjet.apiConnect(
    MJ_APIKEY_PUBLIC,
    MJ_APIKEY_PRIVATE
  );
}

// Utilidad para generar código de 6 dígitos
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// POST: Solicitar código de recuperación (guarda el código en la columna token_recover)
export async function POST(request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ message: 'Email requerido' }, { status: 400 });
  }

  if (!mailjetClient) {
    return NextResponse.json({ message: 'Mailjet API_KEY no configurado en el servidor' }, { status: 500 });
  }

  let connection;
  try {
    connection = await mysql.createConnection(getMysqlConfig());

    // Busca usuario
    const [rows] = await connection.execute(
      'SELECT idusuarios FROM usuarios WHERE email = ?',
      [email]
    );
    if (rows.length === 0) {
      await connection.end();
      return NextResponse.json({ message: 'No existe usuario con ese email' }, { status: 404 });
    }

    // Genera código y guárdalo en la columna token_recover
    const code = generateCode();

    await connection.execute(
      'UPDATE usuarios SET token_recover = ? WHERE email = ?',
      [code, email]
    );

    await connection.end();

    // Envía el código por Mailjet
    await mailjetClient
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: MJ_FROM_EMAIL,
              Name: MJ_FROM_NAME || "MiRuta"
            },
            To: [
              {
                Email: email
              }
            ],
            Subject: "Código de recuperación de contraseña",
            TextPart: `Tu código de recuperación es: ${code}`,
            HTMLPart: `<h3>Tu código de recuperación es: <b>${code}</b></h3>`
          }
        ]
      });

    return NextResponse.json({ message: 'Código enviado al correo' });
  } catch (err) {
    if (connection) await connection.end();
    return NextResponse.json({ message: 'Error enviando código', error: err.message }, { status: 500 });
  }
}

// PUT: Cambiar contraseña usando código (verifica en la columna token_recover)
export async function PUT(request) {
  const { email, code, newPassword } = await request.json();
  if (!email || !code || !newPassword) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 });
  }

  // Validación de contraseña segura
  const specialChars = /[.,\-¨\*\^¿\?=\/\·"\$%´`+]/;
  const hasUppercase = /[A-Z]/;
  if (
    newPassword.length < 8 ||
    !hasUppercase.test(newPassword) ||
    !specialChars.test(newPassword)
  ) {
    return NextResponse.json({
      message:
        'La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial (.,-¨*^¿?=)/·"$%%%´`+)',    }, { status: 400 });
  }

  let connection;
  try {
    connection = await mysql.createConnection(getMysqlConfig());

    // Verifica código en la columna token_recover
    const [rows] = await connection.execute(
      'SELECT token_recover FROM usuarios WHERE email = ?',
      [email]
    );
    if (rows.length === 0 || rows[0].token_recover !== code) {
      await connection.end();
      return NextResponse.json({ message: 'Código incorrecto' }, { status: 400 });
    }

    // Cambia la contraseña (encripta con SHA-256)
    let hash;
    try {
      const crypto = (await import('crypto')).default;
      hash = crypto.createHash('sha256').update(newPassword).digest('hex');
    } catch (e) {
      await connection.end();
      return NextResponse.json({ message: 'Error en el hash de contraseña', error: e.message }, { status: 500 });
    }

    // Actualiza la contraseña y limpia el token_recover
    const [updateResult] = await connection.execute(
      'UPDATE usuarios SET password=?, token_recover=NULL WHERE email=?',
      [hash, email]
    );

    await connection.end();

    if (updateResult.affectedRows === 0) {
      return NextResponse.json({ message: 'No se pudo actualizar la contraseña. Usuario no encontrado.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Contraseña cambiada correctamente' });
  } catch (err) {
    if (connection) await connection.end();
    return NextResponse.json({ message: 'Error cambiando contraseña', error: err.message }, { status: 500 });
  }
}
