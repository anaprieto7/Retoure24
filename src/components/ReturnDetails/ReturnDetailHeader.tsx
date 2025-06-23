import { Flex, Heading, Badge, Text, Spacer } from "@chakra-ui/react";

interface ReturnDetailHeaderProps {
  returnId: string;
  status: "Pending" | "Recibida" | "Reembolsada" | "Rechazada";
  date: string; // Puedes usar string o Date
}

const statusColors = {
  Pending: "orange",
  Recibida: "blue",
  Reembolsada: "green",
  Rechazada: "red",
};

export default function ReturnDetailHeader({ returnId, status, date }: ReturnDetailHeaderProps) {
  return (
    <Flex align="center" gap={4} mb={1}>
      <Heading size="lg">Retoure #{returnId}</Heading>
      <Badge colorScheme={statusColors[status] || "gray"} fontSize="1em">
        {status}
      </Badge>
      <Spacer />
      <Text color="gray.500" fontSize="sm">
        Datum: {date}
      </Text>
    </Flex>
  );
}
 