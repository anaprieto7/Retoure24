"use client";

import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  List,
  ListItem,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const sampleItems = [
  { type: "product", label: "Xiaomi X Blau 128 g" },
  { type: "product", label: "Samsung Galaxy S21" },
  { type: "country", label: "Deutschland" },
  { type: "country", label: "Frankreich" },
  { type: "reason", label: "Falsche Größe" },
];

export default function GlobalSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);

    if (term.length === 0) {
      setFilteredItems([]);
      return;
    }

    const results = sampleItems.filter((item) =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredItems(results);
  };

  return (
    <Box position="relative" maxW="400px" w="100%">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Such nach produkten, Länden o grund..."
          value={searchTerm}
          onChange={handleSearch}
          variant="filled"
        />
      </InputGroup>

      {filteredItems.length > 0 && (
        <List
          position="absolute"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          mt={2}
          zIndex={10}
          w="100%"
        >
          {filteredItems.map((item, idx) => (
            <ListItem key={idx} px={4} py={2} _hover={{ bg: "gray.100" }} cursor="pointer">
              <Text fontSize="sm">
                <strong>{item.label}</strong>{" "}
                <Text as="span" color="gray.500">
                  ({item.type})
                </Text>
              </Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
