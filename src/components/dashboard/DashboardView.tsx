"use client";

import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import { FiShoppingBag, FiEdit, FiX, FiDollarSign } from "react-icons/fi";
import { useState } from "react";
import dynamic from "next/dynamic";

import DashboardCards from "@/components/dashboard/DashboardCards";
import ReturnOverTimeChart from "@/components/dashboard/ReturnsOverTimeChart";
import ReasonsDonutsChart from "@/components/dashboard/ReasonsDonutChart";
import TopProducts from "@/components/dashboard/TopProducts";
import GlobalSearch from "@/components/dashboard/GlobalSearch";
import MotionWrapper from "@/components/MotionWrapper";

// Lazy load del mapa
const ReturnsMap = dynamic(() => import("@/components/dashboard/ReturnsMap"), {
  ssr: false,
});

// Métricas
const metricData = [
  {
    label: "Gesamt Retouren",
    value: 286,
    change: 4.5,
    icon: FiShoppingBag,
    color: "orange",
    arrowColor: "green.500",
  },
  {
    label: "Retouren Angemeldet",
    value: 122,
    change: 8,
    icon: FiEdit,
    color: "blue",
    arrowColor: "red.500",
  },
  {
    label: "Retouren Storniert",
    value: 23,
    change: -1.5,
    icon: FiX,
    color: "red",
    arrowColor: "red.500",
  },
  {
    label: "Retouren Erstattet",
    value: 356,
    change: 2.5,
    icon: FiDollarSign,
    color: "green",
    arrowColor: "green.500",
  },
];

export default function DashboardView() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box  minH="100vh" p={{ base: 4, md: 6 }}>
      {/* Buscador global */}
      <Box mb={6}>
        <GlobalSearch onSearch={(term) => setSearchTerm(term)} />
      </Box>

      {/* Tarjetas métricas */}
      <MotionWrapper>
        <DashboardCards data={metricData} />
        </MotionWrapper>


      {/* Grilla principal */}
      <SimpleGrid columns={12} spacing={6} mt={6}>
        {/* Columna izquierda (8 columnas) */}
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <Box mb={6}>
            <MotionWrapper>
              <ReturnOverTimeChart />
            </MotionWrapper>
          </Box>

          <Box mb={6}>
            <MotionWrapper>
              <ReturnsMap searchTerm={searchTerm} />
            </MotionWrapper>
              
          </Box>
        </GridItem>

        {/* Columna derecha (4 columnas) */}
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <MotionWrapper>
            <ReasonsDonutsChart />
          </MotionWrapper>
          <Box mt={4}>
            <MotionWrapper>
             <TopProducts searchTerm={searchTerm} />
            </MotionWrapper>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
