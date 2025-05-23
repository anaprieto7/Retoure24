"use client";

import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
} from "@chakra-ui/react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useColorModeValue } from "@chakra-ui/react";

const orangeIcon = new L.DivIcon({
  className: "custom-marker",
  html: `<div style="background-color: #F97316; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
});

const productData = [
  {
    country: "Deutschland",
    product1: 800,
    product2: 340,
    product3: 200,
  },
  {
    country: "Frankreich",
    product1: 500,
    product2: 260,
    product3: 220,
  },
  {
    country: "Spanien",
    product1: 300,
    product2: 400,
    product3: 180,
  },
  {
    country: "Italien",
    product1: 700,
    product2: 210,
    product3: 220,
  },
];

const countryCoords = {
  Deutschland: [51.1657, 10.4515],
  Frankreich: [46.6034, 1.8883],
  Spanien: [40.4637, -3.7492],
  Italien: [41.8719, 12.5674],
};

export default function ReturnsMap({ searchTerm }: { searchTerm: string }) {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [visibleProducts, setVisibleProducts] = useState({
    product1: true,
    product2: true,
    product3: true,
  });

  const toggleProduct = (key: string) => {
    setVisibleProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getTotalReturns = (country: string) => {
    const data = productData.find((item) => item.country === country);
    if (!data) return 0;
    return (
      (visibleProducts.product1 ? data.product1 : 0) +
      (visibleProducts.product2 ? data.product2 : 0) +
      (visibleProducts.product3 ? data.product3 : 0)
    );
  };

  // 🔍 Filtrar países según el término de búsqueda
  const lowerSearch = searchTerm?.toLowerCase() || "";
  const filteredData = productData.filter((item) =>
    item.country.toLowerCase().includes(lowerSearch)
  );
  const filteredCoords = Object.entries(countryCoords).filter(([country]) =>
    country.toLowerCase().includes(lowerSearch)
  );


const activeTextColor = useColorModeValue("gray.800", "gray.100");
const inactiveTextColor = useColorModeValue("gray.400", "gray.500");
  const borderColor = useColorModeValue("gray.200", "gray.700"); 

  return (
    <Box bg={useColorModeValue("white", "gray.800")} p={5} borderRadius="md" boxShadow="sm" borderColor={borderColor} shadow="sm">
      <Flex justify="space-between" align="center" mb={3}>
        <Box>
          <Heading size="md">Retouren nach Ländern</Heading>
          <Text color="gray.500">Hier können Sie die Retouren nach Ländern sehen.</Text>
          <Text fontSize="sm" color="gray.600" mt={1}>
            {format(dateRange[0].startDate, "dd.MM.yyyy")} - {format(dateRange[0].endDate, "dd.MM.yyyy")}
          </Text>
        </Box>

        <Popover placement="bottom-start" closeOnBlur>
          <PopoverTrigger>
            <Button leftIcon={<FiCalendar />} size="sm" variant="outline">
              Datumsbereich auswählen
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent w="auto" p={0} border="none" bg="transparent" boxShadow="none">
              <PopoverBody p={0}>
                <Box bg={useColorModeValue("white", "gray.700")} borderRadius="md" boxShadow="md">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    rangeColors={["#F97316"]}
                  />
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Box h="300px">
          <MapContainer center={[47, 10]} zoom={4} style={{ height: "100%", width: "100%" }}>

            <TileLayer

              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {filteredCoords.map(([country, coords]) => (
              <Marker key={country} position={coords} icon={orangeIcon}>
                <Popup>
                  <strong>{country}</strong>
                  <br />
                  Retouren: {getTotalReturns(country)}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>

        <Box>
          <Box mb={4} textAlign="center">
            {[
              { key: "product1", label: "Product NAME one", color: "#EF4444" },
              { key: "product2", label: "Product NAME two", color: "#3B82F6" },
              { key: "product3", label: "Product NAME three", color: "#FACC15" },
            ].map((product) => (
              <Box
                key={product.key}
                as="button"
                onClick={() => toggleProduct(product.key)}
                display="inline-flex"
                alignItems="center"
                mx={3}
                mb={2}
                fontSize="sm"
                textDecoration={visibleProducts[product.key] ? "none" : "line-through"}
                color={visibleProducts[product.key] ? activeTextColor : inactiveTextColor}

                _hover={{ opacity: 0.8 }}
              >
                <Box
                  w="10px"
                  h="10px"
                  borderRadius="full"
                  bg={product.color}
                  mr={2}
                />
                {product.label}
              </Box>
            ))}
          </Box>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={filteredData}>
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              {visibleProducts.product1 && <Bar dataKey="product1" fill="#EF4444" radius={[10, 10, 0, 0]} />}
              {visibleProducts.product2 && <Bar dataKey="product2" fill="#3B82F6" radius={[10, 10, 0, 0]} />}
              {visibleProducts.product3 && <Bar dataKey="product3" fill="#FACC15" radius={[10, 10, 0, 0]} />}
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
// 🔍 Se agregó un filtro para mostrar solo los países que coinciden con el término de búsqueda