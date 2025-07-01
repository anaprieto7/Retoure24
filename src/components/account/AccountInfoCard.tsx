'use client';

import {
  Box,
  Heading,
  Stack,
  HStack,
  Icon,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  useToast,
  Button,
  FormHelperText,
  FormControl,
  useColorModeValue
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiMail, FiPhone, FiUser, FiBriefcase, FiEdit3 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// This component displays and allows editing of user account information.
// It includes fields for name, email, phone, and company, with validation and save functionality.
// The component uses Chakra UI for styling and Framer Motion for animations.

// Props interface defines the expected properties for the component.
// It includes fields for name, email, phone, and company, which are all strings. 

type Props = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

export default function AccountInfoCard({ name, email, phone, company }: Props) {
  const toast = useToast();
  const { t } = useTranslation("return");

  const [formData, setFormData] = useState({ name, email, phone, company });
  const [hasChanges, setHasChanges] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    phone: false,
    company: false,
  });

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTouch = (field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  useEffect(() => {
    const changed =
      formData.name !== name ||
      formData.email !== email ||
      formData.phone !== phone ||
      formData.company !== company;
    setHasChanges(changed);
  }, [formData, name, email, phone, company]);

  const handleSave = () => {
    if (!isFormValid) {
      toast({
        title: t("error_required"),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: t("success_updated"),
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setHasChanges(false);
  };

  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      color={useColorModeValue("gray.800", "gray.300")}
      p={6}
      borderRadius="xl"
      shadow="sm"
    >
      <Heading size="md" mb={4}>
        {t("title")}
      </Heading>

      <Stack spacing={5}>
        {[
          { label: t("name_label"), key: 'name', icon: FiUser },
          { label: t("email_label"), key: 'email', icon: FiMail },
          { label: t("phone_label"), key: 'phone', icon: FiPhone },
          { label: t("company_label"), key: 'company', icon: FiBriefcase },
        ].map(({ label, key, icon }) => (
          <FormControl key={key} isInvalid={touchedFields[key] && !formData[key].trim()}>
            <HStack spacing={3}>
              <Icon as={icon} color="gray.500" />
              <Editable
                defaultValue={formData[key]}
                onChange={(val) => handleChange(key, val)}
                onEdit={() => handleTouch(key)}
              >
                <EditablePreview fontWeight="medium" />
                <EditableInput aria-label={label} />
              </Editable>
            </HStack>
            {touchedFields[key] && !formData[key].trim() && (
              <FormHelperText color="red.500" fontSize="xs" pl="30px">
                {t("field_required")}
              </FormHelperText>
            )}
          </FormControl>
        ))}
      </Stack>

      <Box display="flex" justifyContent="flex-end" mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            leftIcon={<FiEdit3 />}
            colorScheme="blue"
            onClick={handleSave}
            variant="solid"
            rounded="lg"
            size="sm"
            fontWeight="medium"
            fontSize="sm"
            boxShadow="md"
            _hover={{ boxShadow: 'lg' }}
            _active={{ boxShadow: 'md' }}
            transition="background-color 0.2s ease-in-out"
            isDisabled={!hasChanges || !isFormValid}
            px={6}
          >
            {t("edit")}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
