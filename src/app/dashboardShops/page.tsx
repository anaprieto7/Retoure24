
"use client";

import {
  Box,
  SimpleGrid,
  GridItem,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box as ChakraBox,
} from "@chakra-ui/react";
import { FiShoppingBag, FiEdit, FiX, FiDollarSign } from "react-icons/fi";
import { useState } from "react";
import dynamic from "next/dynamic";
import Select from "react-select";

import DashboardCards from "@/components/dashboard/DashboardCards";
import ReturnOverTimeChart from "@/components/dashboard/ReturnsOverTimeChart";
import TopProducts from "@/components/dashboard/TopProducts";
import GlobalSearch from "@/components/dashboard/GlobalSearch";
import ReturnsShops from "@/components/dashboard/ReturnsShops";
import ReturnsShopsByProduct from "@/components/dashboard/ReturnsShopsByProduct";
import MotionWrapper from "@/components/MotionWrapper";
import { useColorModeValue } from "@chakra-ui/react";
import ReasonsDonutsChartShop from "@/components/dashboard/ReasonsDonutsChartShop";

const reasonsByStore = {
  Zara: [
    { reason: "Too small", value: 32 },
    { reason: "Color mismatch", value: 21 },
  ],
  "H&M": [
    { reason: "Wrong item", value: 18 },
    { reason: "Too large", value: 12 },
  ],
  Mango: [
    { reason: "Damaged", value: 15 },
  ],
};



const ReturnsMap = dynamic(() => import("@/components/dashboard/ReturnsMap"), {
  ssr: false,
});



const productsByStore: {
  [storeName: string]: { product: string; returns: number; reason: string }[];
} = {
  Zara: [
    { product: "Cargo Pants", returns: 32, reason: "Wrong size" },
    { product: "White Shirt", returns: 21, reason: "Color mismatch" },
  ],
  "H&M": [
    { product: "Midi Skirt", returns: 18, reason: "Didn’t fit well" },
    { product: "Long Coat", returns: 12, reason: "Too large" },
  ],
  Mango: [
    { product: "Black Dress", returns: 15, reason: "Wrong item" },
  ],
};

const storeOptions = [
  { value: "Zara", label: "Zara" },
  { value: "H&M", label: "H&M" },
  { value: "Mango", label: "Mango" },
];

const returnsByStore = [
  { store: "Zara", returns: 120 },
  { store: "H&M", returns: 95 },
  { store: "Mango", returns: 80 },
];

const metricData = [
  {
    label: "Total Returns",
    value: 286,
    change: 4.5,
    icon: FiShoppingBag,
    color: "orange",
    arrowColor: "green.500",
  },
  {
    label: "Returns Registered",
    value: 122,
    change: 8,
    icon: FiEdit,
    color: "blue",
    arrowColor: "red.500",
  },
  {
    label: "Returns Cancelled",
    value: 23,
    change: -1.5,
    icon: FiX,
    color: "red",
    arrowColor: "red.500",
  },
  {
    label: "Returns Refunded",
    value: 356,
    change: 2.5,
    icon: FiDollarSign,
    color: "green",
    arrowColor: "green.500",
  },
];

export default function DashboardShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStores, setSelectedStores] = useState([]);
 const [clickedStore, setClickedStore] = useState<string | null>(null);
 const cardBg = useColorModeValue("white", "gray.800");


  return (
    <Box minH="100vh" p={{ base: 4, md: 6 }}>
      {/* Global search + store selector */}
      <Flex mb={6} gap={4} direction={{ base: "column", md: "row" }}>
        <Box flex="1">
          <GlobalSearch onSearch={(term) => setSearchTerm(term)} />
        </Box>
        <Box minW={{ base: "100%", md: "300px" }}>
          <Select
  isMulti
  placeholder="Filter by store"
  options={storeOptions}
  onChange={(options) => {
    setSelectedStores(options || []);
    setClickedStore(null);
  }}
  styles={{
    control: (base, state) => ({
      ...base,
      backgroundColor: cardBg,
      borderColor: state.isFocused ? "#ED8936" : "#CBD5E0",
      color: useColorModeValue("black", "white"),
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: cardBg,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? useColorModeValue("#FBD38D", "#805AD5")
        : cardBg,
      color: useColorModeValue("black", "white"),
    }),
    singleValue: (base) => ({
      ...base,
      color: useColorModeValue("black", "white"),
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: useColorModeValue("#FBD38D", "#4A5568"),
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: useColorModeValue("black", "white"),
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: useColorModeValue("black", "white"),
      ':hover': {
        backgroundColor: "#E53E3E",
        color: "white",
      },
    }),
  }}
/>


        </Box>
      </Flex>

      {/* KPI cards */}
      <MotionWrapper>
        <DashboardCards data={metricData} />
      </MotionWrapper>

      {/* Grid layout */}
      <SimpleGrid columns={12} spacing={6} mt={6}>
        {/* Left column (8/12) */}
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          {/* ReturnsShops + ReturnsShopsByProduct */}
         <Box mb={6}>

  <SimpleGrid
    columns={{ base: 1, md: (selectedStores.length > 0 || clickedStore) ? 2 : 1 }}
    spacing={4}
  >
    {/* Left side: Chart of store returns */}
    <Box>
      <MotionWrapper>
        <ReturnsShops
          returnsByStore={returnsByStore}
          selectedStores={selectedStores}
          isCompactView={selectedStores.length > 0 || !!clickedStore}
          onBarClick={(store) => setClickedStore(store)}
        />
      </MotionWrapper>
    </Box>

    {/* Right side: Accordion with most returned products */}
    {(selectedStores.length > 0 || clickedStore) && (
      <ChakraBox>
        <Accordion
          allowMultiple
          defaultIndex={
            selectedStores.length === 1 || clickedStore ? [0] : []
          }
        >
          {selectedStores.length > 0
            ? selectedStores.map((store) => (
                <AccordionItem key={store.value}>
                  <h2>
                    <AccordionButton>
                      <ChakraBox
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                      >
                        {store.label} – Most returned products
                      </ChakraBox>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <MotionWrapper>
                      <ReturnsShopsByProduct
                        storeName={store.label}
                        data={productsByStore[store.label] || []}
                      />
                    </MotionWrapper>
                  </AccordionPanel>
                </AccordionItem>
              ))
            : clickedStore && (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <ChakraBox
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                      >
                        {clickedStore} – Most returned products
                      </ChakraBox>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>
                    <MotionWrapper>
                      <ReturnsShopsByProduct
                        storeName={clickedStore}
                        data={productsByStore[clickedStore] || []}
                      />
                    </MotionWrapper>
                  </AccordionPanel>
                </AccordionItem>
              )}

        </Accordion>
      </ChakraBox>
    )}

  </SimpleGrid>
</Box>




          {/* Return over time */}
          <Box mb={6}>
            <MotionWrapper>
              <ReturnOverTimeChart />
            </MotionWrapper>
          </Box>

          {/* Returns map */}
          <Box mb={6}>
            <MotionWrapper>
              <ReturnsMap searchTerm={searchTerm} />
            </MotionWrapper>
          </Box>
        </GridItem>

        {/* Right column (4/12) */}
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <MotionWrapper>
            <ReasonsDonutsChartShop
  selectedStores={selectedStores}
  reasonsByStore={reasonsByStore}
/>

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
