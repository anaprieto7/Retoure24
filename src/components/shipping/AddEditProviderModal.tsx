"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const NATIONAL_CODE = "NACIONAL";

const europeanCountries = [
  { code: NATIONAL_CODE, labelKey: "shipping.national" },
  { code: "DE", labelKey: "shipping.countries.DE" },
  { code: "FR", labelKey: "shipping.countries.FR" },
  { code: "ES", labelKey: "shipping.countries.ES" },
  { code: "IT", labelKey: "shipping.countries.IT" },
  { code: "NL", labelKey: "shipping.countries.NL" },
];

interface ProviderData {
  id?: string;
  name: string;
  contractNumber: string;
  country: string;
  logoUrl?: string;
}

interface AddEditProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: ProviderData | null;
  onSave: (provider: ProviderData) => void;
}

export default function AddEditProviderModal({
  isOpen,
  onClose,
  initialData = null,
  onSave,
}: AddEditProviderModalProps) {
  const { t } = useTranslation("return");
  const toast = useToast();

  const [form, setForm] = useState<ProviderData>({
    id: "",
    name: "",
    contractNumber: "",
    country: NATIONAL_CODE,
    logoUrl: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        id: initialData.id || "",
        name: initialData.name || "",
        contractNumber: initialData.contractNumber || "",
        country: initialData.country || NATIONAL_CODE,
        logoUrl: initialData.logoUrl || "",
      });
    } else {
      setForm({
        id: "",
        name: "",
        contractNumber: "",
        country: NATIONAL_CODE,
        logoUrl: "",
      });
    }
  }, [initialData, isOpen]);

  function handleChange(field: keyof ProviderData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit() {
    // Validación simple
    if (!form.name.trim()) {
      toast({
        title: t("shipping.validation.name_required"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!form.contractNumber.trim()) {
      toast({
        title: t("shipping.validation.contract_required"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!form.country.trim()) {
      toast({
        title: t("shipping.validation.country_required"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onSave(form);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{initialData ? t("shipping.edit_provider") : t("shipping.add_provider")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>{t("shipping.provider_name")}</FormLabel>
              <Input
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t("shipping.provider_name_placeholder")}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{t("shipping.contract_number")}</FormLabel>
              <Input
                value={form.contractNumber}
                onChange={(e) => handleChange("contractNumber", e.target.value)}
                placeholder={t("shipping.contract_number_placeholder")}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{t("shipping.country")}</FormLabel>
              <Select
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
                placeholder={t("shipping.select_country")}
              >
                {europeanCountries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {t(c.labelKey)}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>{t("shipping.logo_url")}</FormLabel>
              <Input
                value={form.logoUrl}
                onChange={(e) => handleChange("logoUrl", e.target.value)}
                placeholder={t("shipping.logo_url_placeholder")}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            {t("shipping.cancel")}
          </Button>
          <Button colorScheme="orange" onClick={handleSubmit}>
            {initialData ? t("shipping.save_changes") : t("shipping.add")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
