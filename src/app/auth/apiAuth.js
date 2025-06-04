export async function login(email, password) {
  try {
    // Encripta la contraseña antes de enviarla (SHA-256, igual que en el backend)
    let encryptedPassword = password;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      encryptedPassword = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: encryptedPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'No autorizado');
    }

    if (!data.token) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    // No es necesario cambiar nada aquí, el backend ya devuelve un JWT real

    return data;
  } catch (error) {
    throw error;
  }
}
