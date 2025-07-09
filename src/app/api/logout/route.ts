// src/app/api/logout/route.ts

import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set('user', '', {
    path: '/',
    maxAge: 0,
  });

  return response;
}
// This API route handles user logout by clearing the 'user' cookie.
// It returns a JSON response indicating success.
// The cookie is set with a maxAge of 0, effectively deleting it.
// This setup is useful for managing user sessions in a simple way without a full authentication system.
// The route can be called from a client-side component to log out a user and clear their session cookie.
// It is designed to be used in a Next.js application, leveraging the built-in cookies API for session management.
// This route can be extended to include more complex logout logic or integration with a backend service if needed.