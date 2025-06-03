"use client";

import { Tooltip as ChakraTooltip, TooltipProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface CustomTooltipProps extends TooltipProps {
  children: ReactNode;
  colorScheme?: string; // Por si quieres pasar 'blue', 'orange', etc.
}

const colorSchemes: Record<string, { bg: string; color: string }> = {
  blue:   { bg: "blue.500",   color: "white" },
  green:  { bg: "green.500",  color: "white" },
  orange: { bg: "orange.400", color: "white" },
  red:    { bg: "red.500",    color: "white" },
  gray:   { bg: "gray.700",   color: "white" },
  black:  { bg: "black",      color: "white" },
  // Agrega más si quieres
};

export const Tooltip = ({
  children,
  colorScheme = "black", // Cambia el color por defecto aquí
  ...props
}: CustomTooltipProps) => {
  const scheme = colorSchemes[colorScheme] || colorSchemes["black"];

  return (
    <ChakraTooltip
      hasArrow
      placement="top"
      bg={scheme.bg}
      color={scheme.color}
      fontSize="xs"
      borderRadius="md"
      px={2}
      {...props}
    >
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
