import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import crypto from 'crypto';
import mailjet from 'node-mailjet';
import jwt from 'jsonwebtoken';
import { getMysqlConfig } from '../../_db';

const JWT_SECRET = process.env.JWT_SECRET || 'A9f$2kL!zQw8@xP0#rT7^vB6&nM3*eS1%jH4+uY5=GdC8pL0sW9zX2qV7bN6mK3';

// Validación de contraseña fuerte
function isPasswordValid(password) {
  const specialChars = /[.,\-¨\*\^¿\?=\/\·"\$%´`+]/;
  const hasUppercase = /[A-Z]/;
  return (
    password.length >= 8 &&
    hasUppercase.test(password) &&
    specialChars.test(password)
  );
}

export async function POST(request) {
  try {
    const { nombre, apellido1, apellido2, nombreusuario, email, password } = await request.json();

    if (!nombre || !apellido1 || !email || !password) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // Validación de contraseña fuerte
    if (!isPasswordValid(password)) {
      return NextResponse.json({
        message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial (.,-¨*^¿?=)/·"$%%%´`+).'
      }, { status: 400 });
    }

    // Encripta la contraseña en el backend usando SHA-256
    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const connection = await mysql.createConnection(getMysqlConfig());

    // Verifica si el email ya existe
    const [existing] = await connection.execute(
      `SELECT idusuarios FROM usuarios WHERE email = ?`,
      [email]
    );
    if (existing.length > 0) {
      await connection.end();
      return NextResponse.json({ message: 'El email ya está registrado' }, { status: 400 });
    }

    // Crea un código de verificación simple
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    const [newUser] = await connection.execute(
      `INSERT INTO usuarios (nombre, apellido1, apellido2, nombreusuario, email, password, tipo, verificado, token_verificacion) VALUES (?, ?, ?, ?, ?, ?, 'usuario', 0, ?)`,
      [nombre, apellido1, apellido2, nombreusuario, email, hash, verificationCode]
    );

    await connection.end();

    // Usa las variables de entorno para Mailjet
    const mailjetClient = mailjet.apiConnect(
      process.env.MAILJET_API_KEY,
      process.env.MAILJET_API_SECRET
    );

    await mailjetClient
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_FROM_EMAIL,
              Name: process.env.MAILJET_FROM_NAME
            },
            To: [
              {
                Email: email,
                Name: nombre
              }
            ],
            Subject: "Verifica tu cuenta en MiRuta",
            TextPart: `Tu código de verificación es: ${verificationCode}`,
            HTMLPart: `<h3>Bienvenido a MiRuta</h3><p>Tu código de verificación es: <b>${verificationCode}</b></p>`
          }
        ]
      });

    // Genera un token JWT
    const token = jwt.sign(
      {
        idusuarios: newUser.insertId,
        nombre,
        email,
        tipo: 'usuario'
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      token,
      user: {
        idusuarios: newUser.insertId,
        nombre,
        email,
        tipo: 'usuario'
      },
      message: 'Usuario registrado correctamente. Revisa tu correo para verificar la cuenta.'
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error al registrar usuario', error: error.message }, { status: 500 });
  }
}
