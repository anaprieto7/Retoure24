"use client";

import {
  Box,
  Flex,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";

type CardData = {
  label: string;
  value: string | number;
  change?: number;
  icon?: ReactElement;
  color: string;       // Chakra color (ej: 'orange', 'blue', etc.)
  arrowColor?: string; // Chakra color for change indicator
};

type Props = {
  data: CardData[];
};

export default function DashboardCardsSingle({ data }: Props) {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex gap={6} wrap="wrap">
      {data.map((card, idx) => (
        <Box
          key={idx}
          flex="1 1 220px"
          p={5}
          borderRadius="md"
          bg={bg}
          borderLeft="6px solid"
          borderColor={`${card.color}.400`}
          boxShadow="sm"
        >
          <Stat>
            <StatLabel color="gray.500" mb={1}>
              {card.label}
            </StatLabel>
            <StatNumber fontSize="2xl">{card.value}</StatNumber>
            {typeof card.change === "number" && (
              <StatHelpText color={card.change >= 0 ? "green.500" : "red.500"}>
                {card.change >= 0 ? "▲" : "▼"} {Math.abs(card.change)}%
              </StatHelpText>
            )}
          </Stat>
          {card.icon && (
            <Flex
              mt={4}
              w={8}
              h={8}
              align="center"
              justify="center"
              borderRadius="full"
              bg={`${card.color}.100`}
            >
              <Icon as={card.icon} color={`${card.color}.500`} boxSize={5} />
            </Flex>
          )}
        </Box>
      ))}
    </Flex>
  );
}
