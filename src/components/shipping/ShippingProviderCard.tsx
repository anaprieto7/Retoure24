"use client";

import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface ShippingProviderCardProps {
  provider: {
    id: string;
    name: string;
    contractNumber: string;
    country: string;
    logoUrl?: string;
  };
  onEdit: () => void;
}

export default function ShippingProviderCard({ provider, onEdit }: ShippingProviderCardProps) {
  const { t } = useTranslation("return");
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      bg={bgColor}
      borderColor={borderColor}
      boxShadow="sm"
      maxW="100%"
      role="group"
      _hover={{ boxShadow: "md" }}
      transition="box-shadow 0.2s"
    >
      <VStack spacing={4} align="start">
        {provider.logoUrl ? (
          <Image
            src={provider.logoUrl}
            alt={provider.name}
            boxSize="60px"
            objectFit="contain"
            borderRadius="md"
          />
        ) : (
          <Box
            boxSize="60px"
            bg="gray.300"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.600"
            fontWeight="bold"
            fontSize="lg"
            userSelect="none"
          >
            {provider.name.charAt(0).toUpperCase()}
          </Box>
        )}

        <VStack align="start" spacing={1} flex="1" w="100%">
          <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
            {provider.name}
          </Text>
          <Text fontSize="sm" color="gray.500" noOfLines={1}>
            {t("shipping.contract")}: {provider.contractNumber}
          </Text>
          <Text fontSize="sm" color="gray.500" noOfLines={1}>
            {t(`shipping.countries.${provider.country}`) || provider.country}
          </Text>
        </VStack>

        <HStack w="100%" justify="flex-end" pt={2}>
          <Button
            size="sm"
            colorScheme="orange"
            variant="outline"
            onClick={onEdit}
            _groupHover={{ bg: "orange.50" }}
          >
            {t("shipping.edit")}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
