// src/app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme"; // Asegúrate de que la ruta sea correctas

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
