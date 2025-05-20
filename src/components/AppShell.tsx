// src/components/AppShell.tsx
"use client";

import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useColorModeValue } from "@chakra-ui/react";

export default function AppShell({ children }: { children: React.ReactNode }) {
    const bgMain = useColorModeValue("gray.50", "gray.900");
  return (
    <Flex>
      <Sidebar />
      <Box flex="1">
        <Header />
        <Box bg={useColorModeValue("gray.50", "gray.900")} minH="100vh" p={6}>
             {children}
        </Box>

      </Box>
    </Flex>
  );
}
