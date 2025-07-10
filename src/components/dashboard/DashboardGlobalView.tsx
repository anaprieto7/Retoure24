"use client";

import { Box, Flex, SimpleGrid, Heading, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { FiShoppingBag, FiEdit, FiX, FiDollarSign, FiTrendingUp } from "react-icons/fi";

import StoreMultiSelector from "@/components/dashboard/StoreMultiSelector";
import DashboardCardsGlobal from "@/components/dashboard/DashboardCardsGlobal";
import ReturnsShops from "@/components/dashboard/ReturnsShops";
import TopReturnedProductsGlobal from "@/components/dashboard/TopReturnedProductsGlobal";

import returnsMock from "@/data/returnsMock";
import { mockShops } from "@/data/mockShops";

type StoreOption = { label: string; value: string };

type StoreMetrics = {
  store: string;
  totalReturns: number;
  registered: number;
  cancelled: number;
  refunded: number;
  returnRate: number;
  commonReason: string;
};

const allStores: StoreOption[] = mockShops.map((shop) => ({
  label: shop.name,
  value: shop.id,
}));

// Calcular métricas reales por tienda
function getMetricsPerStoreFromReturns(): StoreMetrics[] {
  const grouped: Record<string, StoreMetrics> = {};

  returnsMock.forEach((ret) => {
    const shop = mockShops.find((s) => s.id === ret.shopId);
    const storeName = shop?.name || ret.shopId;

    if (!grouped[ret.shopId]) {
      grouped[ret.shopId] = {
        store: storeName,
        totalReturns: 0,
        registered: 0,
        cancelled: 0,
        refunded: 0,
        returnRate: 0,
        commonReason: "",
      };
    }

    const group = grouped[ret.shopId];
    group.totalReturns += 1;
    if (ret.status === "Registered") group.registered += 1;
    if (ret.status === "Cancelled") group.cancelled += 1;
    if (ret.status === "Refunded") group.refunded += 1;
  });

  // Calcular razones más comunes por tienda
  Object.entries(grouped).forEach(([shopId, group]) => {
    const reasons: Record<string, number> = {};
    returnsMock
      .filter((r) => r.shopId === shopId)
      .forEach((r) => {
        r.products?.forEach((p) => {
          const reason = p.reason?.trim();
          if (reason) {
            reasons[reason] = (reasons[reason] || 0) + (p.quantity || 1);
          }
        });
      });

    const sorted = Object.entries(reasons).sort((a, b) => b[1] - a[1]);
    group.commonReason = sorted[0]?.[0] || "N/A";

    // Simulamos tasa
    group.returnRate = Number((group.totalReturns / 100) * 10);
  });

  return Object.values(grouped);
}

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
    filtered.length > 0 ? sum(key) / filtered.length : 0;

  const mostCommonReason = (() => {
    const reasonCount: Record<string, number> = {};
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

export default function DashboardGlobalView() {
  const [selectedStores, setSelectedStores] = useState<StoreOption[]>(allStores);
  const [searchTerm, setSearchTerm] = useState("");

  const metricsPerStore = useMemo(() => getMetricsPerStoreFromReturns(), []);
  const metricDataGlobal = useMemo(
    () => getMetricDataByStores(selectedStores, metricsPerStore),
    [selectedStores, metricsPerStore]
  );

  const filteredReturns = useMemo(() => {
    return returnsMock.filter((r) =>
      selectedStores.some((s) => s.value === r.shopId)
    );
  }, [selectedStores]);

  return (
    <Box p={6}>
      <Flex direction="column" mb={6}>
        <Heading size="lg" color={useColorModeValue("gray.700", "gray.100")}>
          Hallo, Paul 👋
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.500", "gray.400")}>
          Here's what's happening in your management today – 📍Kiel, Germany
        </Text>
      </Flex>

      {/* Selector y buscador */}
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
        Dashboard{" "}
        {selectedStores.length === 0
          ? "– All stores"
          : `- ${selectedStores.map((s) => s.label).join(", ")}`}
      </Heading>

      {/* Métricas */}
      <DashboardCardsGlobal data={metricDataGlobal} />

      {/* Sección gráfica */}
      <Box mt={10}>
        <SimpleGrid columns={12} spacing={6} mt={8}>
          {/* Gráfico de ranking por tiendas */}
          <GridItem colSpan={{ base: 12, lg: 8 }}>
            <ReturnsShops
              returnsByStore={metricsPerStore}
              selectedStores={selectedStores}
            />
          </GridItem>

          {/* Top productos devueltos */}
          <GridItem colSpan={{ base: 12, lg: 4 }}>
            <TopReturnedProductsGlobal
              products={returnsMock}
              selectedStores={selectedStores}
            />
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
