"use client";

import {
  HStack,
  Badge,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

interface Props {
  statuses?: string[];
  reasons?: string[];
  warehouses?: string[];
  shops?: string[];
  search?: string;
  dateRange?: {
    startDate: Date | null;
    endDate: Date | null;
  };
  onClear: (type: string, value?: string) => void;
}

export default function ActiveFiltersBadges({
  statuses = [],
  reasons = [],
  warehouses = [],
  shops = [],
  search = "",
  dateRange = { startDate: null, endDate: null },
  onClear,
}: Props) {
  const { t } = useTranslation("return");

  const formatDate = (date: Date | null) =>
    date ? new Date(date).toLocaleDateString() : "";

  const badges: { label: string; value: string; type: string }[] = [];

  statuses.forEach((s) =>
    badges.push({ label: t(`status.${s}`), value: s, type: "status" })
  );

  reasons.forEach((r) =>
    badges.push({ label: r, value: r, type: "reason" })
  );

  warehouses.forEach((w) =>
    badges.push({ label: w, value: w, type: "warehouse" })
  );

  shops.forEach((s) =>
    badges.push({ label: s, value: s, type: "shop" })
  );

  if (search)
    badges.push({ label: `"${search}"`, value: search, type: "search" });

  if (dateRange.startDate || dateRange.endDate) {
    const label = `${formatDate(dateRange.startDate)} - ${formatDate(dateRange.endDate)}`;
    badges.push({ label, value: label, type: "date" });
  }

  if (badges.length === 0) return null;

  return (
    <HStack spacing={2} wrap="wrap" mt={2} mb={4}>
  {badges.map((b, idx) => {
    let colorScheme = "gray"; // default

    if (b.type === "status") colorScheme = "purple";
    else if (b.type === "reason") colorScheme = "blue";
    else if (b.type === "warehouse") colorScheme = "green";
    else if (b.type === "shop") colorScheme = "cyan";
    else if (b.type === "search") colorScheme = "orange";
    else if (b.type === "date") colorScheme = "pink";

    return (
      <Badge
        key={idx}
        colorScheme={colorScheme}
        px={2}
        py={1}
        borderRadius="md"
        display="flex"
        alignItems="center"
      >
        <Text mr={2}>{b.label}</Text>
        <IconButton
          aria-label={t("remove_filter")}
          size="xs"
          variant="ghost"
          icon={<CloseIcon boxSize={2.5} />}
          onClick={() => onClear(b.type, b.value)}
        />
      </Badge>
    );
  })}
</HStack>
  );
}
