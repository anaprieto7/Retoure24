"use client";

import { Box, Heading, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ConnectedShopsList from "./ConnectedShopsList";
import { useUser } from "@/context/UserContext";
import { mockShops } from "@/data/mockShops";

export default function ShopsView() {
  const { user } = useUser();
  const color= useColorModeValue("gray.700", "gray.300");

  const breadcrumbs = [
    { labelKey: 'setting', href: '/setup/shops', icon: FiShoppingBag },
    { labelKey: 'Shops' }
  ];

  if (!user) return null;

  // Lógica de visibilidad de tiendas según el rol
  const accessibleShops = mockShops.filter((shop) => {
    if (user.role === "SuperAdmin") return true;
    if (user.role === "WarehouseAdmin") {
      return user.warehouseIds?.includes(shop.warehouseId);
    }
    return user.shopIds?.includes(shop.id);
  });

  return (
    <Box maxW="1200px" mx="auto" px={4} py={6}>
        <BreadcrumbNav items={breadcrumbs} />
        <Heading color={color} size="lg">
          {accessibleShops.length > 0 ? "Shops Verbindungen" : "Keine Shops verbunden"}
        </Heading>
        <Text mb={6} mt={2} color={color}>
               Legen Sie fest, wie die Retourenseite für jeden angeschlossenen Shop aussehen soll.
              </Text>
        {accessibleShops.length > 0 && (
          <ConnectedShopsList shops={accessibleShops} />
        )}
    </Box>
  );
}
