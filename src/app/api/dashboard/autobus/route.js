import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../_db';

export async function GET() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miruta',
  });

  const [rows] = await connection.execute(
    `SELECT idAutobus, placa, modelo, capacidad, estado FROM autobus`
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  try {
    const { placa, modelo, capacidad, estado } = await request.json();

    if (!placa || !modelo || !capacidad || !estado) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection.execute(
      `INSERT INTO autobus (placa, modelo, capacidad, estado) VALUES (?, ?, ?, ?)`,
      [placa, modelo, capacidad, estado]
    );

    await connection.end();

    return NextResponse.json({ message: 'Autobús añadido correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al añadir autobús', error: error.message }, { status: 500 });
  }
}

// Actualizar autobús (PUT)
export async function PUT(request) {
  try {
    const { idAutobus, placa, modelo, capacidad, estado } = await request.json();

    if (!idAutobus || !placa || !modelo || !capacidad || !estado) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection.execute(
      `UPDATE autobus SET placa=?, modelo=?, capacidad=?, estado=? WHERE idAutobus=?`,
      [placa, modelo, capacidad, estado, idAutobus]
    );

    await connection.end();

    return NextResponse.json({ message: 'Autobús actualizado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar autobús', error: error.message }, { status: 500 });
  }
}

// Borrar autobús (DELETE)
export async function DELETE(request) {
  try {
    let idAutobus = null;
    try {
      const body = await request.json();
      idAutobus = Number(body.idAutobus);
    } catch (err) {
      return NextResponse.json({ message: 'Falta el id del autobús o el body no es JSON', error: err?.message }, { status: 400 });
    }

    if (!idAutobus || isNaN(idAutobus)) {
      return NextResponse.json({ message: 'Falta el id del autobús o el id no es válido' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    const [result] = await connection.execute(
      `DELETE FROM autobus WHERE idAutobus=?`,
      [idAutobus]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'No se encontró el autobús para eliminar' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Autobús eliminado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al eliminar autobús', error: error.message }, { status: 500 });
  }
}
