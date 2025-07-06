import { NextResponse } from 'next/server';
import { mockUsers } from '@/data/mockUsers';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { email } = await request.json();

  const user = mockUsers.find((u) => u.email === email);

  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 401 });
  }

  // save the session on cookie
  cookies().set('user', JSON.stringify(user), { httpOnly: true });

  return NextResponse.json({ success: true });
}
