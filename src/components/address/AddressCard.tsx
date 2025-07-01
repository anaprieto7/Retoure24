"use client";

import {
  Box,
  Text,
  Badge,
  IconButton,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { useTranslation } from "react-i18next";

interface AddressCardProps {
  type: "sender" | "receiver" | "notification";
  company?: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  isMain?: boolean;
  isActive?: boolean;
  onEdit: () => void;
}

export default function AddressCard({
  type,
  company,
  street,
  postalCode,
  city,
  country,
  isMain = false,
  isActive = true,
  onEdit,
}: AddressCardProps) {
  const { t } = useTranslation("return");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");

  const typeLabel = {
    sender: t("address_form.types.sender"),
    receiver: t("address_form.types.receiver"),
    notification: t("address_form.types.notification"),
  };

  return (
    <Box
      borderWidth="1px"
      borderColor={cardBorder}
      borderRadius="md"
      p={4}
      bg={cardBg}
      w="100%"
      opacity={isActive ? 1 : 0.5}
      position="relative"
    >
      <HStack justify="space-between" mb={2}>
        <Text fontWeight="bold">{typeLabel[type]}</Text>
        <HStack spacing={2}>
          {isMain && (
            <Badge colorScheme="orange">{t("address_form.main_address")}</Badge>
          )}
          <IconButton
            icon={<FiEdit3 />}
            aria-label={t("address_form.edit")}
            size="sm"
            onClick={onEdit}
            variant="ghost"
          />
        </HStack>
      </HStack>

      <VStack align="start" spacing={1}>
        {company && <Text>{company}</Text>}
        <Text>{street}</Text>
        <Text>{`${postalCode} ${city}`}</Text>
        <Text>{country}</Text>
      </VStack>
    </Box>
  );
}
// This component serves as a card for displaying address information in the settings section of the application.
// It includes the address type, company name, street, postal code, city, and country.
// The card also has an edit button to allow users to modify the address details.
// The component uses Chakra UI for styling and layout, ensuring a consistent design across the application.
// The address type is displayed as a badge, and the card can indicate if it is the main address or if it is active or inactive.
// The useTranslation hook is used to handle translations for internationalization, ensuring that the text displayed is appropriate for the user's language preference.