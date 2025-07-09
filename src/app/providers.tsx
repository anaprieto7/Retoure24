'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import I18nProvider from '@/i18n/I18nProvider';
import { UserProvider } from '@/context/UserContext'; // ✅ AÑADE ESTO
import theme from '@/theme';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </I18nProvider>
    </ChakraProvider>
  );
}
