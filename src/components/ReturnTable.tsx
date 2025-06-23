"use client";

import React, { FC, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link as ChakraLink,
  Button,
  IconButton,
  HStack,
  Select,
  useColorMode,
  useColorModeValue,
  Checkbox,
  Flex,
   Menu, MenuButton, MenuList, MenuItem, Text
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import ReturnStatusBadge from "@/components/ReturnStatusBadge";
import ViewDetailsButton from "@/components/ViewDetailsButton";
import Tooltip from "@/components/tooltip";
import SortIcon from "@/components/SortIcon";
import Papa from "papaparse";
import jsPDF from "jspdf";
import { motion, AnimatePresence } from "framer-motion";

// Interface
export interface ReturnItem {
  id: string;
  customer: string;
  trackingNumber: string;
  requestDate: string;
  products: string;
  returnReason: string;
  returnStatus: string;
}

interface ReturnTableProps {
  returns: ReturnItem[];
  onClearFilters: () => void; // Para el botón de limpiar filtros
}

const ROWS_PER_PAGE_OPTIONS = [5, 8, 12, 20];

const ReturnTable: FC<ReturnTableProps> = ({ returns, onClearFilters }) => {
  // Paginación
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [page, setPage] = useState(1);
  const [allRowsSelected, setAllRowsSelected] = useState(false); // NUEVO: ¿están seleccionadas todas las filas de todas las páginas?


  // Selección de filas
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  // Ordenamiento
  const [sortConfig, setSortConfig] = useState<{ key: keyof ReturnItem | ""; direction: "asc" | "desc" | null }>({ key: "", direction: null });

  // Ordenar returns según el sortConfig
  const sortedReturns = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return returns;
    return [...returns].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      // Si es fecha, comparar como fecha
      if (sortConfig.key === "requestDate") {
        aValue = new Date(aValue as string).getTime();
        bValue = new Date(bValue as string).getTime();
      }
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [returns, sortConfig]);

  // Paginado (usa sortedReturns)
  const totalPages = Math.max(1, Math.ceil(sortedReturns.length / rowsPerPage));
  const startIdx = (page - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const pagedData = sortedReturns.slice(startIdx, endIdx);

  // UI (colores)
  const bgTable = useColorModeValue("white", "gray.800");
  const bgRowHover = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("blue.200", "gray.700");
  const headerBg = useColorModeValue("blue.50", "gray.900");
  const headerColor = useColorModeValue("blue.900", "gray.100");

  // Exportar todo o solo lo seleccionado
const handleExportSelectedOrAll = () => {
  const dataToExport =
    selectedRows.length === 0
      ? sortedReturns    // Exporta todo si no hay nada seleccionado
      : sortedReturns.filter((item) => selectedRows.includes(item.id));
  exportToCSV(dataToExport);
};

// Selección masiva (checkbox de seleccionar todo)
const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    setSelectedRows(pagedData.map(item => item.id)); // solo los de la página actual
    setAllRowsSelected(false); // Por defecto, NO está global aún
  } else {
    setSelectedRows([]);
    setAllRowsSelected(false);
  }
};


  // Selección individual
  const handleSelectRow = (id: string) => {
  setSelectedRows(prev => {
    if (prev.includes(id)) {
      setAllRowsSelected(false); // Si desmarca una, ya no está todo seleccionado
      return prev.filter(rowId => rowId !== id);
    }
    return [...prev, id];
  });
};

  // Exportar solo seleccionadas
 // Handler general
const handleExport = (format: "csv" | "txt" | "pdf") => {
  const dataToExport =
    selectedRows.length === 0
      ? sortedReturns
      : sortedReturns.filter(item => selectedRows.includes(item.id));
  if (format === "csv") exportToCSV(dataToExport);
  if (format === "txt") exportToTXT(dataToExport);
  if (format === "pdf") exportToPDF(dataToExport);
};

  // Exporta CSV usando papaparse
const exportToCSV = (data: ReturnItem[]) => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "returns.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Exporta TXT
const exportToTXT = (data: ReturnItem[]) => {
  const text = data.map(row =>
    Object.values(row).join("\t")
  ).join("\n");
  const blob = new Blob([text], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "returns.txt");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Exporta PDF
const exportToPDF = (data: ReturnItem[]) => {
  const doc = new jsPDF();
  let y = 10;
  doc.setFontSize(10);
  data.forEach((row, idx) => {
    const line = `${row.id} | ${row.customer} | ${row.trackingNumber} | ${row.requestDate} | ${row.products} | ${row.returnReason} | ${row.returnStatus}`;
    doc.text(line, 10, y);
    y += 7;
    if (y > 270) { doc.addPage(); y = 10; }
  });
  doc.save("returns.pdf");
};

  // Cambio de página y filas por página
  const goToPage = (n: number) => setPage(n);
  const handleRowsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  // Calcula las páginas a mostrar (máximo 5 en el paginador)
  const getPages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (page >= totalPages - 2) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };
  const allChecked = pagedData.length > 0 && pagedData.every(item => selectedRows.includes(item.id));
const isIndeterminate = selectedRows.length > 0 && !allChecked && pagedData.some(item => selectedRows.includes(item.id));



  // ---- Render ----
  return (
    <Box mt={6}
      rounded="xl"
      boxShadow="sm"
      borderWidth={1}
      borderColor={borderColor}
      bg={bgTable}
      w="100%" 
      overflowX="auto"
    >

      <Box px={6} pt={3} pb={2}>
        <Box as="h3" fontSize="xl" fontWeight="semibold" mb={2} color={useColorModeValue("gray.900", "gray.300")}>
            Retouren List
        </Box>
          {/* Aquí puedes poner algún subtítulo si quieres */}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        pr={4}
        pt={3}
        pb={2}
        w="100%"
      >
        <HStack spacing={2} pl={6}>
          {/* Selector de filas */}
          <Box fontSize="sm" color="gray.600">Rows per page:</Box>
          <Select
            size="sm"
            width="fit-content"
            value={rowsPerPage}
            onChange={handleRowsPerPage}
            variant="filled"
            bg={useColorModeValue("gray.100", "gray.700")}
            borderRadius="md"
            fontWeight="regular"
            fontSize={"sm"}
          >
            {ROWS_PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </Select>
        </HStack>
        <HStack spacing={4}>
          {/* Paginador minimalista */}
          <Flex align="center" gap={1}>
            <Text fontSize="xs" color="gray.600">
              {startIdx + 1}–{Math.min(endIdx, sortedReturns.length)} von {sortedReturns.length}
            </Text>
            <IconButton
              icon={<ChevronLeftIcon />}
              size="xs"
              variant="ghost"
              aria-label="Previous"
              onClick={() => goToPage(page - 1)}
              isDisabled={page === 1}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              size="xs"
              variant="ghost"
              aria-label="Next"
              onClick={() => goToPage(page + 1)}
              isDisabled={endIdx >= sortedReturns.length}
            />
          </Flex>
          {/* Botón Export */}
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<DownloadIcon />}
              size="sm"
              variant="solid"
              minW="100px"
            >
              {selectedRows.length === 0
                ? "Export"
                : `Export selection (${selectedRows.length})`}
            </MenuButton>
            <MenuList>
              <MenuItem fontSize="sm" onClick={() => handleExport("csv")}>Export as CSV</MenuItem>
              <MenuItem  fontSize="sm" onClick={() => handleExport("pdf")}>Export as PDF</MenuItem>
              <MenuItem fontSize="sm" onClick={() => handleExport("txt")}>Export as TXT</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>

      {/* Mensaje de selección de todas las filas */}
      {allChecked && !allRowsSelected && sortedReturns.length > pagedData.length && (
        <Box
          bg="gray.50"
          px={4}
          py={2}
          my={2}
          fontSize="sm"
          color={useColorModeValue("gray.700", "gray.300")}
          bgColor={useColorModeValue("gray.50", "gray.700")}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <span>
            Alle Zeilen auf dieser Seite sind ausgewählt.&nbsp;
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                setSelectedRows(sortedReturns.map(item => item.id));
                setAllRowsSelected(true);
              }}
              fontWeight="normal"
              fontSize="sm"
            >
              Wähl die Zeilen aller Seiten aus
            </Button>
          </span>
        </Box>
      )}


      {/* Tabla de retornos */}
      <Box
        
        maxH={{ base: "none", md: "800px", sm: "600px" }}
        overflowY={{ base: "visible", md: "auto" }}
      >
        <Table variant="simple" size="md" minW="600px">
          <Thead>
            <Tr
              bg={headerBg}
              position={{ base: "static", md: "sticky" }}
              top={{ md: 0 }}
              zIndex={1}
              transition="background 0.2s"
            >
              {/* Checkbox de seleccionar todos */}
              <Th>
                <Checkbox
                  isChecked={
                    allRowsSelected
                      ? true
                      : pagedData.length > 0 && pagedData.every(item => selectedRows.includes(item.id))
                  }
                  isIndeterminate={
                    !allRowsSelected && selectedRows.length > 0 && selectedRows.length < pagedData.length
                  }
                  onChange={handleSelectAll}
                />

              </Th>
              {/* ... (el resto de los Th con ordenamiento, como ya tienes) */}
              <Th onClick={() => setSortConfig({ key: "id", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>ID <SortIcon direction={sortConfig.key === "id" ? sortConfig.direction : undefined} active={sortConfig.key === "id"} /></Th>
              <Th onClick={() => setSortConfig({ key: "customer", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>Customer <SortIcon direction={sortConfig.key === "customer" ? sortConfig.direction : undefined} active={sortConfig.key === "customer"} /></Th>
              <Th onClick={() => setSortConfig({ key: "trackingNumber", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>Tracking No <SortIcon direction={sortConfig.key === "trackingNumber" ? sortConfig.direction : undefined} active={sortConfig.key === "trackingNumber"} /></Th>
              <Th onClick={() => setSortConfig({ key: "requestDate", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>Request Date <SortIcon direction={sortConfig.key === "requestDate" ? sortConfig.direction : undefined} active={sortConfig.key === "requestDate"} /></Th>
              <Th onClick={() => setSortConfig({ key: "products", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>Products <SortIcon direction={sortConfig.key === "products" ? sortConfig.direction : undefined} active={sortConfig.key === "products"} /></Th>
              <Th onClick={() => setSortConfig({ key: "returnReason", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>Reason <SortIcon direction={sortConfig.key === "returnReason" ? sortConfig.direction : undefined} active={sortConfig.key === "returnReason"} /></Th>
              <Th onClick={() => setSortConfig({ key: "returnStatus", direction: sortConfig.direction === "asc" ? "desc" : "asc" })} cursor="pointer" color={useColorModeValue("gray.700", "gray.300")}>Status <SortIcon direction={sortConfig.key === "returnStatus" ? sortConfig.direction : undefined} active={sortConfig.key === "returnStatus"} /></Th>
              <Th color={useColorModeValue("gray.700", "gray.300")}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
  <AnimatePresence>
    {pagedData.length === 0 ? (
      <motion.tr
        key="no-results"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.24, delay: 0.1 }}
      >
        <Td colSpan={9} textAlign="center" py={12}>
          <Box>
            <Box fontWeight="bold" fontSize="md" color="gray.500">
              No returns found for this filter.
            </Box>
            <Button
              mt={4}
              colorScheme="blue"
              variant="outline"
              onClick={onClearFilters}
              size="xs"
            >
              Clear filters
            </Button>
          </Box>
        </Td>
      </motion.tr>
    ) : (
      pagedData.map((item, idx) => {
        const isSelected = selectedRows.includes(item.id);
        const highlightBg = useColorModeValue("#F7FAFC", "#1A202C"); // gray.50/light, gray.800/dark
        const hoverBg = useColorModeValue("#EDF2F7", "#2D3748");     // gray.100/light, gray.700/dark

        return (
          <motion.tr
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundColor: isSelected ? highlightBg : "transparent",
            }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.22,
              delay: idx * 0.025,
              backgroundColor: { duration: 0.25 },
            }}
             whileHover={{
              backgroundColor: isSelected ? highlightBg : hoverBg,
              transition: { duration: 0.14 }
            }}
          style={{
            backgroundColor: isSelected ? highlightBg : undefined,
            cursor: "pointer",
          }}
          >
            <Td>
              <Checkbox
                isChecked={isSelected}
                onChange={() => handleSelectRow(item.id)}
                aria-label={`Seleccionar fila ${item.id}`}
              />
            </Td>
            <Td color={useColorModeValue("blue.900", "blue.50")} fontSize="sm" fontWeight="semibold">{item.id}</Td>
            <Td fontSize="sm">{item.customer}</Td>
            <Td fontSize="sm">{item.trackingNumber}</Td>
            <Td fontSize="sm">{item.requestDate}</Td>
            <Td fontSize="sm">{item.products}</Td>
            <Td fontSize="sm">{item.returnReason}</Td>
            <Td>
              <ReturnStatusBadge status={item.returnStatus} />
            </Td>
            <Td>
              <Tooltip label="View details of this return">
                <ChakraLink
                  as={NextLink}
                  href="/ReturnDetails" // Cambia esto por el enlace correcto
                  _hover={{ textDecoration: "none" }}
                  
                >
                  <ViewDetailsButton />
                </ChakraLink>
              </Tooltip>
            </Td>
          </motion.tr>
        );
      })
    )}
  </AnimatePresence>
</Tbody>

        </Table>
      </Box>

      {/* Paginación avanzada */}
      <HStack py={4} px={6} justify="flex-end" spacing={6} bg={bgTable} flexWrap="wrap" rounded="xl">

        {/* Navegación de páginas */}
        <HStack spacing={1}>
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Previous page"
            size="sm"
            variant="ghost"
            rounded="full"
            onClick={() => goToPage(Math.max(1, page - 1))}
            isDisabled={page === 1}
          />
          {getPages().map((p, idx) =>
            typeof p === "number" ? (
              <Button
                key={p}
                size="sm"
                variant={p === page ? "solid" : "ghost"}
                colorScheme={p === page ? "orange" : "gray"}
                onClick={() => goToPage(p)}
                fontWeight={p === page ? "bold" : "normal"}
                minW={8}
                rounded="full"
              >
                {p}
              </Button>
            ) : (
              <Box key={p + idx} fontSize="sm" px={1} color="gray.500">
                ...
              </Box>
            )
          )}
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next page"
            size="sm"
            variant="ghost"
            rounded="full"
            onClick={() => goToPage(Math.min(totalPages, page + 1))}
            isDisabled={page === totalPages}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default ReturnTable;
