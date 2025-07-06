import { LoginForm } from '@/components/login/LoginForm'
import { redirect } from 'next/navigation';
import { getUserFromSession } from '@/lib/auth/session'; // futuro manejo de sesión

export default async function LoginPage() {
  const user = await getUserFromSession();

  if (user) {
    redirect('/dashboard'); // if already loged.
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
