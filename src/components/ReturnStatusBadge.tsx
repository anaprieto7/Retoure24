import { Badge } from "@chakra-ui/react";

const statusColorSchemes: Record<string, string> = {
  Received: "yellow",
  Registered: "blue",
  Rejected: "red",
  Approved: "green",
  Refunded:"green",
  Cancelled: "red"
};

const statusTextColors: Record<string, string> = {
  Received: "yellow.600",
  Registered: "blue.600",
  Rejected: "red.600",
  Refunded: "green.600",
  Approved: "green.600",
  Cancelled:"red.600"
  // Puedes cambiar el color del texto para los demás estados si lo deseas
};

const ReturnStatusBadge = ({ status }: { status: string }) => {
  const colorScheme = statusColorSchemes[status] || "gray";
  const textColor = statusTextColors[status] || "white";

  return (
    <Badge
      colorScheme={colorScheme}
      color={textColor}
      px={3}
      py={1}
      borderRadius="full"
      fontWeight="bold"
    textTransform="capitalize"
    >
      {status}
    </Badge>
  );
};

export default ReturnStatusBadge;
