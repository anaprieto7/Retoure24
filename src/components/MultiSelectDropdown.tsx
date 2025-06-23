"use client";

import {
  Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption,
  Button, Box, Text, useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selected,
  onChange,
  placeholder = "Select",
}) => {
  const hasSelection = selected.length > 0;
  // Colores dinámicos para dark/light mode
  const bgDefault = useColorModeValue("gray.100", "gray.800");
  const bgOpenOrSelected = useColorModeValue("blue.50", "blue.950");
  const colorDefault = useColorModeValue("gray.800", "gray.100");
  const colorOpenOrSelected = useColorModeValue("blue.700", "blue.300");
  const borderDefault = useColorModeValue("gray.300", "gray.700");
  const borderOpenOrSelected = useColorModeValue("blue.300", "blue.600");
  const bgHover = useColorModeValue("gray.200", "gray.700");
  const bgList = useColorModeValue("white", "gray.900");
  const bgChecked = useColorModeValue("blue.50", "blue.900");
  const colorChecked = useColorModeValue("blue.700", "blue.300");

  return (
    <Menu closeOnSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="filled"
            fontSize="sm"
            bg={isOpen || hasSelection ? bgOpenOrSelected : bgDefault}
            color={isOpen || hasSelection ? colorOpenOrSelected : colorDefault}
            borderColor={isOpen || hasSelection ? borderOpenOrSelected : borderDefault}
            _hover={{
              bg: isOpen || hasSelection ? bgOpenOrSelected : bgHover,
              borderColor: borderOpenOrSelected,
            }}
            _focus={{
              borderColor: borderOpenOrSelected,
              boxShadow: "0 0 0 1px #3182ce", // Chakra's blue-500
            }}
          >
            {hasSelection ? selected.join(", ") : placeholder}
          </MenuButton>
          <MenuList
            minW="220px"
            maxH="300px"
            overflowY="auto"
            bg={bgList}
            borderColor={borderDefault}
          >
            <MenuOptionGroup
              value={selected}
              type="checkbox"
              onChange={(vals) => onChange(vals as string[])}
            >
              {options.map((option) => (
                <MenuItemOption
                  key={option}
                  value={option}
                  _checked={{
                    bg: bgChecked,
                    color: colorChecked,
                  }}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  fontSize="sm"
                >
                  <Box display="flex" alignItems="center">
                    <Text fontSize="sm">{option}</Text>
                  </Box>
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MultiSelectDropdown;
