"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Collapse,
} from "@chakra-ui/react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useColorModeValue } from "@chakra-ui/react";

// Data Example
const sampleData = [
  { date: "06.05", value: 120 },
  { date: "07.05", value: 98 },
  { date: "08.05", value: 150 },
  { date: "09.05", value: 80 },
  { date: "10.05", value: 130 },
  { date: "11.05", value: 200 },
  { date: "12.05", value: 170 },
];

export default function ReturnOverTimeChart() {
  const { isOpen, onToggle } = useDisclosure();
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
<Box bg={useColorModeValue("white", "gray.800")} p={5} borderRadius="md" boxShadow="sm" position="relative" 
          borderColor={borderColor} borderWidth="2px">
  <Flex justify="space-between" align="center" mb={2}>
    <Box>
      <Heading size="md">Retouren im Zeitverlauf</Heading>
      <Text fontSize="sm" color="gray.600">
        {format(dateRange[0].startDate, "dd.MM.yyyy")} -{" "}
        {format(dateRange[0].endDate, "dd.MM.yyyy")}
      </Text>
    </Box>

    <Box position="relative">
      <Button
        leftIcon={<FiCalendar />}
        size="sm"
        onClick={onToggle}
        variant="outline"
      >
Datumsbereich auswählen
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Box
          position="absolute"
          top="40px"
          zIndex={10}
          boxShadow="md"
          borderRadius="md"
          borderWidth="1px"
          overflow="hidden"
        >
          <DateRange
            editableDateInputs={true}
            onChange={(ranges: any) => setDateRange([ranges.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            rangeColors={["#F97316"]}
          />
        </Box>
      </Collapse>
    </Box>
  </Flex>

  {/* Graphic */}
  <Box mt={6} height="300px">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#F97316"
          fill="#F97316"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </Box>
</Box>

  );
}
// // ReturnOverTimeChart.tsx
// import React from "react";
// import {
// }