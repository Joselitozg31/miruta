import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../_db';

export async function GET() {
  const connection = await mysql.createConnection(getMysqlConfig());

  const [rows] = await connection.execute(
    `SELECT idparadas, rutaId, nombre, latitud, longitud, orden FROM paradas`
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  try {
    const { rutaId, nombre, latitud, longitud, orden } = await request.json();

    if (!rutaId || !nombre || !latitud || !longitud || !orden) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    await connection.execute(
      `INSERT INTO paradas (rutaId, nombre, latitud, longitud, orden) VALUES (?, ?, ?, ?, ?)`,
      [rutaId, nombre, latitud, longitud, orden]
    );

    await connection.end();

    return NextResponse.json({ message: 'Parada añadida correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al añadir parada', error: error.message }, { status: 500 });
  }
}

// Actualizar parada (PUT)
export async function PUT(request) {
  try {
    const { idparadas, rutaId, nombre, latitud, longitud, orden } = await request.json();

    if (!idparadas || !rutaId || !nombre || !latitud || !longitud || !orden) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    await connection.execute(
      `UPDATE paradas SET rutaId=?, nombre=?, latitud=?, longitud=?, orden=? WHERE idparadas=?`,
      [rutaId, nombre, latitud, longitud, orden, idparadas]
    );

    await connection.end();

    return NextResponse.json({ message: 'Parada actualizada correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar parada', error: error.message }, { status: 500 });
  }
}

// Borrar parada (DELETE)
export async function DELETE(request) {
  try {
    let idparadas = null;
    try {
      const body = await request.json();
      idparadas = Number(body.idparadas);
    } catch (err) {
      return NextResponse.json({ message: 'Falta el id de la parada o el body no es JSON', error: err?.message }, { status: 400 });
    }

    if (!idparadas || isNaN(idparadas)) {
      return NextResponse.json({ message: 'Falta el id de la parada o el id no es válido' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    const [result] = await connection.execute(
      `DELETE FROM paradas WHERE idparadas=?`,
      [idparadas]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'No se encontró la parada para eliminar' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Parada eliminada correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al eliminar parada', error: error.message }, { status: 500 });
  }
}
