"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  VStack,
  Stack,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiMail } from "react-icons/fi";

interface ActivationConfigProps {
  isActive: boolean;
  onToggleActive: (active: boolean) => void;
  emailFrom: string;
  onChangeEmailFrom: (email: string) => void;
  emailCCO: string;
  onChangeEmailCCO: (email: string) => void;
}

export default function ActivationConfig({
  isActive,
  onToggleActive,
  emailFrom,
  onChangeEmailFrom,
  emailCCO,
  onChangeEmailCCO,
}: ActivationConfigProps) {
  const { t } = useTranslation("return");

  // Soporte para dark mode
  const cardBg = useColorModeValue("white", "gray.800");
  const descriptionColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box
      p={6}
      borderRadius="md"
      mb={6}
      bg={cardBg}
      shadow="sm"
    >
      <Stack direction="row" justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="semibold">
          {t("emailTracking.activateEmailSending")}
        </Text>
        <Switch
          id="activate-email"
          isChecked={isActive}
          onChange={(e) => onToggleActive(e.target.checked)}
          colorScheme="orange"
        />
      </Stack>

      {isActive && (
        <VStack align="start" spacing={4}>
          <FormControl>
            <FormLabel fontSize={"sm"}>{t("emailTracking.emailFrom")}</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiMail />
              </InputLeftElement>
              <Input
                fontSize={"sm"}
                type="email"
                placeholder="example@domain.com"
                value={emailFrom}
                onChange={(e) => onChangeEmailFrom(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel fontSize={"sm"}>{t("emailTracking.emailCCO")}</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiMail />
              </InputLeftElement>
              <Input
                fontSize={"sm"}
                type="email"
                placeholder="cco@domain.com"
                value={emailCCO}
                onChange={(e) => onChangeEmailCCO(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <Text fontSize="sm" color={descriptionColor}>
            {t("emailTracking.description")}
          </Text>
        </VStack>
      )}
    </Box>
  );
}
