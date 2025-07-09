"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function RegisterForm() {
  const [clientType, setClientType] = useState("wemalo"); // 'wemalo' oder 'independent'
  const [warehouse, setWarehouse] = useState(""); // Finitex oder Logitec
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Fehler",
        description: "Die Passwörter stimmen nicht überein.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Benutzer registriert",
      description: "Dein Konto wurde erfolgreich erstellt.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setWarehouse("");
  };

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={12}
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      rounded="md"
      shadow="md"
    >
      <Heading size="lg" mb={6} textAlign="center">
        Konto erstellen
      </Heading>

      <form onSubmit={handleRegister}>
        <FormControl mb={4}>
          <FormLabel>Vollständiger Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>E-Mail-Adresse</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Passwort</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Passwort bestätigen</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel>Kundentyp</FormLabel>
          <RadioGroup onChange={setClientType} value={clientType}>
            <Stack direction="row">
              <Radio value="wemalo">WEMALO-Kunde</Radio>
              <Radio value="independent">Unabhängiger Kunde</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {clientType === "wemalo" && (
          <FormControl mb={4}>
            <FormLabel>Lager auswählen</FormLabel>
            <Select
              placeholder="Lager auswählen"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
              required
            >
              <option value="finitex">Finitex</option>
              <option value="logitec">Logitec</option>
            </Select>
          </FormControl>
        )}

        <Button type="submit" colorScheme="orange" width="full" mt={4}>
          Registrieren
        </Button>
      </form>
    </Box>
  );
}
