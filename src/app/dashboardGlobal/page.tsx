"use client";

import { Box, Flex, SimpleGrid, Heading, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import StoreMultiSelector from "@/components/dashboard/StoreMultiSelector";
import DashboardCardsGlobal from "@/components/dashboard/DashboardCardsGlobal";
import ReturnsShops from "@/components/dashboard/ReturnsShops";
import { FiShoppingBag, FiEdit, FiX, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import TopReturnedProductsGlobal from "@/components/dashboard/TopReturnedProductsGlobal";

const topReturnedProducts = [
  {
    product: "Xiaomi X Blau 128 g",
    store: "Zara",
    serial: "93837464",
    returns: 132,
  },
  {
    product: "Samsung Galaxy S21 256 g",
    store: "H&M",
    serial: "84736291",
    returns: 200,
  },
  {
    product: "Apple iPhone 13 128 g",
    store: "Mango",
    serial: "56372819",
    returns: 150,
  },
  {
    product: "OnePlus 9 Pro 256 g",
    store: "H&M",
    serial: "47638291",
    returns: 90,
  },
  {
    product: "Google Pixel 6 128 g",
    store: "Zara",
    serial: "19283746",
    returns: 75,
  },
];







type StoreMetrics = {
  store: string;
  totalReturns: number;
  registered: number;
  cancelled: number;
  refunded: number;
  returnRate: number;
  commonReason: string;
};


const metricsPerStore: StoreMetrics[] = [
  {
    store: "Zara",
    totalReturns: 120,
    registered: 60,
    cancelled: 10,
    refunded: 100,
    returnRate: 8.2,
    commonReason: "Too small",
  },
  {
    store: "H&M",
    totalReturns: 95,
    registered: 52,
    cancelled: 8,
    refunded: 82,
    returnRate: 6.1,
    commonReason: "Wrong item",
  },
  {
    store: "Mango",
    totalReturns: 80,
    registered: 32,
    cancelled: 15,
    refunded: 67,
    returnRate: 7.3,
    commonReason: "Color mismatch",
  },
];

const allStores: StoreOption[] = [
  { label: "Zara", value: "zara" },
  { label: "H&M", value: "hm" },
  { label: "Mango", value: "mango" },
];


type StoreOption = { label: string; value: string };

function getMetricDataByStores(
  selectedStores: StoreOption[],
  metricsPerStore: StoreMetrics[]
) {
  const filtered =
    selectedStores.length > 0
      ? metricsPerStore.filter((s) =>
          selectedStores.some((sel) => sel.label === s.store)
        )
      : metricsPerStore;

  const sum = (key: keyof StoreMetrics) =>
    filtered.reduce((acc, curr) => acc + (curr[key] as number), 0);

  const average = (key: keyof StoreMetrics) =>
    filtered.length > 0
      ? sum(key) / filtered.length
      : 0;

  const mostCommonReason = (() => {
    const reasonCount: { [reason: string]: number } = {};
    filtered.forEach((store) => {
      reasonCount[store.commonReason] = (reasonCount[store.commonReason] || 0) + 1;
    });
    const sorted = Object.entries(reasonCount).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || "N/A";
  })();


  return [
    {
      label: "Total Returns",
      value: sum("totalReturns"),
      change: 4.5,
      icon: FiShoppingBag,
      color: "orange",
      arrowColor: "green.500",
    },
    {
      label: "Returns Registered",
      value: sum("registered"),
      change: 6,
      icon: FiEdit,
      color: "blue",
      arrowColor: "green.500",
    },
    {
      label: "Returns Cancelled",
      value: sum("cancelled"),
      change: -2,
      icon: FiX,
      color: "red",
      arrowColor: "red.500",
    },
    {
      label: "Returns Refunded",
      value: sum("refunded"),
      change: 3.2,
      icon: FiDollarSign,
      color: "green",
      arrowColor: "green.500",
    },
    {
      label: "Average Return Rate",
      value: `${average("returnRate").toFixed(1)}%`,
      icon: FiTrendingUp,
      color: "purple",
    },
    {
      label: "Most Common Reason",
      value: mostCommonReason,
      icon: FiEdit,
      color: "gray",
    },
  ];
}

export default function DashboardGlobal() {
  const [selectedStores, setSelectedStores] = useState(allStores); // por defecto: All
  const returnsByStore = metricsPerStore.map((store) => ({
  store: store.store,
  returns: store.totalReturns,
}));


  const filteredReturns =
    selectedStores.length > 0
      ? returnsByStore.filter((item) =>
          selectedStores.some((s) => s.label === item.store)
        )
      : returnsByStore;

const metricDataGlobal = getMetricDataByStores(selectedStores, metricsPerStore);
const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box p={6}>
      <Flex direction="column" mb={6}>
    <Heading size="lg" color={useColorModeValue("gray.700", "gray.100")}>
      Hello, Ana 👋
    </Heading>
    <Text fontSize="md" color={useColorModeValue("gray.500", "gray.400")}>
      Here's what's happening in your stores today – 📍Kiel, Germany
    </Text>
  </Flex>
      {/* Selector arriba */}
      <Flex justify="space-between" mb={6}>
        <Box flex="1">
          {/* Aquí irá GlobalSearch */}
        </Box>
        <StoreMultiSelector
          options={allStores}
          selectedStores={selectedStores}
          onChange={setSelectedStores}
        />
      </Flex>
      <Heading size="md" mb={4}>
  Dashboard {" "}
  {selectedStores.length === 0
    ? "– All stores"
    : `- ${selectedStores.map((s) => s.label).join(", ")}`}
</Heading>

      {/* KPIs (puedes usar metricData simuladas aquí) */}
      <DashboardCardsGlobal data={metricDataGlobal} />


      {/* dos columnas */}
       <Box mt={10}>
<SimpleGrid columns={12} spacing={6} mt={8}>
  {/* Gráfico de ranking por tiendas */}
  <GridItem colSpan={{ base: 12, lg: 8 }}>
    <ReturnsShops
      returnsByStore={filteredReturns}
      selectedStores={selectedStores}
    />
  </GridItem>

  {/* Top productos devueltos */}
  <GridItem colSpan={{ base: 12, lg: 4 }}>
    <TopReturnedProductsGlobal
      products={topReturnedProducts}
      selectedStores={selectedStores}
    />
  </GridItem>
</SimpleGrid>

</Box>

    </Box>
  );
}
