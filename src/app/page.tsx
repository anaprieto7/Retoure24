import { redirect } from 'next/navigation';
export default function Home() {
  redirect('/login');
}
// This page redirects users to the login page when they access the root URL.
// It serves as a landing page for the application, ensuring that users are directed to the appropriate authentication flow.
// The redirect is handled server-side, providing a seamless user experience without requiring client-side navigation.
// This approach is useful for applications that require user authentication before accessing any other pages or features.
// It can be extended in the future to include additional logic or redirection based on user roles or permissions.