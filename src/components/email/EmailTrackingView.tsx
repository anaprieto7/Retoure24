"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  Stack,
  useToast,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ActivationConfig from "./ActivationConfig";
import PlaceholdersInfo from "./PlaceholdersInfo";
import dynamic from "next/dynamic";
import {
  fetchEmailTrackingConfig,
  saveEmailTrackingConfig,
  EmailTrackingConfig,
} from "@/data/emailTrackingService";
import type { EmailTemplate } from "./types";
import { FiMail, FiSettings } from "react-icons/fi";
import BreadcrumbNav from "../BreadcrumbNav";

const EmailTemplates = dynamic(() => import("./EmailTemplates"), {
  ssr: false,
});

interface Props {
  shopId: string;
  shopName: string;
}

export default function EmailTrackingView({ shopId, shopName }: Props) {
  const { t } = useTranslation("return");
  const toast = useToast();
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [emailFrom, setEmailFrom] = useState("");
  const [emailCCO, setEmailCCO] = useState("");
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchEmailTrackingConfig(shopId,shopName).then((config) => {
      setIsActive(config.isActive);
      setEmailFrom(config.emailFrom);
      setEmailCCO(config.emailCCO);
      setTemplates(config.templates);
      setLoading(false);
    });
  }, [shopId]);

  function validateEmail(email: string) {
    if (!email) return true;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

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
        if (!tpl.subject.trim() || !tpl.content.trim()) {
          toast({
            title: t("emailTracking.validation.emptyFields"),
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

  function handleSave() {
    if (!validateAll()) return;

    setSaving(true);
    const configToSave: EmailTrackingConfig = {
      shopId,
      isActive,
      emailFrom,
      emailCCO,
      templates,
    };
    saveEmailTrackingConfig(shopId, configToSave)
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

  const color= useColorModeValue("gray.800","gray.300");

  const breadcrumbs = [
      { labelKey: 'setting', href: '/setup/account', icon: FiSettings },
      { labelKey: 'Email Tracking', href: '/setup/email-tracking', icon: FiMail},
      { label: `Shop ${shopName}`, isCurrent: true },
    ];

  return (
    <Stack p={6} maxW="container.lg" mx="auto">
  <BreadcrumbNav items={breadcrumbs} />

  <Box mb={4}>
    <Heading size="lg" mb={2} color={color}>
     Email tracking:   {shopName}
    </Heading>
    <Text fontSize="sm" color={color}>
      In diesem Abschnitt können Sie die Einstellungen für den Versand von Folge-E-Mails
      an Kunden konfigurieren. Dazu gehört auch das Einrichten von E-Mail-Vorlagen.
    </Text>
  </Box>

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
          onUpdateTemplate={(updatedTemplate) =>
            setTemplates((prev) =>
              prev.map((tpl) =>
                tpl.id === updatedTemplate.id ? updatedTemplate : tpl
              )
            )
          }
        />
        <PlaceholdersInfo />
      </Box>
    )}
  </VStack>
</Stack>

  );
}
