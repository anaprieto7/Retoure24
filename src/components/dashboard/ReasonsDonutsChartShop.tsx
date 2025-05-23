"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type ReasonData = { reason: string; value: number };
type Props = {
  selectedStores: { label: string; value: string }[];
  reasonsByStore: { [storeName: string]: ReasonData[] };
};

const COLORS = ["#ED8936", "#48BB78", "#4299E1", "#F56565", "#9F7AEA", "#ECC94B"];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length > 0) {
    const data = payload[0].payload;
    return (
      <Box
        bg="gray.100"
        _dark={{ bg: "gray.800" }}
        p={3}
        borderRadius="md"
        shadow="md"
        fontSize="sm"
      >
        <strong>{data.reason}</strong>
        <br />
        {data.value} returns
      </Box>
    );
  }
  return null;
};

export default function ReasonsDonutsChartShop({ selectedStores, reasonsByStore }: Props) {
  return (
    <Box mt={6}>
      <Heading size="md" mb={4}>
        Return reasons by store
      </Heading>

      <Accordion allowMultiple defaultIndex={[0]}>
        {selectedStores.map((store) => {
          const data = reasonsByStore[store.label] || [];

          return (
            <AccordionItem
              key={store.value}
              bg="gray.50"
              _dark={{ bg: "gray.700" }}
              rounded="md"
              mb={3}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {store.label}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {data.length === 0 ? (
                  <Box fontSize="sm" color="gray.500">
                    No return reasons found.
                  </Box>
                ) : (
                  <Box w="100%" height="250px">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          dataKey="value"
                          nameKey="reason"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                )}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}
