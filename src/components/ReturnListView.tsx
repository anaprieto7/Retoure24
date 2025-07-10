'use client'

import { useState } from "react";
import {
  Box, Input, Button, HStack, Badge, IconButton,
  useColorModeValue, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { CloseIcon } from "@chakra-ui/icons";
import { FiHome, FiList, FiSearch } from "react-icons/fi";
import Papa from "papaparse";
import ActiveFiltersBadges from "@/components/ActiveFiltersBadges";
import ReturnTable from "@/components/ReturnTable";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import DateRangeFilter from "@/components/DateRangeFilter";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PageTitle from "@/components/PageTitle";
import returnsMock from "@/data/returnsMock";
import { mockShops } from "@/data/mockShops";
import { mockWarehouses } from "@/data/mockWarehouses";
import { getAccessibleReturns } from "@/lib/accessControl";
import { useUser } from "@/context/UserContext";

// This component displays a list of returns with various filters and options.

// Mock data for statuses and reasons
// In a real application, these would likely come from an API or database.
const statuses = ["Registered", "Approved", "Received", "Refunded", "Rejected", "Cancelled"];
const reasons = ["Defective item", "Changed mind", "Wrong size", "Not as described"];

const ReturnListPage = () => {
  const { user } = useUser();
  const accessibleReturns = getAccessibleReturns(user);
  const showWarehouse = user?.warehouseIds?.length > 1;
  const showShop = user?.shopIds?.length > 1;

  // Filters
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
  const [loading, setLoading] = useState(false);
  const [selectedWarehouses, setSelectedWarehouses] = useState<string[]>([]);
  const [selectedShops, setSelectedShops] = useState<string[]>([]); 
  

// Function to handle clearing all filter
  const handleClearAllFilters = () => {
    setSearch("");
    setDateRange({ startDate: null, endDate: null });
    setSelectedStatuses([]);
    setSelectedReasons([]);
    setSelectedWarehouses([]);
    setSelectedShops([]);
    setLoading(false);
    // Reset to initial state
    setTimeout(() => {
      setSelectedStatuses([]);
      setSelectedReasons([]);
      setSelectedWarehouses([]);
      setSelectedShops([]);
    }, 400);
  };


  // Function to handle clearing a specific filter
  const handleClearFilter = (type: string, value?: string) => {
  if (type === "status") {
    setSelectedStatuses((prev) => prev.filter((s) => s !== value));
  } else if (type === "reason") {
    setSelectedReasons((prev) => prev.filter((r) => r !== value));
  } else if (type === "warehouse") {
    setSelectedWarehouses((prev) => prev.filter((w) => w !== value));
  } else if (type === "shop") {
    setSelectedShops((prev) => prev.filter((s) => s !== value));
  } else if (type === "search") {
    setSearch("");
  } else if (type === "date") {
    setDateRange({ startDate: null, endDate: null });
  }
};


  const handleFilterChange = (callback) => (value) => {
    setLoading(true);
    callback(value);
    setTimeout(() => setLoading(false), 400);
  };

  const filteredReturns = accessibleReturns
    .map((ret) => {
      const shop = mockShops.find(s => s.id === ret.shopId);
      const warehouse = mockWarehouses.find(w => w.id === shop?.warehouseId);

      return {
        ...ret,
        client: ret.client,
        products: ret.products,
        returnStatus: ret.status,
        requestDate: ret.date,
        customer: ret.client.name,
        returnReason: ret.products.map(p => p.reason).join(", "),
        shopName: shop?.name || "-",
        warehouseName: warehouse?.name || "-"
      };
    })
    .filter(item => {
      const inStatus = selectedStatuses.length === 0 || selectedStatuses.includes(item.returnStatus);
      const inReason = selectedReasons.length === 0 || selectedReasons.includes(item.returnReason);
      const inSearch = Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase());
      const itemDate = new Date(item.requestDate);
      const inRange =
        (!dateRange.startDate || itemDate >= dateRange.startDate) &&
        (!dateRange.endDate || itemDate <= dateRange.endDate);
      const inWarehouse = selectedWarehouses.length === 0 || selectedWarehouses.includes(item.warehouseName);
      const inShop = selectedShops.length === 0 || selectedShops.includes(item.shopName);
      return inStatus && inReason && inSearch && inRange && inWarehouse && inShop;
    });

  const areFiltersActive =
    search.length > 0 ||
    (dateRange.startDate && dateRange.endDate) ||
    selectedStatuses.length > 0 ||
    selectedReasons.length > 0 ||
    selectedWarehouses.length > 0 ||
    selectedShops.length > 0;

  return (
    <main>
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/dashboard", icon: FiHome },
          { label: "Retouren Liste", icon: FiList }
        ]}
      />
      <PageTitle title="Retouren Liste" />

      {/* Filtros superiores */}
      <Box display="flex" gap={4} mb={4} mt={6} alignItems={"left"} flexWrap="wrap">
        <Box maxW="500px" width={"100%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiSearch color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by any field..."
              value={search}
              fontSize="sm"
              onChange={handleFilterChange(e => setSearch(e.target.value))}
              variant={'filled'}
              color={useColorModeValue("gray.800", "gray.100")}
              _placeholder={{ color: useColorModeValue("gray.400", "gray.400") }}
            />
          </InputGroup>
        </Box>
        <DateRangeFilter value={dateRange} onChange={handleFilterChange(setDateRange)} />
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
        {user?.warehouseIds?.length > 1 && (
          <MultiSelectDropdown
            options={mockWarehouses
              .filter(w => user.warehouseIds.includes(w.id))
              .map(w => w.name)}
            selected={selectedWarehouses}
            onChange={handleFilterChange(setSelectedWarehouses)}
            placeholder="Warehouse"
            searchable
          />
        )}

        {user?.shopIds?.length > 1 && (
          <MultiSelectDropdown
            options={mockShops
              .filter(s => user.shopIds.includes(s.id))
              .map(s => s.name)}
            selected={selectedShops}
            onChange={handleFilterChange(setSelectedShops)}
            placeholder="Shop"
            searchable
          />
        )}

        {areFiltersActive && (
          <Button
            leftIcon={<CloseIcon boxSize={3} />}
            size="sm"
            variant="outline"
            colorScheme="blue"
            fontSize="sm"
            onClick={handleClearAllFilters}
          >
            Clear all
          </Button>
        )}
      </Box>
      {/* Filtros activos */}
      {areFiltersActive && (
        <ActiveFiltersBadges
          search={search}
          dateRange={dateRange}
          statuses={selectedStatuses}   
          reasons={selectedReasons}      
          warehouses={selectedWarehouses}
          shops={selectedShops}
          onClear={handleClearFilter}
        />
      )}


      {/* Tabla */}
      <ReturnTable
        returns={filteredReturns}
        onClearFilters={handleClearAllFilters}
        showShop={showShop}
        showWarehouse={showWarehouse}
      />
    </main>
  );
};

export default ReturnListPage;
