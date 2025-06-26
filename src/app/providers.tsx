'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import I18nProvider from '@/i18n/I18nProvider';
import theme from '@/theme'; // Si no tienes uno, quítalo o usa el default

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ChakraProvider>
  );
}
