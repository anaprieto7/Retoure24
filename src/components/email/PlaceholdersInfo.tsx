"use client";

import { Box, Collapse, Table, Tbody, Td, Th, Thead, Tr, Text, useDisclosure, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function PlaceholdersInfo() {
  const { t } = useTranslation("return");
  const { isOpen, onToggle } = useDisclosure();
  const [expanded, setExpanded] = useState(false);

  function handleToggle() {
    onToggle();
    setExpanded(!expanded);
  }

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} bg="white" shadow="sm">
      <Button size="sm" onClick={handleToggle} mb={4} colorScheme="orange" variant="outline">
        {expanded ? t("emailTracking.placeholdersInfo.hideInfo") : t("emailTracking.placeholdersInfo.showInfo")}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Text fontWeight="bold" mb={2}>
          {t("emailTracking.placeholdersInfo.title")}
        </Text>
        <Text mb={4} color="gray.600">
          {t("emailTracking.placeholdersInfo.description")}
        </Text>

        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>{t("emailTracking.placeholdersInfo.tag")}</Th>
              <Th>{t("emailTracking.placeholdersInfo.attribute")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>[[order.id]]</Td>
              <Td>{t("emailTracking.placeholdersInfo.tags.orderId")}</Td>
            </Tr>
            <Tr>
              <Td>[[customer.name]]</Td>
              <Td>{t("emailTracking.placeholdersInfo.tags.customerName")}</Td>
            </Tr>
            <Tr>
              <Td>[[customer.phone]]</Td>
              <Td>{t("emailTracking.placeholdersInfo.tags.customerPhone")}</Td>
            </Tr>
            <Tr>
              <Td>[[customer.email]]</Td>
              <Td>{t("emailTracking.placeholdersInfo.tags.customerEmail")}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Collapse>
    </Box>
  );
}
