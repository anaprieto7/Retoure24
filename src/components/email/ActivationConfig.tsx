"use client";

import { Box, FormControl, FormLabel, Input, Switch, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mb={6}
      bg="white"
      shadow="sm"
    >
      <VStack align="start" spacing={4}>
        <FormControl display="flex" alignItems="center">
          <Switch
            id="activate-email"
            isChecked={isActive}
            onChange={(e) => onToggleActive(e.target.checked)}
            colorScheme="orange"
          />
          <FormLabel htmlFor="activate-email" mb="0" ml={3} fontWeight="bold">
            {t("emailTracking.activateEmailSending")}
          </FormLabel>
        </FormControl>

        {isActive && (
          <>
            <FormControl>
              <FormLabel>{t("emailTracking.emailFrom")}</FormLabel>
              <Input
                type="email"
                placeholder="example@domain.com"
                value={emailFrom}
                onChange={(e) => onChangeEmailFrom(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>{t("emailTracking.emailCCO")}</FormLabel>
              <Input
                type="email"
                placeholder="cco@domain.com"
                value={emailCCO}
                onChange={(e) => onChangeEmailCCO(e.target.value)}
              />
            </FormControl>

            <Text fontSize="sm" color="gray.500">
              {t("emailTracking.description")}
            </Text>
          </>
        )}
      </VStack>
    </Box>
  );
}

// Muestra un switch para activar o desactivar el envío de emails.

//Si está activo, muestra los inputs para Email de envío y Email CCO.

//Usa traducción para etiquetas.

//Recibe y ejecuta funciones para actualizar estado en el padre (EmailTrackingView).

//Está estilizado con Chakra UI para un buen aspecto.