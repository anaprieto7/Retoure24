// src/components/dashboard/DashboardCardsSingle.tsx

"use client";

import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  useColorModeValue,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";

type CardData = {
  label: string;
  value: number | string;
  change?: number;
  icon?: ReactElement;
  color: string;
  arrowColor?: string;
};

type Props = {
  card: CardData;
};

export default function DashboardCardsSingle({ card }: Props) {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue(`${card.color}.500`, `${card.color}.300`);
  const changeColor = card.change && card.change < 0 ? "red.500" : "green.500";
  const arrow = card.change && card.change < 0 ? "▼" : "▲";

  return (
    <Box
      bg={bg}
      borderRadius="md"
      p={4}
      shadow="sm"
      borderLeft="4px solid"
      borderColor={`${card.color}.400`}
    >
      <Stat>
        <StatLabel>{card.label}</StatLabel>
        <Flex align="center" justify="space-between" mt={1}>
          <StatNumber>{card.value}</StatNumber>
          {card.icon && (
            <Box
              bg={`${card.color}.100`}
              p={2}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={card.icon} boxSize={5} color={color} />
            </Box>
          )}
        </Flex>
        {typeof card.change === "number" && (
          <StatHelpText color={changeColor}>
            <Text as="span" fontWeight="semibold">
              {arrow} {Math.abs(card.change)}%
            </Text>{" "}
            Last Week
          </StatHelpText>
        )}
      </Stat>
    </Box>
  );
}
