"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Stack,
  Select,
  useToast,
  Box,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReturnAccessOptions from "./ReturnAuthOptions";
import LandingPreview from "./LandingPreview";

interface LandingConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  shop: {
    id: string;
    name: string;
    logoUrl?: string;
    config?: {
      welcomeText?: string;
      requiredFields?: string[];
      primaryColor?: string;
      returnPolicy?: string;
      language?: string;
    };
  };
  onSave: (updatedConfig: any) => void;
}



export default function LandingConfigModal({
  isOpen,
  onClose,
  shop,
  onSave,
}: LandingConfigModalProps) {
  const toast = useToast();
  const [welcomeText, setWelcomeText] = useState("");
  const [requiredFields, setRequiredFields] = useState<string[]>([]);
  const [primaryColor, setPrimaryColor] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");
  const [language, setLanguage] = useState("de");

  useEffect(() => {
    setWelcomeText(shop.config?.welcomeText || "");
    setRequiredFields(shop.config?.requiredFields || []);
    setPrimaryColor(shop.config?.primaryColor || "");
    setReturnPolicy(shop.config?.returnPolicy || "");
    setLanguage(shop.config?.language || "de");
  }, [shop]);

  const handleSave = () => {
    onSave({
      shopId: shop.id,
      welcomeText,
      requiredFields,
      primaryColor,
      returnPolicy,
      language,
    });

    toast({
      title: "Configuración guardada",
      status: "success",
      isClosable: true,
      duration: 2000,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Erstellt Landing Page für {shop.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Willkommens- oder Kopfzeilentext</FormLabel>
              <Input
                value={welcomeText}
                onChange={(e) => setWelcomeText(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Grundfarbe</FormLabel>
              <Input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </FormControl>

            <ReturnAccessOptions />

            <FormControl>
              <FormLabel>Rückgabepolitik</FormLabel>
              <Textarea
                value={returnPolicy}
                onChange={(e) => setReturnPolicy(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Sprache</FormLabel>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </Select>
            </FormControl>
          </Stack>
          <LandingPreview
            logoUrl={shop.logoUrl}
            welcomeText={welcomeText}
            primaryColor={primaryColor}
            returnPolicy={returnPolicy}
            requiredFields={requiredFields}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" size="sm" onClick={onClose} mr={3}>
            Schließen
          </Button>
          <Button colorScheme="blue" size="sm" onClick={handleSave}>
            Speicher
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
