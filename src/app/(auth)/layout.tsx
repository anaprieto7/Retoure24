import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@/context/UserContext';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <ChakraProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
