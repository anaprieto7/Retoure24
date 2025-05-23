"use client";

import { Box, Button, Flex,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton, } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import html2canvas from "html2canvas";
import { FiDownload, FiImage } from "react-icons/fi";


type ProductData = {
  product: string;
  returns: number;
  reason: string;
};

type Props = {
  storeName: string;
  data: ProductData[];
};

const getBarColor = (returns: number) => {
  if (returns > 30) return "#E53E3E";
  if (returns > 15) return "#DD6B20";
  return "#38A169";
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length > 0) {
    const product = payload[0].payload;
    return (
      <Box bg="white" p={3} shadow="md" borderRadius="md" fontSize="sm">
        <strong>{product.product}</strong>
        <br />
        Returns: {product.returns}
        <br />
        Reason: {product.reason}
      </Box>
    );
  }
  return null;
};

export default function ReturnsShopsByProduct({ storeName, data }: Props) {
  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Product,Returns,Reason", ...data.map(p => `${p.product},${p.returns},"${p.reason}"`)].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${storeName}_returns.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPNG = () => {
    const chartElement = document.getElementById("product-chart");
    if (!chartElement) return;
    html2canvas(chartElement).then(canvas => {
      const link = document.createElement("a");
      link.download = `${storeName}_returns.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <Box mt={0} bg="white" _dark={{ bg: "gray.800" }} p={4} rounded="md" borderWidth="1px">

      <Flex justify="space-between" mb={4} align="center">
        <Box fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>Most returned products – {storeName}</Box>
        <Flex gap={2}>
          <Menu>
  <MenuButton
  as={Button}
  rightIcon={<FiDownload />}
  size="sm"
  variant="outline"
>
  Export
</MenuButton>

  <MenuList>
    <MenuItem icon={<FiDownload />} onClick={downloadCSV}>
      Export CSV
    </MenuItem>
    <MenuItem icon={<FiImage />} onClick={downloadPNG}>
      Export PNG
    </MenuItem>
  </MenuList>
</Menu>

        </Flex>
      </Flex>
      <Box w="100%" overflowX="auto" id="product-chart">
        <Box minW="400px" height="300px">
          {data.length === 0 ? (
  <Box fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
    No returns found for this store.
  </Box>
) : (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
      <XAxis dataKey="product" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="returns">
        <LabelList dataKey="returns" position="top" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getBarColor(entry.returns)} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
)}

        </Box>
      </Box>
    </Box>
  );
}
