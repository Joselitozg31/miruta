import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import crypto from 'crypto';

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email y contraseña requeridos' }, { status: 400 });
  }

  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    // Busca el usuario por email
    const [rows] = await connection.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );

    // Si no existe el usuario, error
    if (rows.length === 0) {
      return NextResponse.json({ message: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }

    const user = rows[0];

    // Si el usuario no está verificado, no permitir login
    if (!user.verificado || user.verificado === 0) {
      return NextResponse.json({ message: 'Debes verificar tu cuenta antes de iniciar sesión.' }, { status: 403 });
    }

    // Encripta la contraseña recibida para comparar con la almacenada
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (user.password !== hash) {
      return NextResponse.json({ message: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }

    // Devuelve el tipo de usuario también
    return NextResponse.json({
      token: 'token-simulado-' + user.idusuarios,
      user: {
        idusuarios: user.idusuarios,
        nombre: user.nombre,
        email: user.email,
        tipo: user.tipo
      }
    });
  } catch (err) {
    return NextResponse.json({ message: 'Error en el servidor', error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}
