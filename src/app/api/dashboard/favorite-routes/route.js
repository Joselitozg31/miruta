import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../_db';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const usuarioId = searchParams.get('usuarioId');

  if (!usuarioId) {
    return NextResponse.json({ message: 'usuarioId requerido' }, { status: 400 });
  }

  const connection = await mysql.createConnection(getMysqlConfig());

  // Solo devuelve las favoritas del usuario
  const [rows] = await connection.execute(
    `SELECT rutaId FROM usuariorutafavorita WHERE usuarioId = ?`,
    [usuarioId]
  );

  await connection.end();

  return NextResponse.json(rows);
}

export async function POST(request) {
  const { usuarioId, rutaId } = await request.json();

  if (!usuarioId || !rutaId) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 });
  }

  const connection = await mysql.createConnection(getMysqlConfig());

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

  const connection = await mysql.createConnection(getMysqlConfig());

  await connection.execute(
    `DELETE FROM usuariorutafavorita WHERE usuarioId = ? AND rutaId = ?`,
    [usuarioId, rutaId]
  );

  await connection.end();

  return NextResponse.json({ message: 'Ruta eliminada de favoritos' });
}
