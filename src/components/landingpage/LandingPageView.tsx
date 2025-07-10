"use client";

import { useState } from "react";
import { Box, Heading, Text, useToast, useColorModeValue, } from "@chakra-ui/react";
import { useUser } from "@/context/UserContext";
import { mockShops } from "@/data/mockShops";
import { Shop } from "@/types/shop";
import LandingPageList from "./LandingPageList";
import LandingConfigModal from "./LandingConfigModal";
import { FiLayout } from "react-icons/fi";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default function LandingPageView() {
  const toast = useToast();
  const { user } = useUser();

  const [selectedShopId, setSelectedShopId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedShop = mockShops.find((shop) => shop.id === selectedShopId);

  // Simulación de configuraciones por tienda
  const [configurations, setConfigurations] = useState<{ [shopId: string]: any }>({});

  // 🧠 Filtrar tiendas según el usuario
  const filteredShops: Shop[] = mockShops.filter((shop) => {
    if (!user) return false;

    if (user.role === "SuperAdmin") return true;

    if (user.role === "WarehouseAdmin") {
      return user.warehouseIds?.includes(shop.warehouseId);
    }

    return user.shopIds?.includes(shop.id);
  });

  const handleOpenModal = (shopId: string) => {
    setSelectedShopId(shopId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedShopId(null);
    setIsModalOpen(false);
  };

  const handleSaveConfig = (updatedConfig: any) => {
    setConfigurations((prev) => ({
      ...prev,
      [updatedConfig.shopId]: updatedConfig,
    }));
    toast({
      title: "Configuración guardada",
      status: "success",
      isClosable: true,
      duration: 2000,
    });
  };

  const color= useColorModeValue("gray.700", "gray.300");
    const breadcrumbs = [
    { labelKey: 'setting', href: '/setup/landingpage', icon: FiLayout },
    { labelKey: 'Landing Page' }
  ];

  return (
    <Box maxW="1200px" mx="auto" px={4} py={6}>
      <BreadcrumbNav items={breadcrumbs} />
      <Heading size="lg" mb={2} color={color}>Landing Page Configuration</Heading>
      <Text mb={6} color={color}>
       Legen Sie fest, wie die Retourenseite für jeden angeschlossenen Shop aussehen soll.
      </Text>

      <LandingPageList
        shops={filteredShops}
        configurations={configurations}
        onConfigure={handleOpenModal}
      />

      {selectedShop && (
        <LandingConfigModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          shop={{
            ...selectedShop,
            config: configurations[selectedShop.id] || {},
          }}
          onSave={handleSaveConfig}
        />
      )}
    </Box>
  );
}
