import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { getMysqlConfig } from '../../_db';

function isPasswordValid(password) {
  // Al menos una mayúscula y un caracter especial de la lista indicada
  const specialChars = /[.,\-¨\*\^¿\?=\/\·"\$%´`+]/;
  const hasUppercase = /[A-Z]/;
  return (
    password.length >= 8 &&
    hasUppercase.test(password) &&
    specialChars.test(password)
  );
}

export async function GET(request) {
  // Obtén el idusuarios desde la query (?id=) o desde headers (mejor si usas JWT real)
  const { searchParams } = new URL(request.url);
  const idusuarios = searchParams.get('id');

  if (!idusuarios) {
    return NextResponse.json({ message: 'ID de usuario no proporcionado' }, { status: 400 });
  }

  try {
    const connection = await mysql.createConnection(getMysqlConfig());

    const [rows] = await connection.execute(
      `SELECT idusuarios, nombre, apellido1, apellido2, nombreusuario, email, imagen FROM usuarios WHERE idusuarios = ?`,
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
    const { idusuarios, nombre, apellido1, apellido2, nombreusuario, email, password, imagen } = body;

    if (!idusuarios) {
      return NextResponse.json({ message: 'Falta el id del usuario' }, { status: 400 });
    }

    const connection = await mysql.createConnection(getMysqlConfig());

    // Construye la consulta dinámicamente según los campos enviados
    const fields = [];
    const values = [];

    if (nombre !== undefined) {
      fields.push('nombre = ?');
      values.push(nombre);
    }
    if (apellido1 !== undefined) {
      fields.push('apellido1 = ?');
      values.push(apellido1);
    }
    if (apellido2 !== undefined) {
      fields.push('apellido2 = ?');
      values.push(apellido2);
    }
    if (nombreusuario !== undefined) {
      fields.push('nombreusuario = ?');
      values.push(nombreusuario);
    }
    if (email !== undefined) {
      fields.push('email = ?');
      values.push(email);
    }
    if (imagen !== undefined) {
      fields.push('imagen = ?');
      values.push(imagen);
    }
    if (password && password.trim() !== '') {
      // Validación de contraseña
      if (!isPasswordValid(password)) {
        await connection.end();
        return NextResponse.json({
          message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial (.,-¨*^¿?=)/·"$%%%´`+).'
        }, { status: 400 });
      }
      // Encripta la contraseña antes de guardar
      const crypto = (await import('crypto')).default;
      const hash = crypto.createHash('sha256').update(password).digest('hex');
      fields.push('password = ?');
      values.push(hash);
    }

    if (fields.length === 0) {
      await connection.end();
      return NextResponse.json({ message: 'No hay datos para actualizar' }, { status: 400 });
    }

    values.push(idusuarios);

    const sql = `UPDATE usuarios SET ${fields.join(', ')} WHERE idusuarios = ?`;
    await connection.execute(sql, values);

    await connection.end();

    return NextResponse.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al actualizar usuario', error: error.message }, { status: 500 });
  }
}
