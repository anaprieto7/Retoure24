"use client";

import { useState, useEffect } from "react";
import { Box, Text, VStack, Collapse, useToast, Button, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiSettings, FiMail } from "react-icons/fi";
import ActivationConfig from "./ActivationConfig";
import PlaceholdersInfo from "./PlaceholdersInfo";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SettingsPageHeader from "../SettingsPageHeader";
import dynamic from "next/dynamic";

const EmailTemplates = dynamic(() => import("./EmailTemplates"), {
  ssr: false,
});

import {
  fetchEmailTrackingConfig,
  saveEmailTrackingConfig,
  EmailTrackingConfig,
} from "@/data/emailTrackingService";

import type { EmailTemplate } from "./types";

export default function EmailTrackingView() {
  const { t } = useTranslation("return");
  const toast = useToast();
  

  const [hasMounted, setHasMounted] = useState(false);
useEffect(() => {
  setHasMounted(true);
}, []);

    const breadcrumbs = [
      { labelKey: "setting", href: "/setup/account", icon: FiSettings },
      { labelKey: "email_tracking", icon: FiMail },
    ];

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
      <BreadcrumbNav items={breadcrumbs} />
      <SettingsPageHeader />
      <VStack spacing={6} align="stretch">
  <ActivationConfig
    isActive={isActive}
    onToggleActive={setIsActive}
    emailFrom={emailFrom}
    onChangeEmailFrom={setEmailFrom}
    emailCCO={emailCCO}
    onChangeEmailCCO={setEmailCCO}
  />

  {isActive && hasMounted && (
    <Box suppressHydrationWarning>
      <EmailTemplates
        templates={templates}
        onUpdateTemplate={(updatedTemplate) => {
          setTemplates((prevTemplates) =>
            prevTemplates.map((tpl) =>
              tpl.id === updatedTemplate.id ? updatedTemplate : tpl
            )
          );
        }}
      />
      <PlaceholdersInfo />
    </Box>
  )}
</VStack>

    </Stack>
  );
}
