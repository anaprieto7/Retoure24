"use client";

import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react"; 

type CardData = {
  label: string;
  value: number;
  change?: number;
  icon?: ReactElement;
  color: string;       // ej. 'orange'
  arrowColor: string;  // ej. 'green.500'
};

type Props = {
  data: CardData[];
};

export default function DashboardCardsGlobal({ data }: Props) {
  const bg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("sm", "md");

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 6 }} spacing={4} mb={8}>
      {data.map((card, i) => (
        <Box
          key={i}
          p={4}
          bg={bg}
          rounded="md"
          shadow={shadow}
          borderLeft="6px solid"
          borderColor={`${card.color}.400`}
        >
          <Stat>
            <StatLabel>{card.label}</StatLabel>
            <StatNumber>{card.value}</StatNumber>
            {typeof card.change === "number" && (
  <StatHelpText>
    <StatArrow type={card.change >= 0 ? "increase" : "decrease"} color={card.arrowColor} />
    {Math.abs(card.change)}%
  </StatHelpText>
)}

          </Stat>
          {card.icon && (
            <Box
  bg={`${card.color}.100`}
  color={`${card.color}.500`}
  display="inline-flex"
  alignItems="center"
  justifyContent="center"
  borderRadius="full"
  boxSize={10}
>
  <Icon as={card.icon} boxSize={5} />
</Box>
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
}
