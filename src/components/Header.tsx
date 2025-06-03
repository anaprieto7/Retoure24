"use client";

import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
  useColorMode,
  useColorModeValue,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FiSearch, FiBell, FiInfo, FiSettings, FiSun, FiMoon } from "react-icons/fi";

export default function Header({ user = "AP", lang = "en", location = "Kiel" }) {
  const { colorMode, toggleColorMode } = useColorMode();

  // Colores adaptados a modo claro/oscuro
  const bgHeader = useColorModeValue("white", "gray.800");
  const bgSearch = useColorModeValue("gray.50", "whiteAlpha.100");
  const iconColor = useColorModeValue("gray.500", "gray.300");
  const avatarBg = useColorModeValue("blue.900", "blue.300");
  const avatarColor = useColorModeValue("white", "black");

  return (
    <Flex
  as="header"
  position="sticky"
  top="0"
  w="100%"
  px={6}
  py={4}
  bg={useColorModeValue("white", "gray.800")}
  justify="space-between"
  align="center"
  gap={4}
  zIndex={1000}
  _dark={{ bg: "rgba(36, 47, 69, 0.75)" }} // para dark mode
>

      {/* Parte izquierda: título */}
      <Box>
        <Text fontSize="sm" color="gray.500">
          Pages / Main Dashboard
        </Text>
        <Heading size="md" fontWeight="bold">
          Main Dashboard
        </Heading>
      </Box>

      {/* Parte derecha: controles */}
      <HStack spacing={4}>
        {/* Buscador */}
       <InputGroup
  bg={bgSearch}
  borderRadius="full"
  px={3}
  w="280px" // más ancho
  h="40px"  // más alto
>
  <InputLeftElement
    pointerEvents="none"
    children={<FiSearch size="16px" />} // tamaño consistente
    mt="2px" // pequeño ajuste vertical
    color={iconColor}
  />
  <Input
    variant="unstyled"
    placeholder="Search..."
    _placeholder={{ color: iconColor }}
    pl="10" // padding izquierdo extra para que el texto no se monte sobre el ícono
    fontSize="sm"
    h="100%" // altura igual al InputGroup
  />
</InputGroup>


        {/* Iconos */}
        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <IconButton
          aria-label="Info"
          icon={<FiInfo />}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <IconButton
          aria-label="Settings"
          icon={<FiSettings />}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
          color={iconColor}
        />

        {/* Avatar */}
        <Avatar
          size="sm"
          name={user}
          bg={avatarBg}
          color={avatarColor}
          fontWeight="bold"
          fontSize="xs"
        />
      </HStack>
    </Flex>
  );
}
