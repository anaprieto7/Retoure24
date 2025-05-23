"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";

const products = [
  {
    name: "Xiaomi X Blau 128 g",
    serial: "93837464",
    orders: 132,
  },
  {
    name: "Samsung Galaxy S21 256 g",
    serial: "84736291",
    orders: 200,
  },
  {
    name: "Apple iPhone 13 128 g",
    serial: "56372819",
    orders: 150,
  },
  {
    name: "OnePlus 9 Pro 256 g",
    serial: "47638291",
    orders: 90,
  },
  {
    name: "Google Pixel 6 128 g",
    serial: "19283746",
    orders: 75,
  },
];

export default function TopProducts({ searchTerm }: { searchTerm: string }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.serial.includes(searchTerm)
  );

  const exportToCSV = () => {
    const headers = ["Name", "Serial", "Orders"];
    const rows = filteredProducts.map(p => [p.name, p.serial, p.orders]);

    const csvContent =
      [headers, ...rows]
        .map(e => e.map(String).map(str => `"${str}"`).join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "top_products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    const borderColor = useColorModeValue("gray.200", "gray.700"); 
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="md"
      boxShadow="sm"
      p={5}
      w="full"
      h="100%"
      borderColor={borderColor}
    >
      <Flex justify="space-between" align="start" mb={4}>
        <Heading size="md">Retouren nach Produkten</Heading>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FiMoreVertical />}
            variant="ghost"
            size="sm"
            aria-label="Options"
          />
          <MenuList>
            <MenuItem onClick={exportToCSV}>
              Exportar CSV
            </MenuItem>
            <MenuItem _hover={{ bg: "orange.100" }} _focus={{ bg: "orange.400", color: "white" }}>Letzte 7 Tage</MenuItem>
            <MenuItem _hover={{ bg: "orange.100" }} _focus={{ bg: "orange.400", color: "white" }}>Letzter Monat</MenuItem>
            <MenuItem _hover={{ bg: "orange.100" }} _focus={{ bg: "orange.400", color: "white" }}>Letztes Jahr</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <VStack spacing={4} align="stretch">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <HStack key={index} justify="space-between">
              <Box>
                <Text fontWeight="bold">{product.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  Serial N.: {product.serial}
                </Text>
              </Box>
              <Text fontWeight="bold" color="red.500">
                {product.orders} Orders
              </Text>
            </HStack>
          ))
        ) : (
          <Text color="gray.500" textAlign="center">
            Kein Produkt gefunden.
          </Text>
        )}
      </VStack>
    </Box>
  );
}
