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
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useColorModeValue } from "@chakra-ui/react";

type CardData = {
  label: string;
  value: number;
  change: number;
  icon?: ReactElement;
  color: string;       // ej. 'orange'
  arrowColor: string;  // ej. 'green.500'
};


type DashboardCardsProps = {
  data: CardData[];
};

export default function DashboardCards({ data }: DashboardCardsProps) {
  const bgCard = useColorModeValue("white", "gray.800"); // claro vs oscuro
    const shadowCard = useColorModeValue("sm", "md");
    const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} mb={6}>
      {data.map((card, index) => (
       <Box
       bg={bgCard} boxShadow={shadowCard} borderRadius="md" p={4}
  key={index}
  shadow="sm"
  borderWidth="2px"
  borderColor={borderColor}
  transition="all 0.2s ease-in-out"
  _hover={{
    transform: "translateY(-4px)",
    shadow: "lg",
  }}
>

          <Stat>
  <Box
  bg={`${card.color}.100`}
  color={`${card.color}.500`}
  borderRadius="full"
  p={2}
  display="inline-flex"
  alignItems="center"
  justifyContent="center"
  boxSize="40px"
  mb={2}
>
  {card.icon && (
  <Box
    bg={useColorModeValue(`${card.color}.100`, `${card.color}.900`)}
    color="white"
    borderRadius="full"
    p={2}
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    mb={2}
  >
    {card.icon}
  </Box>
)}

</Box>
<StatLabel>{card.label}</StatLabel>
<StatNumber>{card.value.toLocaleString()}</StatNumber>
<StatHelpText color={card.arrowColor}>
  <StatArrow type={card.change >= 0 ? "increase" : "decrease"} />
  {card.change > 0 ? `+${card.change}%` : `${card.change}%`} Last Week
</StatHelpText>

</Stat>

        </Box>
      ))}
    </SimpleGrid>
  );
}
