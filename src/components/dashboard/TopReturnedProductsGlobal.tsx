"use client";

import {
  Box,
  Text,
  Flex,
  Badge,
  Heading,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

type ProductItem = {
  product: string;
  store: string;
  serial: string;
  returns: number;
};

type StoreOption = {
  label: string;
  value: string;
};

type Props = {
  products: ProductItem[];
  selectedStores: StoreOption[];
};

const storeColorScheme: Record<string, string> = {
  Zara: "orange",
  "H&M": "blue",
  Mango: "green",
};

export default function TopReturnedProductsGlobal({
  products,
  selectedStores,
}: Props) {
  const bg = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.700", "gray.100");

  const filtered =
    selectedStores.length > 0
      ? products.filter((item) =>
          selectedStores.some((s) => s.label === item.store)
        )
      : products;

  const top10 = filtered
    .sort((a, b) => b.returns - a.returns)
    .slice(0, 10);

  return (
    <Box bg={bg} p={6} rounded="md" shadow="sm">
      <Text fontWeight="bold" fontSize="lg">
                Retouren nach Produkten
              </Text>

      <Stack spacing={2}>
        {top10.map((item, index) => (
          <Flex
            key={`${item.product}-${index}`}
            justify="space-between"
            align="center"
            p={1}
          >
            <Box>
              <Text fontWeight="normal" fontSize="sm">{item.product}</Text>
              <Stack direction="row" spacing={1} mt={1}>
                <Badge
                  variant="solid"
                  colorScheme={storeColorScheme[item.store] || "gray"}
                >
                  {item.store}
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="gray"
                  fontSize="xs"
                  px={2}
                >
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
