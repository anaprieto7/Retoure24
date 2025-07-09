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

import returnsMock from "@/data/returnsMock";
import { format as formatDateFn, parseISO } from "date-fns";

type Props = {
  shopId: string;
};

export default function ReturnOverTimeChart({ shopId }: Props) {
  const { isOpen, onToggle } = useDisclosure();
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // 1. Filtrar por tienda
  const filteredReturns = returnsMock.filter(r => r.shopId === shopId);

  // 2. Agrupar por día (ej: "06.07")
  const grouped: Record<string, number> = {};

  filteredReturns.forEach(r => {
    const date = formatDateFn(new Date(r.date), "dd.MM");
    grouped[date] = (grouped[date] || 0) + 1;
  });

  // 3. Convertir a formato para Recharts
  const chartData = Object.entries(grouped).map(([date, value]) => ({
    date,
    value,
  }));

  return (
    <Box bg={useColorModeValue("white", "gray.800")} p={5} borderRadius="md" boxShadow="sm" position="relative" >
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

      {/* Gráfico */}
      <Box mt={6} height="300px">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
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
