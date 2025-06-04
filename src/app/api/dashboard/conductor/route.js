import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miruta',
  });

  const [rows] = await connection.execute(
    `SELECT idconductores, nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion FROM conductores`
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  try {
    const { nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion } = await request.json();

    if (!nombre || !apellido1 || !dni || !telefono || !licencia || !fecha_contratacion) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection.execute(
      `INSERT INTO conductores (nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion]
    );

    await connection.end();

    return NextResponse.json({ message: 'Conductor añadido correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al añadir conductor', error: error.message }, { status: 500 });
  }
}

// Actualizar conductor (PUT)
export async function PUT(request) {
  try {
    const { idconductores, nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion } = await request.json();

    if (!idconductores || !nombre || !apellido1 || !dni || !telefono || !licencia || !fecha_contratacion) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection.execute(
      `UPDATE conductores SET nombre=?, apellido1=?, apellido2=?, dni=?, telefono=?, licencia=?, fecha_contratacion=? WHERE idconductores=?`,
      [nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion, idconductores]
    );

    await connection.end();

    return NextResponse.json({ message: 'Conductor actualizado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar conductor', error: error.message }, { status: 500 });
  }
}

// Borrar conductor (DELETE)
export async function DELETE(request) {
  try {
    let idconductores = null;
    try {
      const body = await request.json();
      idconductores = Number(body.idconductores);
    } catch (err) {
      return NextResponse.json({ message: 'Falta el id del conductor o el body no es JSON', error: err?.message }, { status: 400 });
    }

    if (!idconductores || isNaN(idconductores)) {
      return NextResponse.json({ message: 'Falta el id del conductor o el id no es válido' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    const [result] = await connection.execute(
      `DELETE FROM conductores WHERE idconductores=?`,
      [idconductores]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'No se encontró el conductor para eliminar' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Conductor eliminado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al eliminar conductor', error: error.message }, { status: 500 });
  }
}
