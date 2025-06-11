import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../../_db';

const PUBLIC_URL = process.env.PUBLIC_URL || 'https://miruta-dyg0cjg5cvajafak.spaincentral-01.azurewebsites.net';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  if (!code) {
    return NextResponse.redirect(PUBLIC_URL + '/auth/login?error=NoCode');
  }

  // Intercambia el code por tokens
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code'
    })
  });
  const tokenData = await tokenRes.json();
  if (!tokenData.id_token) {
    return NextResponse.redirect(PUBLIC_URL + '/auth/login?error=NoToken');
  }

  // Obtiene datos del usuario
  const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  });
  const userInfo = await userInfoRes.json();

  // Busca o crea el usuario en la base de datos
  let connection;
  try {
    connection = await mysql.createConnection(getMysqlConfig());
    // Busca por google_id
    const [rows] = await connection.execute(
      'SELECT * FROM usuarios WHERE google_id = ?',
      [userInfo.sub]
    );
    let user;
    if (rows.length > 0) {
      user = rows[0];
    } else {
      // Si no existe, crea usuario (añadiendo apellido1 vacío)
      const [result] = await connection.execute(
        'INSERT INTO usuarios (nombre, apellido1, email, google_id, verificado, tipo) VALUES (?, ?, ?, ?, 1, "usuario")',
        [userInfo.name, '', userInfo.email, userInfo.sub]
      );
      user = {
        idusuarios: result.insertId,
        nombre: userInfo.name,
        email: userInfo.email,
        tipo: 'usuario'
      };
    }
    // Simula un token y redirige al frontend con el token y datos del usuario
    const params = new URLSearchParams({
      token: 'token-google-' + user.idusuarios,
      idusuarios: user.idusuarios,
      nombre: user.nombre,
      email: user.email,
      tipo: user.tipo
    });
    return NextResponse.redirect(PUBLIC_URL + '/auth/login?' + params.toString());
  } catch (err) {
    return NextResponse.redirect(PUBLIC_URL + '/auth/login?error=' + encodeURIComponent(err.message));
  } finally {
    if (connection) await connection.end();
  }
}
