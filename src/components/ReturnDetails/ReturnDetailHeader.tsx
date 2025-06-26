"use client";
import { Flex, Heading, Badge, Text, Spacer } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface ReturnDetailHeaderProps {
  returnId: string;
  status: "Registered" | "Approved" | "Received" | "Refunded" | "Rejected" | "Cancelled";
  date: string;
}

const statusColors = {
  Registered: "orange",
  Approved: "blue",
  Received: "teal",
  Refunded: "green",
  Rejected: "red",
  Cancelled: "red"
};

export default function ReturnDetailHeader({ returnId, status, date }: ReturnDetailHeaderProps) {
  const { t } = useTranslation("return");

  return (
    <Flex align="center" gap={4} mb={1}>
      <Heading size="md">{t("retoure_id", { id: returnId })}</Heading>
      <Badge colorScheme={statusColors[status] || "gray"} fontSize="0.8em">
        {t(`status.${status}`)}
      </Badge>
      <Spacer />
      <Text color="gray.500" fontSize="sm">
        {t("date_label")} {date}
      </Text>
    </Flex>
  );
}
