"use client";
import {
  Box,
  Text,
  HStack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

interface ReturnSummaryCardProps {
  productsCount: number;
  subtotal: number;
  deductions?: number;
  total: number;
  currency?: string;
  refundStatus: "Pendiente" | "Emitido" | "Rechazado";
}

const statusColor = {
  Pendiente: "orange",
  Emitido: "green",
  Rechazado: "red",
};

export default function ReturnSummaryCard({
  productsCount,
  subtotal,
  deductions = 0,
  total,
  currency = "€",
  refundStatus,
}: ReturnSummaryCardProps) {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box>
      <Text fontWeight="bold" mb={3} fontSize="lg">Resumen de devolución</Text>
      <VStack spacing={2} align="stretch">
        <HStack justify="space-between">
          <Text color="gray.500" fontSize="sm">Productos devueltos:</Text>
          <Text fontWeight="medium">{productsCount}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text color="gray.500" fontSize="sm">Subtotal:</Text>
          <Text>{subtotal.toFixed(2)} {currency}</Text>
        </HStack>
        {deductions > 0 && (
          <HStack justify="space-between">
            <Text color="gray.500" fontSize="sm">Deducciones:</Text>
            <Text color="red.500">- {deductions.toFixed(2)} {currency}</Text>
          </HStack>
        )}
        <HStack justify="space-between" mt={2}>
          <Text fontWeight="bold" fontSize="md">Total a reembolsar:</Text>
          <Text fontWeight="bold" fontSize="lg">{total.toFixed(2)} {currency}</Text>
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
