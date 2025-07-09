"use client";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Avatar,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";

interface LandingCardProps {
  shopId: string;
  shopName: string;
  logoUrl?: string;
  isConfigured?: boolean;
  onConfigure: (shopId: string) => void;
}

export default function LandingCard({
  shopId,
  shopName,
  logoUrl,
  isConfigured = false,
  onConfigure,
}: LandingCardProps) {
  const bg = useColorModeValue("white", "gray.800");
  const color= useColorModeValue("gray.700", "gray.300");
  const buttonbgColor = useColorModeValue("blue.500","blue.800")
  const buttonColor = useColorModeValue("white","blue.400")

  return (
    <Box
      p={5}
      rounded="xl"
      shadow="sm"
      bg={bg}
      w="100%"
      maxW="sm"
    >
      <VStack spacing={3} align="start">
        <HStack spacing={3}>
          <Avatar name={shopName} src={logoUrl} />
          <Box>
            <Heading fontSize="lg" color={color}>{shopName} </Heading>
            <Text fontSize="sm" color={color}>
              ID: {shopId}
            </Text>
          </Box>
        </HStack>
        <Badge
          colorScheme={isConfigured ? "green" : "orange"}
          variant="subtle"
        >
          {isConfigured ? "Eingestelt" : "Fehlt Eingestelt"}
        </Badge>

        <Button
          leftIcon={<FiSettings />}
          size="sm"
          bg={buttonbgColor}
          color={buttonColor}
          variant="solid"
          onClick={() => onConfigure(shopId)}
        >
          einstellen
        </Button>
      </VStack>
    </Box>
  );
}
