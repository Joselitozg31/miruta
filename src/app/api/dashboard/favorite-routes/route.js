import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  // Obtiene las rutas favoritas del usuario actual (puedes filtrar por usuario si tienes auth)
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miruta',
  });

  // Aquí deberías obtener el usuario autenticado, para ejemplo se devuelven todas
  const [rows] = await connection.execute(
    `SELECT usuarioId, rutaId FROM usuariorutafavorita`
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  const { usuarioId, rutaId } = await request.json();

  if (!usuarioId || !rutaId) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 });
  }

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miruta',
  });

  // Evita duplicados
  await connection.execute(
    `INSERT IGNORE INTO usuariorutafavorita (usuarioId, rutaId) VALUES (?, ?)`,
    [usuarioId, rutaId]
  );

  await connection.end();

  return NextResponse.json({ message: 'Ruta añadida a favoritos' });
}

export async function DELETE(request) {
  const { usuarioId, rutaId } = await request.json();

  if (!usuarioId || !rutaId) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 });
  }

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miruta',
  });

  await connection.execute(
    `DELETE FROM usuariorutafavorita WHERE usuarioId = ? AND rutaId = ?`,
    [usuarioId, rutaId]
  );

  await connection.end();

  return NextResponse.json({ message: 'Ruta eliminada de favoritos' });
}
