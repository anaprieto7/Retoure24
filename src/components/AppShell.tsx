// src/components/AppShell.tsx
// src/components/AppShell.tsx
"use client";

import { Box, useTheme } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useColorModeValue } from "@chakra-ui/react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const sidebarWidth = theme.sizes.container?.sidebar || "250px";

  return (
    <Box minH="100vh" pl={{ base: 0, md: sidebarWidth }}>
      <Sidebar />
      <Box>
        <Header />
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          minH="100vh"
          p={6}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

// This component serves as the main layout for the application, providing a sidebar and header.
// It uses Chakra UI for styling and layout, ensuring a responsive design.
// The sidebar is fixed, while the header and content area are flexible.
