"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí va la lógica para enviar el email
    toast({
      title: "Correo enviado",
      description: `Se ha enviado un enlace de recuperación a ${email}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setEmail("");
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={16}
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      rounded="md"
      shadow="md"
    >
      <Heading size="lg" mb={4} textAlign="center">
        Haben Sie Ihr Passwort vergessen?
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
         Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen zu.
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>E-Mail-Adresse</FormLabel>
          <Input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <Button colorScheme="orange" type="submit" width="full">
          Enviar enlace
        </Button>
      </form>
    </Box>
  );
}
