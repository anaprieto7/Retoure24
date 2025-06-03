import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

interface SortIconProps {
  direction?: "asc" | "desc" | null;
  active: boolean;
}

const SortIcon: React.FC<SortIconProps> = ({ direction, active }) => {
  return (
    <Box as="span" ml={1} display="inline-block">
      {/* Flecha arriba */}
      <TriangleUpIcon
      boxSize={2.5}
      color={active && direction === "asc" ? "blue.500" : "gray.300"}
      opacity={direction ? 1 : 0.7}
    />
      {/* Flecha abajo */}
      <TriangleDownIcon
      boxSize={2.5}
      color={active && direction === "desc" ? "blue.500" : "gray.300"}
      opacity={direction ? 1 : 0.7}
      mt="-2px"
    />
    </Box>
  );
};

export default SortIcon;
// This component renders a sort icon with up and down arrows.
// The arrows change color based on the active state and sort direction.
// The up arrow is displayed above the down arrow, and both are aligned to the left.
// The up arrow is slightly offset to the right to align with the down arrow.
// The component uses Chakra UI's TriangleUpIcon and TriangleDownIcon for the arrows.
// The colors are set to blue when active and gray when inactive.
// The component accepts two props: direction (asc or desc) and active (boolean).
// The up arrow is displayed above the down arrow, and both are aligned to the left.
// The up arrow is slightly offset to the right to align with the down arrow.