// src/lib/auth/session.ts

import { cookies } from 'next/headers';
import { User } from '@/types/user';

export async function getUserFromSession() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user');

  if (!userCookie) return null;

  try {
    const user = JSON.parse(decodeURIComponent(userCookie.value));
    return user;
  } catch (error) {
    console.error('❌ Error al parsear cookie user en sesión:', error);
    return null;
  }
}

// This function retrieves the user information from a session cookie.
// It uses the Next.js cookies API to access the cookie store and find the 'user' cookie.
// If the cookie exists, it attempts to parse the JSON value and return the user object.
// If parsing fails or the cookie is not found, it logs an error and returns null.
// This function is useful for checking if a user is logged in and retrieving their information for use in the application.
// It can be extended to include additional session management features or error handling as needed.