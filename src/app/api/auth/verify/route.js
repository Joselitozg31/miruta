import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../_db';

export async function POST(request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json({ message: 'Faltan datos' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    // Busca el usuario y verifica el código
    const [rows] = await connection.execute(
      `SELECT idusuarios, token_verificacion, verificado FROM usuarios WHERE email = ?`,
      [email]
    );

    if (rows.length === 0) {
      await connection.end();
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }

    const user = rows[0];

    if (user.verificado === 1) {
      await connection.end();
      return NextResponse.json({ message: 'La cuenta ya está verificada' }, { status: 400 });
    }

    if (user.token_verificacion !== code) {
      await connection.end();
      return NextResponse.json({ message: 'Código de verificación incorrecto' }, { status: 400 });
    }

    // Marca como verificado
    await connection.execute(
      `UPDATE usuarios SET verificado = 1, token_verificacion = NULL WHERE idusuarios = ?`,
      [user.idusuarios]
    );

    await connection.end();

    return NextResponse.json({ message: 'Cuenta verificada correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al verificar', error: error.message }, { status: 500 });
  }
}
