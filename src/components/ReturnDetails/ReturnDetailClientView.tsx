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

export default function ReturnDetailClientView({ returnData }: { returnData: any }) {
  if (!returnData) return <div>Devolución no encontrada</div>;
 
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
              <ReturnStatusStepper status={returnData.status as any} />
            </Box>
            
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnProductsList products={returnData.products} />
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnTimeline events={returnData.events || []} />
            </Box>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align="stretch" spacing={5}>
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnActions
                initialStatus={returnData.status}
                onApprove={() => {}}
                onReject={() => {}}
                onDownloadLabel={() => {}}
              />
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} p={5} rounded="xl" boxShadow="sm">
              <ReturnCustomerInfo key={i18n.language} {...returnData.client} />
            </Box>
            <Box bg={useColorModeValue("white", "gray.700")} p={5} rounded="xl" boxShadow="sm">
              <ReturnSummaryCard
                productsCount={returnData.products.length}
                subtotal={returnData.subtotal}
                deductions={returnData.deductions}
                total={returnData.total}
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
