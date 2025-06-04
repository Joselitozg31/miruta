import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const rutaId = searchParams.get('rutaId');

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    let rows;
    if (rutaId) {
      // Obtener ubicaciones solo de los autobuses asignados a esa ruta
      [rows] = await connection.execute(
        `SELECT u.idubicacion, u.autobusId, u.latitud, u.longitud, u.timeStamp
         FROM ubicacion u
         JOIN autobusRuta ar ON u.autobusId = ar.autobusId
         WHERE ar.rutaId = ?
         ORDER BY u.timeStamp ASC`,
        [rutaId]
      );
    } else {
      [rows] = await connection.execute(
        `SELECT idubicacion, autobusId, latitud, longitud, timeStamp FROM ubicacion`
      );
    }

    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener ubicaciones', error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { autobusId, latitud, longitud, timeStamp } = await request.json();

    if (
      typeof autobusId === 'undefined' ||
      typeof latitud === 'undefined' ||
      typeof longitud === 'undefined' ||
      typeof timeStamp === 'undefined'
    ) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection.execute(
      `INSERT INTO ubicacion (autobusId, latitud, longitud, timeStamp) VALUES (?, ?, ?, ?)`,
      [autobusId, latitud, longitud, timeStamp]
    );

    await connection.end();

    return NextResponse.json({ message: 'Ubicación añadida correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al añadir ubicación', error: error.message }, { status: 500 });
  }
}

// Simulador de envío de coordenadas (solo para pruebas)
export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const rutaId = searchParams.get('rutaId');

    // Busca un autobusId asignado a esa ruta
    let autobusId = 1;
    if (rutaId) {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'miruta',
      });
      const [rows] = await connection.execute(
        `SELECT autobusId FROM autobusRuta WHERE rutaId = ? LIMIT 1`,
        [rutaId]
      );
      await connection.end();
      if (rows.length > 0) {
        autobusId = rows[0].autobusId;
      }
    }

    const latitud = 40.4168 + Math.random() * 0.01;
    const longitud = -3.7038 + Math.random() * 0.01;
    const timeStamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const connection2 = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection2.execute(
      `INSERT INTO ubicacion (autobusId, latitud, longitud, timeStamp) VALUES (?, ?, ?, ?)`,
      [autobusId, latitud, longitud, timeStamp]
    );

    await connection2.end();

    return NextResponse.json({ message: 'Ubicación simulada añadida correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al simular ubicación', error: error.message }, { status: 500 });
  }
}
