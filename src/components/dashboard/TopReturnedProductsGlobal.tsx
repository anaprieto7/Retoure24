"use client";

import {
  Box,
  Text,
  Flex,
  Badge,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import returnsMock from "@/data/returnsMock";
import { mockShops } from "@/data/mockShops";

type StoreOption = {
  label: string;
  value: string;
};

type ProductAggregated = {
  product: string;
  store: string;
  serial: string;
  returns: number;
};

type Props = {
  selectedStores: StoreOption[];
};

const storeColorScheme: Record<string, string> = {
  Zara: "orange",
  "H&M": "blue",
  Mango: "green",
  "Shopify Store": "purple",
};

export default function TopReturnedProductsGlobal({
  selectedStores,
}: Props) {
  const bg = useColorModeValue("white", "gray.800");

  const top10Products: ProductAggregated[] = useMemo(() => {
    const productMap: Record<string, ProductAggregated> = {};

    returnsMock.forEach((ret) => {
      const shop = mockShops.find((s) => s.id === ret.shopId);
      const storeName = shop?.name || ret.shopId;

      // Si hay filtros de tiendas, y esta no está incluida, se salta
      if (
        selectedStores.length > 0 &&
        !selectedStores.some((s) => s.value === ret.shopId)
      )
        return;

      ret.products?.forEach((prod) => {
        const key = `${prod.name}_${ret.shopId}_${prod.sku}`;
        if (!productMap[key]) {
          productMap[key] = {
            product: prod.name,
            store: storeName,
            serial: prod.sku,
            returns: 0,
          };
        }
        productMap[key].returns += prod.quantity || 1;
      });
    });

    return Object.values(productMap)
      .sort((a, b) => b.returns - a.returns) // 🔼 Ordena de mayor a menor
  .slice(0, 5); // ✅ Top 10
  }, [selectedStores]);

  return (
    <Box bg={bg} p={6} rounded="md" shadow="sm">
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Retouren nach Produkten
      </Text>

      <Stack spacing={2}>
        {top10Products.map((item, index) => (
          <Flex
            key={`${item.product}-${index}`}
            justify="space-between"
            align="center"
            p={1}
          >
            <Box>
              <Text fontWeight="normal" fontSize="sm">
                {item.product}
              </Text>
              <Stack direction="row" spacing={1} mt={1}>
                <Badge
                  variant="solid"
                  colorScheme={storeColorScheme[item.store] || "gray"}
                >
                  {item.store}
                </Badge>
                <Badge variant="subtle" colorScheme="gray" fontSize="xs" px={2}>
                  S.n: {item.serial}
                </Badge>
              </Stack>
            </Box>
            <Text fontWeight="semibold" color="red.500">
              {item.returns} Orders
            </Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}
