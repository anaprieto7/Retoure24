"use client";

import {
  HStack,
  VStack,
  Avatar,
  Text,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiMapPin, FiCopy } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n"; // asegúrate que la ruta sea correcta

interface ReturnCustomerInfoProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl?: string;
  customerId?: string;
}

export default function ReturnCustomerInfo({
  name,
  email,
  phone,
  address,
  avatarUrl,
  customerId,
}: ReturnCustomerInfoProps) {
  const { t } = useTranslation("return");
  const toast = useToast();
  const [copied, setCopied] = useState(false);
  const [, setLangUpdated] = useState(0); // forzar render

  // 🔁 Forzar render cuando cambia el idioma
  useEffect(() => {
    const handleLangChange = () => setLangUpdated((prev) => prev + 1);
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    toast({
      title: t("copy_toast_title"),
      description: t("copy_toast_desc"),
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top-right",
    });
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <HStack spacing={3} align="start">
      <Avatar size="md" name={name} src={avatarUrl} />
      <VStack align="start" spacing={1} flex={1}>
        <Text fontWeight="bold">{name}</Text>
        {customerId && (
          <Text fontSize="xs" color="gray.400">
            ID: {customerId}
          </Text>
        )}
        <HStack fontSize="sm" color="gray.600">
          <Icon as={FiMail} />
          <Text as="a" href={`mailto:${email}`}>
            {email}
          </Text>
          <Button
            as="a"
            href={`mailto:${email}`}
            size="xs"
            colorScheme="orange"
            variant="ghost"
            leftIcon={<FiMail />}
            ml={2}
          >
            <Text>{t("contact")}</Text>
          </Button>
        </HStack>
        <HStack fontSize="sm" color="gray.600">
          <Icon as={FiPhone} />
          <Text as="a" href={`tel:${phone}`}>
            {phone}
          </Text>
        </HStack>
        <HStack fontSize="sm" color="gray.600" align="start" spacing={2}>
          <Icon as={FiMapPin} mt={0.5} />
          <Text flex={1}>{address}</Text>
          <Button
            size="xs"
            leftIcon={<FiCopy />}
            colorScheme={copied ? "green" : "gray"}
            variant={copied ? "solid" : "ghost"}
            onClick={handleCopyAddress}
          >
            {copied ? t("copied") : t("copy")}
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
}
