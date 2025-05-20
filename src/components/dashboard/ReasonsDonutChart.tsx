"use client";

import {
  Box,
  Heading,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  VStack,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { FiMoreVertical, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useColorModeValue } from "@chakra-ui/react";

const data = [
  { name: "Falsche Größe", value: 80, change: 2, trend: "up", color: "#ef4444" },
  { name: "Beschädigt oder defekt", value: 10, change: 8, trend: "up", color: "#fbbf24" },
  { name: "Entspricht nicht den Erwartungen", value: 20, change: -5, trend: "down", color: "#22c55e" },
];
  
export default function RetourenNachGruenden() {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Box bg={useColorModeValue("white", "gray.800")}
 p={5} borderRadius="md" boxShadow="sm" borderColor={borderColor} borderWidth="2px">
      <Flex justify="space-between" align="start" mb={4}>
        <Heading size="md">Retouren nach Gründen</Heading>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FiMoreVertical />}
            variant="ghost"
            size="sm"
            aria-label="Filter"
          />
          <MenuList>
            <MenuItem _hover={{ bg: "orange.100" }} _active={{ bg: "orange.400", color: "white" }}>
              Letzten 7 Tage
            </MenuItem>
            <MenuItem _hover={{ bg: "orange.100" }} _active={{ bg: "orange.400", color: "white" }}>
              Letzter Monat
            </MenuItem>
            <MenuItem _hover={{ bg: "orange.100" }} _active={{ bg: "orange.400", color: "white" }}>
              Letztes Jahr
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <VStack spacing={2} mt={4} align="start">
        {data.map((item, index) => (
          <Flex key={index} align="center" gap={2}>
            <Box boxSize={2.5} borderRadius="full" bg={item.color} />
            <Text fontWeight="medium">
              {item.name} - {item.value}%
            </Text>
            <Spacer />
            <HStack>
              <Text color="gray.500">{Math.abs(item.change)}%</Text>
              {item.trend === "up" ? (
                <FiArrowUp color="red" />
              ) : (
                <FiArrowDown color="green" />
              )}
            </HStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
// This component is a donut chart that displays the reasons for returns context.