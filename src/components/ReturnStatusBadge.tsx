import { Badge } from "@chakra-ui/react";

const statusColorSchemes: Record<string, string> = {
  Pending: "yellow",
  Registered: "blue",
  Rejected: "red",
  Completed: "green",
};

const statusTextColors: Record<string, string> = {
  Pending: "yellow.600",
  Registered: "blue.600",
  Rejected: "red.600",
  Completed: "green.600",
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
