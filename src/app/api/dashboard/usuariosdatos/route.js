import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../_db';

export async function GET() {
  const connection = await mysql.createConnection(getMysqlConfig());

  const [rows] = await connection.execute(
    `SELECT idusuarios, nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado FROM usuarios`
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  try {
    const { nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado } = await request.json();

    if (!nombre || !apellido1 || !email || !tipo) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    await connection.execute(
      `INSERT INTO usuarios (nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado, password) VALUES (?, ?, ?, ?, ?, ?, ?, '')`,
      [nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado]
    );

    await connection.end();

    return NextResponse.json({ message: 'Usuario añadido correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al añadir usuario', error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { idusuarios, nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado } = await request.json();

    if (!idusuarios || !nombre || !apellido1 || !email || !tipo) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    await connection.execute(
      `UPDATE usuarios SET nombre=?, apellido1=?, apellido2=?, nombreusuario=?, email=?, tipo=?, verificado=? WHERE idusuarios=?`,
      [nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado, idusuarios]
    );

    await connection.end();

    return NextResponse.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar usuario', error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    let idusuarios = null;
    try {
      const body = await request.json();
      idusuarios = Number(body.idusuarios);
    } catch (err) {
      return NextResponse.json({ message: 'Falta el id del usuario o el body no es JSON', error: err?.message }, { status: 400 });
    }

    if (!idusuarios || isNaN(idusuarios)) {
      return NextResponse.json({ message: 'Falta el id del usuario o el id no es válido' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    const [result] = await connection.execute(
      `DELETE FROM usuarios WHERE idusuarios=?`,
      [idusuarios]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'No se encontró el usuario para eliminar' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al eliminar usuario', error: error.message }, { status: 500 });
  }
}
