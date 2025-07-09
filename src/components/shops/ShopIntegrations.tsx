"use client";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import IntegrationCard from "./ShopsCard";

const shopPlatforms = [
  { name: "Shopify", description: "Conecta tu tienda Shopify", logo: "/logos/shopify.png" },
  { name: "WooCommerce", description: "Integración con WooCommerce", logo: "/logos/woocommerce.png" },
  { name: "Shopware", description: "Integra tu tienda Shopware", logo: "/logos/shopware.png" },
];

export default function ShopIntegrations() {
  return (
    <Box>
      <Heading size="md" mb={3}></Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        Verbinden Sie Ihre Online-Shops mit Retoure24, um Bestellungen und Retouren zu synchronisieren.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {shopPlatforms.map((platform) => (
          <IntegrationCard
            key={platform.name}
            name={platform.name}
            description={platform.description}
            logo={platform.logo}
            onConnect={() => alert(`Verbindt ${platform.name}`)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
