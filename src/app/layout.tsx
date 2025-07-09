import { UserProvider } from '@/context/UserContext';
import Providers from '@/app/providers'; // Chakra + i18n
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retoure24 - Ihre Retourenlösung',
  description: 'Optimieren Sie Ihre Retouren mit Retoure24. Einfach, schnell und effizient.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <UserProvider>
          <Providers> {/* Chakra + i18n */}
            {children}
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}


// This layout is used for the entire application, including the dashboard, return list, and account settings.
// It provides a consistent structure and styling across all pages.
// The metadata includes the title and description for SEO purposes.
// The layout wraps the children components in a standard HTML structure with a language attribute set to German (de).
// This layout can be extended with additional metadata or global styles as needed in the future.
// It serves as the foundation for the application's user interface, ensuring a cohesive user experience across different sections of the app.