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
  const cardBg = useColorModeValue("white", "gray.700");

  const typeLabel = {
    sender: t("address_form.types.sender"),
    receiver: t("address_form.types.receiver"),
    notification: t("address_form.types.notification"),
  };

  return (
    <Box
      
      borderRadius="md"
      p={4}
      bg={cardBg}
      w="100%"
      opacity={isActive ? 1 : 0.5}
      position="relative"
    >
      {/* Badge arriba */}
      {isMain && (
        <Badge mb={2} colorScheme="orange" fontSize="sm">
          {t("address_form.main_address")}
        </Badge>
      )}

      {/* Label tipo arriba */}
      <Text fontSize="sm" color="gray.500" mb={1} fontWeight="semibold" textTransform="uppercase">
        {typeLabel[type]}
      </Text>

      {/* Título y botón editar en línea */}
      <HStack justify="space-between" mb={2}>
        {company ? (
          <Text fontWeight="bold" fontSize="lg">
            {company}
          </Text>
        ) : (
          <Text fontWeight="bold" fontSize="lg" color="gray.600" fontStyle="italic">
            {t("address_form.no_company")}
          </Text>
        )}

        <IconButton
          icon={<FiEdit3 />}
          aria-label={t("address_form.edit")}
          size="sm"
          onClick={onEdit}
          variant="ghost"
          rounded={"full"}
        />
      </HStack>

      {/* Dirección debajo */}
      <VStack align="start" spacing={1}>
        <Text>{street}</Text>
        <Text>{`${postalCode} ${city}`}</Text>
        <Text>{country}</Text>
      </VStack>
    </Box>
  );
}
