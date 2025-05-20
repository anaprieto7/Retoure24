"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";

const user = {
  name: "John Doe",
  role: "Admin",
  avatarUrl: "/avatar.jpg", // o usa "https://i.pravatar.cc/150?img=3"
  status: "active", // "hold" o "inactive"
};

const statusColor = {
  active: "green.400",
  hold: "yellow.400",
  inactive: "gray.400",
};

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      bg={useColorModeValue("white", "gray.800")}
      height="64px"
      px={6}
      boxShadow="sm"
      align="center"
      justify="space-between"
      position="sticky"
      top={0}
      zIndex={10}
    >
      {/* Left side: Empty or Logo */}
      <Box />

      {/* Right side */}
      <HStack spacing={4}>
        {/* Language switcher */}
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FaGlobe />}
            variant="ghost"
            aria-label="Idioma"
            size="sm"
          />
          <MenuList>
            <MenuItem>Deutsch</MenuItem>
            <MenuItem>English</MenuItem>
          </MenuList>
        </Menu>

        {/* Dark mode toggle */}
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant="ghost"
          aria-label="Toggle Color Mode"
          size="sm"
          onClick={toggleColorMode}
        />

        {/* User Menu */}
        <Menu>
          <MenuButton>
            <HStack spacing={3}>
              <Box position="relative">
                <Avatar size="sm" name={user.name} src={user.avatarUrl} />
                <Box
                  position="absolute"
                  bottom={0}
                  right={0}
                  boxSize="10px"
                  bg={statusColor[user.status]}
                  border="2px solid white"
                  borderRadius="full"
                />
              </Box>
              <Box textAlign="right" display={{ base: "none", md: "block" }}>
                <Text fontSize="sm" fontWeight="semibold">
                  {user.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {user.role}
                </Text>
              </Box>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
}
