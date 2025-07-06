import { cookies } from 'next/headers';
import { User } from '@/types/user';

export function getUserFromSession(): User | null {
  const cookie = cookies().get('user');
  if (!cookie) return null;

  try {
    return JSON.parse(cookie.value) as User;
  } catch {
    return null;
  }
}
