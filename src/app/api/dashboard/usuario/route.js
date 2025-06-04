import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request) {
  // Obtén el idusuarios desde la query (?id=) o desde headers (mejor si usas JWT real)
  const { searchParams } = new URL(request.url);
  const idusuarios = searchParams.get('id');

  if (!idusuarios) {
    return NextResponse.json({ message: 'ID de usuario no proporcionado' }, { status: 400 });
  }

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    const [rows] = await connection.execute(
      `SELECT idusuarios, nombre, apellido1, apellido2, nombreusuario, email FROM usuarios WHERE idusuarios = ?`,
      [idusuarios]
    );
    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener usuario', error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { idusuarios, nombre, apellido1, apellido2, nombreusuario, email, password } = body;

    if (!idusuarios || !nombre || !apellido1 || !nombreusuario || !email) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    if (password) {
      await connection.execute(
        `UPDATE usuarios SET nombre=?, apellido1=?, apellido2=?, nombreusuario=?, email=?, password=? WHERE idusuarios=?`,
        [nombre, apellido1, apellido2, nombreusuario, email, password, idusuarios]
      );
    } else {
      await connection.execute(
        `UPDATE usuarios SET nombre=?, apellido1=?, apellido2=?, nombreusuario=?, email=? WHERE idusuarios=?`,
        [nombre, apellido1, apellido2, nombreusuario, email, idusuarios]
      );
    }
    await connection.end();

    return NextResponse.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar usuario', error: error.message }, { status: 500 });
  }
}
