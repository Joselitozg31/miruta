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
    `SELECT idrutas, nombre, descripcion, origen, destino, horaInicio, horaFin FROM rutas`
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  try {
    const { nombre, descripcion, origen, destino, horaInicio, horaFin } = await request.json();

    if (!nombre || !descripcion || !origen || !destino || !horaInicio || !horaFin) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    // Asegúrate de que los campos coincidan con los de la tabla y que no haya errores de tipos
    await connection.execute(
      `INSERT INTO rutas (nombre, descripcion, origen, destino, horaInicio, horaFin) VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, descripcion, origen, destino, horaInicio, horaFin]
    );

    await connection.end();

    return NextResponse.json({ message: 'Ruta añadida correctamente' });
  } catch (error) {
    // Devuelve el error SQL para depuración si estás en desarrollo
    return NextResponse.json({ message: 'Error al añadir ruta', error: error.message }, { status: 500 });
  }
}

// Actualizar ruta (PUT)
export async function PUT(request) {
  try {
    const { idrutas, nombre, descripcion, origen, destino, horaInicio, horaFin } = await request.json();

    if (!idrutas || !nombre || !descripcion || !origen || !destino || !horaInicio || !horaFin) {
      return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    await connection.execute(
      `UPDATE rutas SET nombre=?, descripcion=?, origen=?, destino=?, horaInicio=?, horaFin=? WHERE idrutas=?`,
      [nombre, descripcion, origen, destino, horaInicio, horaFin, idrutas]
    );

    await connection.end();

    return NextResponse.json({ message: 'Ruta actualizada correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar ruta', error: error.message }, { status: 500 });
  }
}

// Borrar ruta (DELETE)
export async function DELETE(request) {
  try {
    // Asegura que el body es JSON y no vacío
    let idrutas = null;
    try {
      const body = await request.json();
      idrutas = Number(body.idrutas); // Asegura que sea número
    } catch (err) {
      return NextResponse.json({ message: 'Falta el id de la ruta o el body no es JSON', error: err?.message }, { status: 400 });
    }

    if (!idrutas || isNaN(idrutas)) {
      return NextResponse.json({ message: 'Falta el id de la ruta o el id no es válido' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'miruta',
    });

    // Comprueba si la ruta existe antes de intentar borrar
    const [rows] = await connection.execute(
      `SELECT idrutas FROM rutas WHERE idrutas=?`,
      [idrutas]
    );
    if (rows.length === 0) {
      await connection.end();
      return NextResponse.json({ message: 'No se encontró la ruta para eliminar' }, { status: 404 });
    }

    const [result] = await connection.execute(
      `DELETE FROM rutas WHERE idrutas=?`,
      [idrutas]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'No se pudo eliminar la ruta (puede que tenga dependencias en otras tablas)' }, { status: 409 });
    }

    return NextResponse.json({ message: 'Ruta eliminada correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al eliminar ruta', error: error.message }, { status: 500 });
  }
}
