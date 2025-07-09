"use client";

import {
  Box,
  Text,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useReturnContext } from "@/context/useReturnContext";

export default function ReturnSummaryCard() {
  const bg = useColorModeValue("white", "gray.800");
  const { t } = useTranslation("return");
  const { returnData } = useReturnContext();

  const products = returnData.products || [];
  const deductions = returnData.deductions || 0;
  const currency = "€"; // Puedes adaptarlo si tienes lógica de moneda

  const productsCount = products.reduce((sum, p) => sum + (p.quantity ?? 1), 0);
  const subtotal = products.reduce(
    (sum, p) => sum + ((p.price ?? 0) * (p.quantity ?? 1)),
    0
  );
  const total = subtotal - deductions;

  return (
    <Box>
      <Text fontWeight="bold" mb={3} fontSize="lg">{t("summary.title")}</Text>
      <VStack spacing={2} align="stretch">
        <HStack justify="space-between">
          <Text color="gray.500" fontSize="sm">{t("summary.products_returned")}</Text>
          <Text fontWeight="medium">{productsCount}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text color="gray.500" fontSize="sm">{t("summary.subtotal")}</Text>
          <Text>{isNaN(subtotal) ? "—" : `${subtotal.toFixed(2)} ${currency}`}</Text>
        </HStack>
        {deductions > 0 && (
          <HStack justify="space-between">
            <Text color="gray.500" fontSize="sm">{t("summary.deductions")}</Text>
            <Text color="red.500">- {deductions.toFixed(2)} {currency}</Text>
          </HStack>
        )}
        <HStack justify="space-between" mt={2}>
          <Text fontWeight="bold" fontSize="md">{t("summary.total")}</Text>
          <Text fontWeight="bold" fontSize="lg">
            {isNaN(total) ? "—" : `${total.toFixed(2)} ${currency}`}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
// This component displays a summary of the return including the number of products returned, subtotal, deductions, and total amount.
// It uses Chakra UI for styling and i18next for translations.
// The currency is hardcoded as "€" but can be adapted based on your application's logic.