"use client";

import { Flex, Heading, Badge, Text, Spacer, Box, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useReturnContext } from "@/context/useReturnContext";


const statusColors = {
  Registered: "orange",
  Approved: "blue",
  Received: "teal",
  Refunded: "green",
  Rejected: "red",
  Cancelled: "red"
};

export default function ReturnDetailHeader() {
  const { returnData, shop, warehouse, showShop, showWarehouse } = useReturnContext();

  return (
    <Flex align="center" gap={4} mb={1}>
      <Heading size="md">Rückgabe #{returnData.id}</Heading>
      <Badge colorScheme="blue" fontSize="0.8em">{returnData.status}</Badge>
      <Spacer />
      <Text color="gray.500" fontSize="sm">
        {new Date(returnData.date).toLocaleDateString()}
      </Text>
      {(showShop || showWarehouse) && (
        <HStack spacing={8} mt={1} fontSize="sm" color="gray.600">
          {showShop && (
            <Text>🏬 <strong>Shop:</strong> {shop?.name || "-"}</Text>
          )}
          {showWarehouse && (
            <Text>🏢 <strong>W:</strong> {warehouse?.name || "-"}</Text>
          )}
        </HStack>
      )}
    </Flex>
  );
}
