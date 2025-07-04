// loading.tsx
'use client';
import { Center, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center h="100vh" bg="gray.50">
      <Spinner size="xl" color="orange.400" thickness="4px" />
    </Center>
  );
}
