"use client";

import { useUser } from "@/context/UserContext";
import { mockShops } from "@/data/mockShops";
import { mockWarehouses } from "@/data/mockWarehouses";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiMail } from "react-icons/fi";

export default function ShopsEmailOverview() {
  const { user } = useUser();
  const router = useRouter();
  const bg = useColorModeValue("white","gray.800");
    const color= useColorModeValue("gray.700", "gray.300");
  const buttonbgColor = useColorModeValue("blue.500","blue.800");
  const buttonColor = useColorModeValue("white","blue.400");

  if (!user) return null;

  // Filtrar tiendas a las que el usuario tiene acceso
  const accessibleShops = mockShops.filter((shop) => {
    if (user.role === "SuperAdmin") return true;
    if (user.role === "WarehouseAdmin") {
      return user.warehouseIds?.includes(shop.warehouseId);
    }
    return user.shopIds?.includes(shop.id);
  });

  if (accessibleShops.length === 0) {
    return (
      <VStack align="start" p={6}>
        <Heading size="md">Email Tracking</Heading>
        <Text>No tienes tiendas asignadas.</Text>
      </VStack>
    );
  }

  return (
    <Box p={6}>
      <Heading size="lg" mb={6}>Email Tracking</Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {accessibleShops.map((shop) => {
          const warehouse = mockWarehouses.find(
            (w) => w.id === shop.warehouseId
          );

          return (
            <Box
              key={shop.id}
              p={5}
              borderRadius="md"
              shadow="sm"
              bg={bg}
            >
              <VStack align="start" spacing={3}>
                <Text fontSize="lg" fontWeight="bold">
                  {shop.name}
                </Text>
                {warehouse && (
                  <Text fontSize="sm" color="gray.500">
                    {warehouse.name}
                  </Text>
                )}
                <Button
                  leftIcon={<FiMail />}
                  bg={buttonbgColor}
                  color={buttonColor}
                  size="sm"
                  onClick={() =>
                    router.push(`/setup/email-tracking/${shop.id}`)
                  }
                >
                  Configurar emails
                </Button>
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
