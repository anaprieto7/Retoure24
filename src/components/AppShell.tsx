// src/components/AppShell.tsx
"use client";

import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useColorModeValue } from "@chakra-ui/react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" minH="100vh">
        <Header />
        {/* Aquí va el fondo/padding para todas las páginas */}
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          minH="100vh"
          p={{ base: 4, md: 6 }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
}

// This component serves as the main layout for the application, providing a sidebar and header.
// It uses Chakra UI for styling and layout, ensuring a responsive design.
// The sidebar is fixed, while the header and content area are flexible.
