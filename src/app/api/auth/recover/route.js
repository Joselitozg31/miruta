import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import mailjet from 'node-mailjet';

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

// POST: Solicitar código de recuperación
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
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    // Busca usuario
    const [rows] = await connection.execute(
      'SELECT idusuarios FROM usuarios WHERE email = ?',
      [email]
    );
    if (rows.length === 0) {
      return NextResponse.json({ message: 'No existe usuario con ese email' }, { status: 404 });
    }

    // Genera código y guárdalo temporalmente en la tabla codigo_recuperacion
    const code = generateCode();

    await connection.execute(
      'REPLACE INTO codigo_recuperacion (email, code, created_at) VALUES (?, ?, NOW())',
      [email, code]
    );

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
    return NextResponse.json({ message: 'Error enviando código', error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

// PUT: Cambiar contraseña usando código
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
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    // Verifica código en la tabla codigo_recuperacion
    const [rows] = await connection.execute(
      'SELECT code, created_at FROM codigo_recuperacion WHERE email = ?',
      [email]
    );
    if (rows.length === 0 || rows[0].code !== code) {
      return NextResponse.json({ message: 'Código incorrecto' }, { status: 400 });
    }

    // Opcional: verifica expiración (ej: 15 min)
    const createdAt = new Date(rows[0].created_at);
    if (Date.now() - createdAt.getTime() > 15 * 60 * 1000) {
      return NextResponse.json({ message: 'Código expirado' }, { status: 400 });
    }

    // Cambia la contraseña (encripta con SHA-256)
    let hash;
    try {
      // Siempre usa import dinámico para Next.js API routes (evita require)
      const crypto = (await import('crypto')).default;
      hash = crypto.createHash('sha256').update(newPassword).digest('hex');
    } catch (e) {
      return NextResponse.json({ message: 'Error en el hash de contraseña', error: e.message }, { status: 500 });
    }

    // DEBUG: Verifica el hash y el email
    // console.log('DEBUG HASH:', hash, 'EMAIL:', email);

    // Actualiza la contraseña solo si el usuario existe y el email es correcto
    const [updateResult] = await connection.execute(
      'UPDATE usuarios SET password=? WHERE email=?',
      [hash, email]
    );

    if (updateResult.affectedRows === 0) {
      return NextResponse.json({ message: 'No se pudo actualizar la contraseña. Usuario no encontrado.' }, { status: 404 });
    }

    // Borra el código usado
    await connection.execute(
      'DELETE FROM codigo_recuperacion WHERE email=?',
      [email]
    );

    return NextResponse.json({ message: 'Contraseña cambiada correctamente' });
  } catch (err) {
    return NextResponse.json({ message: 'Error cambiando contraseña', error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}
