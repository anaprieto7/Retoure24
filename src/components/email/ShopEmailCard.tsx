"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiMail } from "react-icons/fi";

interface Props {
  shopId: string;
  shopName: string;
}

export default function ShopEmailCard({ shopId, shopName }: Props) {
  const router = useRouter();
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("gray.800", "gray.300")

  const handleClick = () => {
    router.push(`/setup/email-tracking/${shopId}`);
  };

  return (
    <Box
      p={5}
      shadow="md"
      borderRadius="lg"
      bg={bg}
    >
      <Flex direction="column" align="start" gap={3}>
        <Heading size="sm">{shopName}</Heading>
        <Text fontSize="sm" color={color}>
          ID: {shopId}
        </Text>
        <Button
          size="sm"
          leftIcon={<FiMail />}
          colorScheme="blue"
          onClick={handleClick}
        >
          Configurar Emails
        </Button>
      </Flex>
    </Box>
  );
}
