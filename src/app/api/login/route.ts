// app/api/login/route.ts
import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers'; // Ya no necesitamos esto si el cliente gestiona la cookie
import { Users } from '@/data/mockUsers'; // Asegúrate que 'Users' es la exportación correcta de tu archivo mock

export async function POST(request: Request) {
  const { email } = await request.json();

  // Asumiendo que 'Users' es un array de objetos de tipo User, y que User tiene una propiedad 'email'
  const user = Users.find(u => u.email === email);

  if (!user) {
    // Si el usuario no se encuentra, devuelve un error 401 con un mensaje descriptivo
    // Esto es lo que el LoginForm.tsx esperará para mostrar el error.
    return NextResponse.json({ message: 'Credenciales inválidas' }, { status: 401 });
  }

  // *** CAMBIO IMPORTANTE: Eliminamos la configuración de la cookie en el servidor. ***
  // La gestión de la cookie ahora será responsabilidad exclusiva del UserContext en el cliente
  // una vez que reciba los datos del usuario de esta API.
  /*
  cookies().set({
    name: 'user',
    value: encodeURIComponent(JSON.stringify(user)),
    path: '/',
    maxAge: 86400, // 24 horas
    sameSite: 'lax',
  });
  */

  // *** CAMBIO IMPORTANTE: Devuelve solo el objeto de usuario si el login es exitoso. ***
  // Esto coincide con la expectativa de LoginForm.tsx de recibir directamente un objeto User.
  return NextResponse.json(user, { status: 200 });
}