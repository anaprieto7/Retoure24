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
  Spacer,
} from "@chakra-ui/react";
import { FiMoreVertical, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useColorModeValue } from "@chakra-ui/react";
import returnsMock from "@/data/returnsMock"; // default import según tu archivo

type Props = {
  shopId: string;
};

export default function ReasonsDonutsChart({ shopId }: Props) {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  // 🎯 1. Filtrar devoluciones por tienda
  const returns = returnsMock.filter((r) => r.shopId === shopId);

  // 🎯 2. Contar razones de productos
  const reasonMap = new Map<string, number>();

  returns.forEach((ret) => {
    ret.products?.forEach((prod) => {
      const reason = prod.reason || "Andere"; // fallback
      reasonMap.set(reason, (reasonMap.get(reason) || 0) + 1);
    });
  });

  const totalReasons = Array.from(reasonMap.values()).reduce((a, b) => a + b, 0);

  // 🎨 Colores base (hasta 6 razones)
  const defaultColors = ["#ef4444", "#fbbf24", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"];

  // 📊 Arreglo para gráfico y lista
  const data = Array.from(reasonMap.entries()).map(([name, value], index) => ({
    name,
    value: Math.round((value / totalReasons) * 100),
    change: 0,
    trend: "up",
    color: defaultColors[index % defaultColors.length],
  }));

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      p={5}
      borderRadius="md"
      boxShadow="sm"
      borderColor={borderColor}
      shadow="sm"
    >
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
