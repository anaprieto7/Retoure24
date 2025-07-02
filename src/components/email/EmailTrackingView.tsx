"use client";

import { useState, useEffect } from "react";
import { Box, Text, VStack, Collapse, useToast, Button, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import ActivationConfig from "./ActivationConfig";
import EmailTemplates from "./ EmailTemplates";
import PlaceholdersInfo from "./PlaceholdersInfo";

import {
  fetchEmailTrackingConfig,
  saveEmailTrackingConfig,
  EmailTrackingConfig,
} from "@/data/emailTrackingService";

import type { EmailTemplate } from "./types";

export default function EmailTrackingView() {
  const { t } = useTranslation("return");
  const toast = useToast();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Estado general
  const [isActive, setIsActive] = useState(false);
  const [emailFrom, setEmailFrom] = useState("");
  const [emailCCO, setEmailCCO] = useState("");

  // Estado plantillas
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);

  // Cargar configuración al inicio
  useEffect(() => {
    fetchEmailTrackingConfig().then((config) => {
      setIsActive(config.isActive);
      setEmailFrom(config.emailFrom);
      setEmailCCO(config.emailCCO);
      setTemplates(config.templates);
      setLoading(false);
    });
  }, []);

  // Validar emails
  function validateEmail(email: string) {
    if (!email) return true; // Permitir vacío (especialmente para CCO)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Validar todo antes de guardar
  function validateAll() {
    if (isActive) {
      if (!validateEmail(emailFrom)) {
        toast({
          title: t("emailTracking.validation.invalidEmailFrom"),
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return false;
      }
      if (emailCCO && !validateEmail(emailCCO)) {
        toast({
          title: t("emailTracking.validation.invalidEmailCCO"),
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return false;
      }

      for (const tpl of templates) {
        if (!tpl.subject.trim()) {
          toast({
            title: t("emailTracking.validation.emptySubject"),
            description: t(`emailTracking.templates.${tpl.key}`),
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          return false;
        }
        if (!tpl.content.trim()) {
          toast({
            title: t("emailTracking.validation.emptyContent"),
            description: t(`emailTracking.templates.${tpl.key}`),
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          return false;
        }
      }
    }
    return true;
  }

  // Guardar configuración completa
  function handleSave() {
    if (!validateAll()) return;

    setSaving(true);
    const configToSave: EmailTrackingConfig = {
      isActive,
      emailFrom,
      emailCCO,
      templates,
    };
    saveEmailTrackingConfig(configToSave)
      .then(() => {
        toast({
          title: t("emailTracking.saveSuccess"),
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: t("emailTracking.saveError"),
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        setSaving(false);
      });
  }

  if (loading) return <Text>{t("loading")}</Text>;

  return (
    <Stack p={6} maxW="container.lg" mx="auto">
      <VStack spacing={6} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          {t("emailTracking.title")}
        </Text>
        <ActivationConfig
          isActive={isActive}
          onToggleActive={setIsActive}
          emailFrom={emailFrom}
          onChangeEmailFrom={setEmailFrom}
          emailCCO={emailCCO}
          onChangeEmailCCO={setEmailCCO}
        />

        <Collapse in={isActive} animateOpacity>
          <EmailTemplates templates={templates} onUpdateTemplate={setTemplates} />
          <PlaceholdersInfo />
          <Box textAlign="right" mt={4}>
            <Button
              colorScheme="orange"
              onClick={handleSave}
              isLoading={saving}
              loadingText={t("emailTracking.saving")}
            >
              {t("emailTracking.saveAll")}
            </Button>
          </Box>
        </Collapse>
      </VStack>
    </Stack>
  );
}
