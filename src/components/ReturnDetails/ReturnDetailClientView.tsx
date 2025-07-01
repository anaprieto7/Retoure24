"use client";
import {
  Box,
  Grid,
  GridItem,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiHome, FiList } from "react-icons/fi";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ReturnDetailHeader from "@/components/ReturnDetails/ReturnDetailHeader";
import ReturnStatusStepper from "@/components/ReturnDetails/ReturnStatusStepper";
import ReturnProductsList from "@/components/ReturnDetails/ReturnProductsList";
import ReturnTimeline from "@/components/ReturnDetails/ReturnTimeline";
import ReturnCustomerInfo from "@/components/ReturnDetails/ReturnCustomerInfo";
import ReturnSummaryCard from "@/components/ReturnDetails/ReturnSummaryCard";
import ReturnActions from "@/components/ReturnDetails/ReturnActions";
import { useTranslation } from "react-i18next";
import returnsMock from "@/data/returnsMock";
import { useState } from "react";

// Este componente es la vista principal del detalle de una devolución para el cliente.
// Muestra el estado actual, productos, timeline de eventos y acciones disponibles.
// Utiliza Chakra UI para el diseño y i18next para las traducciones.

export default function ReturnDetailClientView({ returnData }: { returnData: any }) {
  if (!returnData) return <div>Devolución no encontrada</div>;
 
  const [currentStatus, setCurrentStatus] = useState(returnData.status);
  const [note, setNote] = useState<string | undefined>(undefined);
  const { i18n } = useTranslation();
  

  const stepIndex = {
    Pending: 0,
    "Unterwegs": 1,
    Erhalten: 2,
    Abgeschlossen: 3,
    Aprobado: 2,
    "Angefragt": 0,
  }[returnData.status] ?? 0;

  return (
    <Box px={{ base: 2, md: 8 }} py={6} maxW="1200px" mx="auto">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/dashboard", icon: FiHome },
          { label: "Retouren Liste", href: "/returnList", icon: FiList },
          { label: `Rückgabe #${returnData.id}`, isCurrent: true },
        ]}
      />
      <ReturnDetailHeader
        returnId={returnData.id}
        status={returnData.status}
        date={returnData.date}
      />
      <Divider mb={6} />
      <Grid templateColumns={{ base: "1fr", md: "2.3fr 1fr" }} gap={8}>
        <GridItem>
          <VStack align="stretch" spacing={5}>
            {/* Línea superior */}
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnStatusStepper status={currentStatus} />
            </Box>
            
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnProductsList products={returnData.products} />
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnTimeline
                events={returnData.events || []}
                currentStatus={currentStatus}
                currentNote={note}
              />

            </Box>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align="stretch" spacing={5}>
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
             <ReturnActions
              initialStatus={currentStatus}
              onApprove={() => setCurrentStatus("Approved")}
              onReject={() => setCurrentStatus("Rejected")}
              onDownloadLabel={() => {}}
              onStatusChange={(newStatus, userNote) => {
                setCurrentStatus(newStatus);
                setNote(userNote);
              }}
            />
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnCustomerInfo key={i18n.language} {...returnData.client} />
            </Box>
            <Box bg={useColorModeValue("white", "gray.700")} p={5} rounded="xl" boxShadow="sm">
              <ReturnSummaryCard
                products={returnData.products || []}
                deductions={returnData.deductions || 0}
                currency="€"
                refundStatus={returnData.refundStatus}
              />

            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
