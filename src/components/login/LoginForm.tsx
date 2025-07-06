'use client';

import {
  Box, Button, FormControl, FormLabel, Input, VStack, useToast, Heading
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      toast({
        title: 'Sesión iniciada',
        description: 'Bienvenido',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      router.push('/dashboard');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="6">Iniciar sesión</Heading>
      <VStack spacing="4">
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@retoure24.com"
          />
        </FormControl>
        <Button colorScheme="teal" w="full" onClick={handleSubmit}>
          Iniciar sesión
        </Button>
        {error && <Box color="red.500">{error}</Box>}
      </VStack>
    </Box>
  );
}
