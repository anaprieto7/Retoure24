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

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    // Aquí se conecta al backend para guardar la nueva contraseña
    toast({
      title: "Contraseña actualizada",
      description: "Tu nueva contraseña ha sido guardada correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setNewPassword("");
    setConfirmPassword("");
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
        Passwort zurücksetzen
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={6} textAlign="center">
       Geben Sie Ihr neues Passwort ein, um den Vorgang abzuschließen.
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Neues Passwort</FormLabel>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel>Bestätigen Sie das neue Passwort</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormControl>

        <Button colorScheme="orange" type="submit" width="full">
          Neues Passwort speichern
        </Button>
      </form>
    </Box>
  );
}
