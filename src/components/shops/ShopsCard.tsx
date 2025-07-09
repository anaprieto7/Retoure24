"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Avatar,
  VStack,
  HStack,
  Heading
} from "@chakra-ui/react";

interface Props {
  shop: {
    id: string;
    name: string;
    logo?: string;
  };
  warehouseName?: string;
  onConnect?: () => void;
}

export default function ShopsCard({ shop, onConnect }: Props) {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "gray.300");
  const buttonbgColor = useColorModeValue("blue.500","blue.800")
  const buttonColor = useColorModeValue("white","blue.400")


  return (
    <Box  p={5}
      rounded="xl"
      shadow="sm"
      bg={bg}
      >
      <VStack spacing={3} align="start">
        <HStack spacing={3}>
          <Avatar name={shop.name} src={shop.logo}  />
          <Box>
            <Heading fontSize="lg" color={color}>
              {shop.name}
            </Heading>
            <Text fontSize="sm" color={color}>
              ID: {shop.id}
            </Text>
          </Box>
        </HStack>
        <Button size="sm" bg={buttonbgColor} color={buttonColor} onClick={onConnect}>
          Details ansehen
        </Button>
      </VStack>
    </Box>
  );
}
