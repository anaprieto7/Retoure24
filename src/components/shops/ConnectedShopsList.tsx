"use client";

import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { Box, Heading, SimpleGrid, Text, Icon, Flex } from "@chakra-ui/react";
import ShopsCard from "./ShopsCard";
import AddShopModal from "./AddShopModal";
import { mockShops } from "@/data/mockShops";
import { mockWarehouses } from "@/data/mockWarehouses";
import { Shop } from "@/types/shop";
import { FiPlus } from "react-icons/fi";

export default function ConnectedShopList() {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shops, setShops] = useState(mockShops); // estado local para nuevas tiendas

  if (!user) return null;

  // Filtrar tiendas según el rol del usuario
  let accessibleShops: Shop[] = [];

  if (user.role === "SuperAdmin") {
    accessibleShops = shops;
  } else if (user.role === "WarehouseAdmin") {
    accessibleShops = shops.filter((shop) =>
      user.warehouseIds?.includes(shop.warehouseId)
    );
  } else if (["MerchantAdmin", "MerchantUser", "Viewer"].includes(user.role || "")) {
    accessibleShops = shops.filter((shop) =>
      user.shopIds?.includes(shop.id)
    );
  }

  // Función para añadir una nueva tienda
  const handleSaveShop = (newShop: Shop) => {
    setShops((prev) => [...prev, newShop]);
  };

  return (
    <Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {accessibleShops.map((shop) => {
            const warehouse = mockWarehouses.find((w) => w.id === shop.warehouseId);
            return (
              <ShopsCard
                key={shop.id}
                shop={shop}
                warehouseName={warehouse?.name || ""}
              />
            );
          })}

          {/* 🔘 Card para añadir nueva tienda */}
          <Flex
            onClick={() => setIsModalOpen(true)}
            cursor="pointer"
            direction="column"
            align="center"
            justify="center"
            p={5}
            border="2px dashed"
            borderColor="gray.300"
            borderRadius="md"
            _hover={{ bg: "gray.50" }}
          >
            <Icon as={FiPlus} boxSize={6} color="gray.500" />
            <Text mt={2} fontWeight="semibold" color="gray.600">
              Shop Hinzufügen
            </Text>
          </Flex>
        </SimpleGrid>

      {/* Modal para agregar tienda */}
      <AddShopModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveShop}
      />
    </Box>
  );
}
