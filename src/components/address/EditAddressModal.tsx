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
  Select,
  Switch,
  Checkbox,
  Grid,
  Text,
  Flex,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);

export default function EditAddressModal({
  isOpen,
  onClose,
  initialData = null,
  onSave,
}) {
  const { t } = useTranslation("return");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    street: "",
    number: "",
    additional: "",
    zip: "",
    city: "",
    country: "",
    type: "",
    isActive: true,
    isMain: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm({
        company: initialData.company || "",
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        street: initialData.street || "",
        number: initialData.number || "",
        additional: initialData.additional || "",
        zip: initialData.zip || "",
        city: initialData.city || "",
        country: initialData.country || "",
        type: initialData.type || "",
        isActive: initialData.isActive !== undefined ? initialData.isActive : true,
        isMain: initialData.isMain || false,
        id: initialData.id || null,
      });
      setSaved(false);
    } else {
      setForm({
        company: "",
        name: "",
        email: "",
        phone: "",
        street: "",
        number: "",
        additional: "",
        zip: "",
        city: "",
        country: "",
        type: "",
        isActive: true,
        isMain: false,
        id: null,
      });
      setSaved(false);
    }
  }, [initialData, isOpen]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simula guardado async
    setTimeout(() => {
      onSave(form);
      setIsSaving(false);
      setSaved(true);
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("address_form.title_edit") || "Editar dirección"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Contact Section */}
          <Text fontWeight="bold" mb={3}>
            {t("address_form.contact_section")}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={6}>
            <FormControl>
              <FormLabel>{t("address_form.company")}</FormLabel>
              <Input
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.name")}</FormLabel>
              <Input
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.email")}</FormLabel>
              <Input
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.phone")}</FormLabel>
              <Input
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </FormControl>
          </Grid>

          {/* Address Section */}
          <Text fontWeight="bold" mb={3}>
            {t("address_form.address_section")}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={6}>
            <FormControl>
              <FormLabel>{t("address_form.street")}</FormLabel>
              <Input
                value={form.street}
                onChange={(e) => handleChange("street", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.number")}</FormLabel>
              <Input
                value={form.number}
                onChange={(e) => handleChange("number", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.additional")}</FormLabel>
              <Input
                value={form.additional}
                onChange={(e) => handleChange("additional", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.zip")}</FormLabel>
              <Input
                value={form.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.city")}</FormLabel>
              <Input
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t("address_form.country")}</FormLabel>
              <Input
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </FormControl>
          </Grid>

          {/* Additional Section */}
          <Text fontWeight="bold" mb={3}>
            {t("address_form.additional_section")}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl>
              <FormLabel>{t("address_form.type")}</FormLabel>
              <Select
                value={form.type}
                onChange={(e) => handleChange("type", e.target.value)}
                placeholder={t("address_form.select_type")}
              >
                <option value="sender">{t("address_form.sender")}</option>
                <option value="receiver">{t("address_form.receiver")}</option>
                <option value="notification">{t("address_form.notification")}</option>
              </Select>
            </FormControl>

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <FormControl>
                <FormLabel>{t("address_form.status")}</FormLabel>
                <Flex justify="space-between" align="center">
                  <Text fontWeight="medium">
                    {form.isActive
                      ? t("address_form.active")
                      : t("address_form.inactive")}
                  </Text>
                  <Switch
                    isChecked={form.isActive}
                    onChange={(e) => handleChange("isActive", e.target.checked)}
                    colorScheme="orange"
                  />
                </Flex>

                <AnimatePresence>
                  {form.isActive && (
                    <MotionBox
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Checkbox
                        mt={3}
                        isChecked={form.isMain}
                        onChange={(e) => handleChange("isMain", e.target.checked)}
                        colorScheme="orange"
                      >
                        {t("address_form.set_main")}
                      </Checkbox>
                    </MotionBox>
                  )}
                </AnimatePresence>
              </FormControl>
            </Box>
          </Grid>
        </ModalBody>

        <ModalFooter>
          <AnimatePresence mode="wait">
            {saved ? (
              <MotionBox
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button leftIcon={<span>✅</span>} colorScheme="green" variant="solid">
                  {t("address_form.saved")}
                </Button>
              </MotionBox>
            ) : (
              <MotionBox
                key="save"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  colorScheme="orange"
                  onClick={handleSave}
                  isLoading={isSaving}
                  loadingText={t("address_form.saving")}
                >
                  {t("address_form.save")}
                </Button>
              </MotionBox>
            )}
          </AnimatePresence>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
