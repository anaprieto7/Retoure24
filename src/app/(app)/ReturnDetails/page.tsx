// app/returns/[id]/page.tsx (Next.js 13+ con app dir)

"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Badge,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Spacer,
  useColorModeValue,
    Icon,
} from "@chakra-ui/react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { FiHome, FiList } from "react-icons/fi";
import ReturnDetailHeader from "@/components/ReturnDetails/ReturnDetailHeader";
import ReturnStatusStepper from "@/components/ReturnDetails/ReturnStatusStepper";
import ReturnProductsList from "@/components/ReturnDetails/ReturnProductsList";
import ReturnTimeline from "@/components/ReturnDetails/ReturnTimeline";
import ReturnCustomerInfo from "@/components/ReturnDetails/ReturnCustomerInfo";
import ReturnSummaryCard from "@/components/ReturnDetails/ReturnSummaryCard";
import ReturnActions from "@/components/ReturnDetails/ReturnActions";

export default function ReturnDetailPage() {
  // Simulación de datos
  const returnId = "12345";
  const returnStatus = "Pending";
  const returnDate = "2025-06-06";

  // Const of produucts (puedes reemplazarlo con tus datos reales)
  const products = [
  {
   id: "1",
    name: "Samsung Galaxy S21",
    sku: "SGS21-128BL",
    quantity: 1,
    reason: "No funciona el micrófono",
    status: "Pending",
    imageUrl: "https://dummyimage.com/64x64/ccc/fff&text=SG",
    comments: [
      { id: "c1", user: "Ana Prieto", date: "06/06/2025", message: "Cliente reporta que no enciende el micrófono." },
      { id: "c2", user: "Kalle Junge", date: "07/06/2025", message: "Solicité foto del daño para el cliente." },
    ],
    history: [
      { id: "h1", date: "06/06/2025", status: "Solicitada" },
      { id: "h2", date: "07/06/2025", status: "En tránsito" },
      { id: "h3", date: "08/06/2025", status: "Recibida", note: "Inspección en almacén" },
    ]
  },
  {
    id: "2",
    name: "Xiaomi Redmi Note 10",
    sku: "REDMI10-64GB",
    quantity: 2,
    reason: "No era el modelo correcto",
    status: "Aprobado",
    imageUrl: "https://dummyimage.com/64x64/aaa/fff&text=XR",
  },
];

const event= [
{ id: "1", date: "09/06/2025", status: "Resuelta", note: "Reembolso emitido" },
  { id: "2", date: "08/06/2025", status: "Recibida", note: "Producto revisado" },
  { id: "3", date: "07/06/2025", status: "En tránsito" },
  { id: "4", date: "06/06/2025", status: "Solicitada" },
];

  // Colores de estatus (puedes mapearlos a tu theme)
  const statusColor = {
    Pending: "orange",
    Recibida: "blue",
    Reembolsada: "green",
    Rechazada: "red",
  }[returnStatus] || "gray";

  // Índice del stepper según el estado
  // Puedes ajustar los estados según tu lógica de negocio
  // o unificar "Reembolsada" y "Resuelta" si es necesario
  // Aquí se asume que "Resuelta" es un estado final similar a "Reembolsada"
const stepIndex = {
  Pending: 0,
  "En tránsito": 1,
  Recibida: 2,
  Reembolsada: 3,
  Resuelta: 3, // puedes unificar o personalizar
}[returnStatus] ?? 0;

// Información del cliente (puedes reemplazarlo con tus datos reales)
// Aquí puedes usar un hook o contexto para obtener el cliente real
// o simularlo como en este ejemplo


const client = {
  name: "Ana Prieto",
  email: "ana@email.com",
  phone: "+49 123 456 789",
  address: "Musterweg 1, 24103 Kiel, Alemania",
  avatarUrl: "https://randomuser.me/api/portraits/women/43.jpg",
  customerId: "CLNT-2025-001",
};

  return (
    <Box px={{ base: 2, md: 8 }} py={6} maxW="1200px" mx="auto">
      {/* Breadcrumb */}
      <BreadcrumbNav
              items={[
                 { label: "Dashboard", href: "/dashboard", icon: FiHome },
                { label: "Retouren Liste", href: "/returnList", icon: FiList },
                { label: `Devolución #${returnId}`, isCurrent: true },
              ]}
     />
      {/* Header */}
      <ReturnDetailHeader
        returnId={returnId}
        status={returnStatus as any} // o tipa correctamente
        date={returnDate}
      />
      <Divider mb={6} />

      {/* Main content */}
      <Grid
        templateColumns={{ base: "1fr", md: "2.3fr 1fr" }}
        gap={8}
        alignItems="flex-start"
      >
        {/* Columna izquierda */}
        <GridItem>
          <VStack align="stretch" spacing={5}>
            {/* Stepper/status de la devolución */}
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              rounded="xl"
              boxShadow="sm"
              minH={24}
            >
            <ReturnStatusStepper currentStep={stepIndex} />
            </Box>
            {/* Lista de productos */}
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              rounded="xl"
              boxShadow="sm"
              minH={40}
            >
                <ReturnProductsList products={products} />
            </Box>
            {/* Timeline de eventos */}
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              rounded="xl"
              boxShadow="sm"
              minH={24}
            >
              <ReturnTimeline events={event} />
            </Box>
          </VStack>
        </GridItem>

        {/* Columna derecha (aside) */}
        <GridItem>
          <VStack align="stretch" spacing={5}>
            {/* Info cliente */}
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              rounded="xl"
              boxShadow="sm"
              minH={24}
            >
              <ReturnCustomerInfo {...client} />
            </Box>
            {/* Resumen */}
            <Box
              bg={useColorModeValue("white", "gray.700")}
              p={5}
              rounded="xl"
              boxShadow="sm"
              minH={24}
            >
              <ReturnSummaryCard
                productsCount={2}
                subtotal={500}
                deductions={20}
                total={480}
                currency="€"
                refundStatus="Pending"
                />
            </Box>
            {/* Acciones */}
            <Box
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              rounded="xl"
              boxShadow="sm"
              minH={24}
            >
              <ReturnActions
                initialStatus="Pending"
                onApprove={() => { /* tu lógica */ }}
                onReject={() => { /* tu lógica */ }}
                onDownloadLabel={() => { /* tu lógica */ }}
                />

            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
