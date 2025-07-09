"use client";

import { Box, useColorModeValue, Text, Flex, Icon, useTheme } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FiBarChart2 } from "react-icons/fi";
import returnsMock from "@/data/returnsMock";
import { mockShops } from "@/data/mockShops";

type StoreOption = { label: string; value: string };

type Props = {
  selectedStores?: StoreOption[];
  isCompactView?: boolean;
  onBarClick?: (store: string) => void;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const { store, returns } = payload[0].payload;
    return (
      <Box
        p={2}
        bg={useColorModeValue("white", "gray.700")}
        shadow="md"
        borderRadius="md"
      >
        <Text fontWeight="bold">{store}</Text>
        <Text fontSize="sm">{returns} returns</Text>
      </Box>
    );
  }
  return null;
};

export default function ReturnsShops({
  selectedStores = [],
  isCompactView = false,
  onBarClick,
}: Props) {
  const bg = useColorModeValue("white", "gray.800");
  const theme = useTheme();

  // Map de colores por tienda
  const storeColors: { [shopId: string]: string } = {
    "shop-1": theme.colors.orange[500],
    "shop-2": theme.colors.blue[500],
    "shop-3": theme.colors.green[500],
    "shop-4": theme.colors.purple[500],
  };

  // Agrupar devoluciones por tienda
  const returnsByStore: { store: string; returns: number; shopId: string }[] = [];

  mockShops.forEach((shop) => {
    const count = returnsMock.filter((r) => r.shopId === shop.id).length;
    returnsByStore.push({
      store: shop.name,
      returns: count,
      shopId: shop.id,
    });
  });

  // Filtrar por tiendas seleccionadas
  const filteredStores =
    selectedStores.length > 0
      ? returnsByStore.filter((storeItem) =>
          selectedStores.some((sel) => sel.label === storeItem.store)
        )
      : returnsByStore;

  return (
    <Box bg={bg} p={4} rounded="md" shadow="sm">
      <Flex align="center" mb={4}>
        <Icon as={FiBarChart2} mr={2} boxSize={5} color="orange.500" />
        <Text fontWeight="bold" fontSize="lg">
          Store ranking by returns
        </Text>
      </Flex>

      <ResponsiveContainer width="100%" height={isCompactView ? 200 : 300}>
        <BarChart
          layout="vertical"
          data={filteredStores}
          barCategoryGap={10}
          margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
        >
          <XAxis
            type="number"
            axisLine={{ stroke: "#ccc" }}
            tickLine={{ stroke: "#ccc" }}
            tick={{ fill: "#666", fontSize: 12 }}
          />
          <YAxis
            dataKey="store"
            type="category"
            tick={{ fill: "#666", fontWeight: "500", fontSize: 14 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="returns" onClick={(data) => onBarClick?.(data.shopId)}>
            {filteredStores.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={storeColors[entry.shopId] || "#E53E3E"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
