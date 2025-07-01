"use client";
import {
  Box,
  Text,
  HStack,
  VStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Product {
  name: string;
  quantity: number;
  price: number;
}

interface ReturnSummaryCardProps {
  products?: Product[];
  deductions?: number;
  currency?: string;
  refundStatus: "Pendiente" | "Emitido" | "Rechazado";
}

const statusColor = {
  Pendiente: "orange",
  Emitido: "green",
  Rechazado: "red",
};

export default function ReturnSummaryCard({
  products = [],
  deductions = 0,
  currency = "€",
  refundStatus,
}: ReturnSummaryCardProps) {
  const bg = useColorModeValue("white", "gray.800");
  const { t } = useTranslation("return");

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
        <HStack justify="flex-end" mt={2}>
          <Badge colorScheme={statusColor[refundStatus]} fontSize="sm" px={3}>
            {refundStatus}
          </Badge>
        </HStack>
      </VStack>
    </Box>
  );
}
