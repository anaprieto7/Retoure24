'use client'

import { Heading, Icon, Box, Input, Button, HStack, Badge, IconButton, useColorModeValue, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from "react";
import ReturnTable, { ReturnItem } from "@/components/ReturnTable";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import DateRangeFilter from "@/components/DateRangeFilter";
import { CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import Papa from "papaparse";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PageTitle from "@/components/PageTitle";
import { FiHome, FiList, FiSearch } from "react-icons/fi";





// Aquí va tu mock data (puedes traerla de una API en el futuro)
const statuses = ["Pending", "Registered", "Rejected", "Completed"];
const reasons = ["Defective item", "Changed mind", "Wrong size", "Not as described"];

const mockReturns: ReturnItem[] = [
{ id: "RET000001", customer: "Alice Walker", trackingNumber: "TRK102301", requestDate: "2025-05-01", products: "Wireless Mouse", returnReason: "Defective item", returnStatus: "Pending" },
  { id: "RET000002", customer: "Bob Miller", trackingNumber: "TRK102302", requestDate: "2025-05-02", products: "Bluetooth Speaker", returnReason: "Wrong item", returnStatus: "Registered" },
  { id: "RET000003", customer: "Clara Smith", trackingNumber: "TRK102303", requestDate: "2025-05-03", products: "USB-C Cable", returnReason: "Changed mind", returnStatus: "Completed" },
  { id: "RET000004", customer: "David Lee", trackingNumber: "TRK102304", requestDate: "2025-05-04", products: "Laptop Stand", returnReason: "Wrong size", returnStatus: "Rejected" },
  { id: "RET000005", customer: "Eve Brown", trackingNumber: "TRK102305", requestDate: "2025-05-05", products: "HDMI Adapter", returnReason: "Arrived late", returnStatus: "Pending" },
  { id: "RET000006", customer: "Frank Moore", trackingNumber: "TRK102306", requestDate: "2025-05-06", products: "Portable SSD", returnReason: "Better price found", returnStatus: "Registered" },
  { id: "RET000007", customer: "Gina Adams", trackingNumber: "TRK102307", requestDate: "2025-05-07", products: "Mechanical Keyboard", returnReason: "Changed mind", returnStatus: "Completed" },
  { id: "RET000008", customer: "Henry Young", trackingNumber: "TRK102308", requestDate: "2025-05-08", products: "Smartwatch", returnReason: "Defective item", returnStatus: "Rejected" },
  { id: "RET000009", customer: "Ivy Baker", trackingNumber: "TRK102309", requestDate: "2025-05-09", products: "Noise Cancelling Headphones", returnReason: "Didn't like it", returnStatus: "Pending" },
  { id: "RET000010", customer: "Jack King", trackingNumber: "TRK102310", requestDate: "2025-05-10", products: "4K Monitor", returnReason: "No longer needed", returnStatus: "Registered" },
  { id: "RET000011", customer: "Kara Scott", trackingNumber: "TRK102311", requestDate: "2025-05-11", products: "Gaming Mouse", returnReason: "Product damaged", returnStatus: "Completed" },
  { id: "RET000012", customer: "Liam Harris", trackingNumber: "TRK102312", requestDate: "2025-05-12", products: "Webcam", returnReason: "Did not match description", returnStatus: "Rejected" },
  { id: "RET000013", customer: "Mona Carter", trackingNumber: "TRK102313", requestDate: "2025-05-13", products: "Desk Lamp", returnReason: "Color not as expected", returnStatus: "Pending" },
  { id: "RET000014", customer: "Nate Gray", trackingNumber: "TRK102314", requestDate: "2025-05-14", products: "Bluetooth Earbuds", returnReason: "Shipping too slow", returnStatus: "Registered" },
  { id: "RET000015", customer: "Olivia Price", trackingNumber: "TRK102315", requestDate: "2025-05-15", products: "Wireless Charger", returnReason: "Ordered by mistake", returnStatus: "Completed" },
  { id: "RET000016", customer: "Paul Ward", trackingNumber: "TRK102316", requestDate: "2025-05-16", products: "HDMI Cable", returnReason: "Not compatible", returnStatus: "Rejected" },
  { id: "RET000017", customer: "Quinn Wood", trackingNumber: "TRK102317", requestDate: "2025-05-17", products: "Tablet Stand", returnReason: "Broken", returnStatus: "Pending" },
  { id: "RET000018", customer: "Rita Evans", trackingNumber: "TRK102318", requestDate: "2025-05-18", products: "Phone Case", returnReason: "Wrong model", returnStatus: "Registered" },
  { id: "RET000019", customer: "Sam Ford", trackingNumber: "TRK102319", requestDate: "2025-05-19", products: "Power Bank", returnReason: "Defective item", returnStatus: "Completed" },
  { id: "RET000020", customer: "Tina Hughes", trackingNumber: "TRK102320", requestDate: "2025-05-20", products: "Wireless Earbuds", returnReason: "Not working", returnStatus: "Rejected" },
  { id: "RET000021", customer: "Ulysses Long", trackingNumber: "TRK102321", requestDate: "2025-05-21", products: "Laptop Sleeve", returnReason: "Too small", returnStatus: "Pending" },
  { id: "RET000022", customer: "Vera Nash", trackingNumber: "TRK102322", requestDate: "2025-05-22", products: "Stylus Pen", returnReason: "Unresponsive", returnStatus: "Registered" },
  { id: "RET000023", customer: "Will Olsen", trackingNumber: "TRK102323", requestDate: "2025-05-23", products: "Mouse Pad", returnReason: "Wrong color", returnStatus: "Completed" },
  { id: "RET000024", customer: "Xena Park", trackingNumber: "TRK102324", requestDate: "2025-05-24", products: "Bluetooth Adapter", returnReason: "Didn't like it", returnStatus: "Rejected" },
  { id: "RET000025", customer: "Yuri Quinn", trackingNumber: "TRK102325", requestDate: "2025-05-25", products: "USB Hub", returnReason: "Not needed", returnStatus: "Pending" },
  { id: "RET000026", customer: "Zara Reed", trackingNumber: "TRK102326", requestDate: "2025-05-26", products: "Webcam Cover", returnReason: "Unopened", returnStatus: "Registered" },
  { id: "RET000027", customer: "Aaron Smith", trackingNumber: "TRK102327", requestDate: "2025-05-27", products: "Microphone", returnReason: "Sound issues", returnStatus: "Completed" },
  { id: "RET000028", customer: "Bianca Trent", trackingNumber: "TRK102328", requestDate: "2025-05-28", products: "Wireless Keyboard", returnReason: "Too big", returnStatus: "Rejected" },
  { id: "RET000029", customer: "Carter Ulman", trackingNumber: "TRK102329", requestDate: "2025-05-29", products: "Laptop Charger", returnReason: "Defective item", returnStatus: "Pending" },
  { id: "RET000030", customer: "Daisy Voss", trackingNumber: "TRK102330", requestDate: "2025-05-30", products: "Screen Protector", returnReason: "Wrong size", returnStatus: "Registered" },
  { id: "RET000031", customer: "Edward West", trackingNumber: "TRK102331", requestDate: "2025-05-31", products: "Portable Monitor", returnReason: "Too heavy", returnStatus: "Completed" },
  { id: "RET000032", customer: "Fiona Xu", trackingNumber: "TRK102332", requestDate: "2025-06-01", products: "USB Dock", returnReason: "Not as described", returnStatus: "Rejected" },
  { id: "RET000033", customer: "Graham York", trackingNumber: "TRK102333", requestDate: "2025-06-02", products: "Smart Plug", returnReason: "Doesn't connect", returnStatus: "Pending" },
  { id: "RET000034", customer: "Holly Zane", trackingNumber: "TRK102334", requestDate: "2025-06-03", products: "Laptop Cooling Pad", returnReason: "Too loud", returnStatus: "Registered" },
  { id: "RET000035", customer: "Ivan Alper", trackingNumber: "TRK102335", requestDate: "2025-06-04", products: "Drawing Tablet", returnReason: "Unresponsive", returnStatus: "Completed" },
  { id: "RET000036", customer: "Julia Baker", trackingNumber: "TRK102336", requestDate: "2025-06-05", products: "Laptop Backpack", returnReason: "Wrong color", returnStatus: "Rejected" },
  { id: "RET000037", customer: "Karl Conner", trackingNumber: "TRK102337", requestDate: "2025-06-06", products: "Wireless Router", returnReason: "Too slow", returnStatus: "Pending" },
  { id: "RET000038", customer: "Laura Dune", trackingNumber: "TRK102338", requestDate: "2025-06-07", products: "External Hard Drive", returnReason: "Not compatible", returnStatus: "Registered" },
  { id: "RET000039", customer: "Marco Elias", trackingNumber: "TRK102339", requestDate: "2025-06-08", products: "Bluetooth Headset", returnReason: "Defective mic", returnStatus: "Completed" },
  { id: "RET000040", customer: "Nina Fox", trackingNumber: "TRK102340", requestDate: "2025-06-09", products: "Ergonomic Chair", returnReason: "Too large", returnStatus: "Rejected" },
];

const ReturnListPage = () => {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [search, setSearch] = useState("");
 const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
 const [loading, setLoading] = useState(false);

 // Función para exportar a CSV
 const exportToCSV = (data, filename = "returns.csv") => {
  // Si quieres exportar todas las columnas tal como están:
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

 // Función para limpiar todos los filtros
 const handleClearAllFilters = () => {
  setSearch("");
  setDateRange({ startDate: null, endDate: null });
  setSelectedStatuses([]);
  setSelectedReasons([]);
};

const handleFilterChange = (callback) => (value) => {
  setLoading(true);
  callback(value);
  setTimeout(() => setLoading(false), 400); // 400 ms de delay para el efecto visual
};


  // FILTRO combinado
  const filteredReturns = mockReturns.filter(item => {
  const inStatus = selectedStatuses.length === 0 || selectedStatuses.includes(item.returnStatus);
  const inReason = selectedReasons.length === 0 || selectedReasons.includes(item.returnReason);
  const inSearch = Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase());
 const itemDate = new Date(item.requestDate);
  const inRange =
    (!dateRange.startDate || itemDate >= dateRange.startDate) &&
    (!dateRange.endDate || itemDate <= dateRange.endDate);

  return inStatus && inReason && inSearch && inRange;
});
const areFiltersActive =
  search.length > 0 ||
  (dateRange.startDate !== null && dateRange.endDate !== null) ||
  selectedStatuses.length > 0 ||
  selectedReasons.length > 0;

 

  return (
    <main>
       <BreadcrumbNav
        items={[
           { label: "Dashboard", href: "/dashboard", icon: FiHome },
          { label: "Retoure Liste", icon: FiList }
        ]}
      />
      <PageTitle title="Retouren Liste" />
      <Box display="flex" gap={4} mb={4} mt={6} alignItems={"left"} flexWrap="wrap">
        <Box maxW="500px" width={"100%"}> 
          <InputGroup> 
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by any field..."
              value={search}
              fontSize="sm"
              onChange={handleFilterChange(e => setSearch(e.target.value))}
              variant={'filled'}
              color={useColorModeValue("gray.800", "gray.100")}
              _placeholder={{ color: useColorModeValue("gray.400", "gray.400") }}
              _hover={{ borderColor: useColorModeValue("blue.300", "blue.600") }}
              _focus={{
                borderColor: useColorModeValue("blue.400", "blue.500"),
                boxShadow: "0 0 0 1px #3182ce",
              }}
            />
          </InputGroup>
        </Box>
        <DateRangeFilter
          value={dateRange}
          onChange={handleFilterChange(setDateRange)}
        />
        <MultiSelectDropdown
          options={statuses}
          selected={selectedStatuses}
          onChange={handleFilterChange(setSelectedStatuses)}
          placeholder="Status"
        />
        <MultiSelectDropdown
          options={reasons}
          selected={selectedReasons}
          onChange={handleFilterChange(setSelectedReasons)}
          placeholder="Reason"
        />

        {areFiltersActive && (
          <Button
        leftIcon={<CloseIcon boxSize={3} />}
        size="sm"
        variant="outline"
        colorScheme="blue"
        fontSize="sm"
        ml={{ base: 0, md: 2 }}
        mt={{ base: 2, md: 0 }}
        onClick={handleClearAllFilters}
      >
        Clear all
      </Button>
        )}
      </Box>
      <HStack spacing={2} mb={4} flexWrap="wrap">
  {/* Status badges */}
  {selectedStatuses.map(status => (
    <Badge
      key={status}
      colorScheme="blue"
      px={2}
      py={1}
      borderRadius="md"
      display="flex"
      alignItems="center"
    >
      {status}
      <IconButton
        aria-label="Clear"
        size="xs"
        icon={<CloseIcon boxSize={2.5} />}
        ml={2}
        variant="ghost"
        colorScheme="blue"
        onClick={() => setSelectedStatuses(selectedStatuses.filter(s => s !== status))}
      />
    </Badge>
  ))}

  {/* Reason badges */}
  {selectedReasons.map(reason => (
    <Badge
      key={reason}
      colorScheme="purple"
      px={2}
      py={1}
      borderRadius="md"
      display="flex"
      alignItems="center"
    >
      {reason}
      <IconButton
        aria-label="Clear"
        size="xs"
        icon={<CloseIcon boxSize={2.5} />}
        ml={2}
        variant="ghost"
        colorScheme="purple"
        onClick={() => setSelectedReasons(selectedReasons.filter(r => r !== reason))}
      />
    </Badge>
  ))}

  {/* Date range badge */}
  {(dateRange.startDate && dateRange.endDate) && (
    <Badge
      colorScheme="orange"
      px={2}
      py={1}
      borderRadius="md"
      display="flex"
      alignItems="center"
    >
      {`${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`}
      <IconButton
        aria-label="Clear"
        size="xs"
        icon={<CloseIcon boxSize={2.5} />}
        ml={2}
        variant="ghost"
        colorScheme="orange"
        onClick={() => setDateRange({ startDate: null, endDate: null })}
      />
    </Badge>
  )}

  {/* Search badge */}
  {search && (
    <Badge
      colorScheme="teal"
      px={2}
      py={1}
      borderRadius="md"
      display="flex"
      alignItems="center"
    >
      {`Search: ${search}`}
      <IconButton
        aria-label="Clear"
        size="xs"
        icon={<CloseIcon boxSize={2.5} />}
        ml={2}
        variant="ghost"
        colorScheme="teal"
        onClick={() => setSearch("")}
      />
    </Badge>
  )}
</HStack>
    
      <ReturnTable
  returns={filteredReturns}
  onClearFilters={handleClearAllFilters}
/>
    </main>
  );
};

export default ReturnListPage;
