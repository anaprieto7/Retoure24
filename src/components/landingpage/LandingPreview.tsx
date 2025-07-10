"use client";

import {
  Box,
  Heading,
  Text,
  Stack,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
  Badge,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  Input,
  Avatar
} from "@chakra-ui/react";

interface LandingPreviewProps {
  logoUrl?: string;
  welcomeText: string;
  primaryColor: string;
  returnPolicy: string;
  requiredFields: string[];
}

export default function LandingPreview({
  logoUrl,
  welcomeText,
  primaryColor,
  returnPolicy,
  requiredFields,
}: LandingPreviewProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box mt={12} p={4} bg={bg} borderRadius="md">
      <Heading size="md" mb={4}>
        Vorschau der Seite
      </Heading>

      {/* Botón para abrir en pantalla completa */}
      <Button onClick={onOpen} colorScheme="blue" mb={4}>
        Vorschau in voller Größe
      </Button>

      <PreviewContent
        logoUrl={logoUrl}
        welcomeText={welcomeText}
        primaryColor={primaryColor}
        returnPolicy={returnPolicy}
        requiredFields={requiredFields}
      />

      {/* Modal de pantalla completa */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent bg={bg} p={8}>
          <ModalCloseButton />
          <ModalBody>
            <PreviewContent
              logoUrl={logoUrl}
              welcomeText={welcomeText}
              primaryColor={primaryColor}
              returnPolicy={returnPolicy}
              requiredFields={requiredFields}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function PreviewContent({
  logoUrl,
  welcomeText,
  primaryColor,
  returnPolicy,
  requiredFields,
}: LandingPreviewProps) {
  return (
    <Box
      borderRadius="lg"
      p={6}
      bg="white"
      maxW="xxl" mx="auto" mt="10"
    >
      {logoUrl && (
        <Box mb={4}>
            <Avatar> </Avatar>
          <img src={logoUrl} alt="Shop Logo" width={120} />
        </Box>
      )}

      <Heading size="lg" mb={4} color={primaryColor}>
        {welcomeText || "Willkommen bei den ShopName RetourePortal "}
      </Heading>
      <FormControl>
          <FormLabel mb={2} fontWeight={"bold"} >Zugangsoptionen zur Rückgabeseite</FormLabel>
            <FormLabel fontSize={"sm"} mb={0} >Bestellt Number</FormLabel>
              <Input
                    value={"deine Besttelt Number"}
                    onChange={(e) => setWelcomeText(e.target.value)}
                    w={"70%"}
               />            
        </FormControl>
        <FormControl mt={2}>
            <FormLabel fontSize={"sm"} mb={0} >Postleitzahl</FormLabel>
              <Input
                    value={"deine Besttelt Number"}
                    onChange={(e) => setWelcomeText(e.target.value)}
                    w={"70%"}
               />            
        </FormControl>

      <Text mb={4} mt={4}>
        {returnPolicy ||
          "Bitte geben Sie Ihre Bestellnummer ein, um Ihre Rückgabe zu starten."}
      </Text>

      {requiredFields.length > 0 && (
        <Box mt={4}>
          <Text fontWeight="bold" mb={2}>
            Erforderliche Felder:
          </Text>
          <Stack direction="row" wrap="wrap" spacing={2}>
            {requiredFields.map((field) => (
              <Badge key={field} colorScheme="orange">
                {field}
              </Badge>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
