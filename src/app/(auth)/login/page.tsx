// src/app/(auth)/login/page.tsx

import { redirect } from 'next/navigation';
import { getUserFromSession } from '@/lib/auth/session';
import { LoginForm } from '@/components/login/LoginForm';

export default async function LoginPage() {
  const user = getUserFromSession(); // ✅ detecta si ya hay sesión

  //if (user) {
  //  redirect('/login'); // Si ya hay usuario, redirige al dashboard
  //}

  return (
    <div>
      <LoginForm />
    </div>
  );
}
// This page handles the login functionality for the application.
// It checks if a user session already exists using the `getUserFromSession` function.
// If a user is found, it redirects them to the dashboard page.