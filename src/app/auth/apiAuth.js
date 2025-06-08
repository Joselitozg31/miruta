export async function login(email, password) {
  try {
    // Elimina la encriptación en el frontend: envía la contraseña en texto plano
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'No autorizado');
    }

    if (!data.token) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    return data;
  } catch (error) {
    throw error;
  }
}
