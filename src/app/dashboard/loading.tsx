// app/dashboard/loading.tsx
'use client';
import { Center, Spinner, VStack, Text } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center h="100vh" bg="gray.50">
      <VStack spacing={4}>
        <Spinner size="xl" color="orange.400" thickness="4px" />
        <Text fontSize="md" color="gray.600">Cargando Retoure24…</Text>
      </VStack>
    </Center>
  );
}
