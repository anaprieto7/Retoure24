// LoginForm.tsx
'use client';

import {
  Box, Button, FormControl, FormLabel, Input, VStack, useToast, Heading, Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext'; // Importa UserContext
import { User } from '@/types/user'; // Asegúrate de importar tu interfaz de usuario
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();
  const router = useRouter();
  const { login } = useUser(); // Usa la función `login` del contexto

  const handleSubmit = async () => {
    setError(''); // Limpiar errores anteriores

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Importante para enviar JSON
        },
        body: JSON.stringify({ email }), // Envía el email (o username/password si tu mock lo requiere)
      });

      if (!res.ok) { // Si la respuesta no es 2xx (por ejemplo, 401 Unauthorized)
        const errorData = await res.json();
        setError(errorData.message || 'Error en el servidor al iniciar sesión.');
        toast({
          title: 'Error de inicio de sesión',
          description: errorData.message || 'Hubo un problema al intentar iniciar sesión.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return; // Salir de la función si hay un error
      }

      // Si la respuesta es exitosa (res.ok es true)
      const userData: User = await res.json(); // Parsea la respuesta como User

      // Aquí, la `userData` debería ser el usuario encontrado por tu API mock.
      // Ya no necesitas 'foundUser' porque la API es quien te lo debe dar.
      if (userData && userData.id) { // Verificar que `userData` sea válido (ej. tiene un ID)
        toast({
          title: 'Sesión iniciada',
          description: `Bienvenido, ${userData.name}`, // Muestra el nombre del usuario
          status: 'success',
          duration: 100000,
          isClosable: true,
        });
        login(userData); // Llama a la función de login del contexto con los datos del usuario
        router.push('/dashboard');
      } else {
        // Esto podría ocurrir si la API devuelve un 200 OK pero sin datos de usuario válidos
        setError('No se pudo obtener la información del usuario.');
        toast({
          title: 'Error',
          description: 'No se recibieron datos válidos del usuario.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error('Error al enviar la solicitud de login:', err);
      setError('Error de conexión. Intenta de nuevo.');
      toast({
        title: 'Error de red',
        description: 'No se pudo conectar al servidor.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="6">Login</Heading>
      <VStack spacing="4">
        <FormControl>
          <FormLabel>E-mail-Addresse</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@retoure24.com"
          />
        </FormControl>
        
        <Button colorScheme="teal" w="full" onClick={handleSubmit}>
          Login
        </Button>
        {error && <Box color="red.500">{error}</Box>}
        <Text fontSize="sm" mt={4} textAlign="center">
          <Link href="/forgot-password" style={{ color: "#F97316" }}>
            Passwort vergessen?
          </Link>
        </Text>
      </VStack>
    </Box>
  );
}