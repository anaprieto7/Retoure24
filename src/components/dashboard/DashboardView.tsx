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

const ReturnsMap = dynamic(() => import("@/components/dashboard/ReturnsMap"), {
  ssr: false,
});

type Props = {
  shopId: string;
};

export default function DashboardView({ shopId }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box minH="100vh" p={{ base: 4, md: 6 }}>
      <Box mb={6}>
        <GlobalSearch onSearch={(term) => setSearchTerm(term)} />
      </Box>

      <MotionWrapper>
        <DashboardCards shopId={shopId} />
      </MotionWrapper>

      <SimpleGrid columns={12} spacing={6} mt={6}>
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <Box mb={6}>
            <MotionWrapper>
              <ReturnOverTimeChart shopId={shopId} />
            </MotionWrapper>
          </Box>

          <Box mb={6}>
            <MotionWrapper>
              <ReturnsMap shopId={shopId} searchTerm={searchTerm} />
            </MotionWrapper>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <MotionWrapper>
            <ReasonsDonutsChart shopId={shopId} />
          </MotionWrapper>
          <Box mt={4}>
            <MotionWrapper>
              <TopProducts shopId={shopId} searchTerm={searchTerm} />
            </MotionWrapper>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
