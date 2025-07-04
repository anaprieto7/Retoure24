"use client";

import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  IconButton,
  useToast,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiCopy } from "react-icons/fi";

export default function PlaceholdersInfo() {
  const { t } = useTranslation("return");
  const toast = useToast();

  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `Copiado: ${text}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const placeholders = [
    {
      tag: "[[order.id]]",
      label: t("emailTracking.placeholdersInfo.tags.orderId"),
    },
    {
      tag: "[[customer.name]]",
      label: t("emailTracking.placeholdersInfo.tags.customerName"),
    },
    {
      tag: "[[customer.phone]]",
      label: t("emailTracking.placeholdersInfo.tags.customerPhone"),
    },
    {
      tag: "[[customer.email]]",
      label: t("emailTracking.placeholdersInfo.tags.customerEmail"),
    },
  ];

  return (
    <Box
      borderRadius="md"
      p={4}
      bg={bg}
      shadow="sm"
    >
      <Text fontWeight="bold" fontSize="sm" mb={2}>
        {t("emailTracking.placeholdersInfo.title")}
      </Text>

      <Text mb={4} fontSize="sm" color="gray.600">
        {t("emailTracking.placeholdersInfo.description")}
      </Text>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>{t("emailTracking.placeholdersInfo.tag")}</Th>
            <Th>{t("emailTracking.placeholdersInfo.attribute")}</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {placeholders.map((item) => (
            <Tr key={item.tag}>
              <Td>{item.tag}</Td>
              <Td>{item.label}</Td>
              <Td>
                <Tooltip label="Copiar al portapapeles">
                  <IconButton
                    aria-label={`Copiar ${item.tag}`}
                    icon={<FiCopy />}
                    size="xs"
                    variant="ghost"
                    onClick={() => handleCopy(item.tag)}
                  />
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
