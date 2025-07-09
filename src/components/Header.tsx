'use client';

import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  useColorMode,
  useColorModeValue,
  HStack,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
  Button,
  Spacer,
  Badge
} from '@chakra-ui/react';
import {
  FiSearch,
  FiBell,
  FiInfo,
  FiSettings,
  FiSun,
  FiMoon,
  FiLogOut,
  FiUser,
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logout, isLoading } = useUser();
  const router = useRouter();

  const bgHeader = useColorModeValue('white', 'gray.800');
  const bgSearch = useColorModeValue('gray.50', 'whiteAlpha.100');
  const iconColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const expandedBg = useColorModeValue('gray.200', 'gray.600');  

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    logout();
    router.push('/login');
  };

  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      w="100%"
      px={6}
      py={3}
      bg={bgHeader}
      boxShadow="sm"
      align="center"
      zIndex={1000}
    >
      {/* Zona izquierda: buscador */}
      <InputGroup
        bg={bgSearch}
        borderRadius="full"
        px={3}
        w="280px"
        h="40px"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch size="16px" />}
          mt="2px"
          color={iconColor}
        />
        <Input
          variant="unstyled"
          placeholder="Buscar..."
          _placeholder={{ color: iconColor }}
          pl="10"
          fontSize="sm"
          h="100%"
        />
      </InputGroup>

      <Spacer />

      {/* Acciones */}
      <HStack spacing={2}>
        <IconButton
          aria-label="Notificaciones"
          icon={<FiBell />}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <IconButton
          aria-label="Información"
          icon={<FiInfo />}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <IconButton
          aria-label="Configuraciones"
          icon={<FiSettings />}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <IconButton
          aria-label="Modo oscuro"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
          color={iconColor}
        />
        <LanguageSelector />

        {/* Usuario */}
        {user && (
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              size="md"
              rightIcon={<Avatar size="sm" name={user.name} />}
              aria-label="User menu"
              color={iconColor}
              _hover={{ bg: hoverBg }}
              _expanded={{ bg: expandedBg }}
              _focus={{ boxShadow: 'outline' }}
            >
              <Text fontSize="xs" color={iconColor}>
                {user.name}
              </Text>
              <Badge ml="1" 
              colorScheme={
                  user.role === 'SuperAdmin'
                    ? 'purple'
                    : user.role === 'MerchantAdmin'
                    ? 'green'
                    : user.role === 'MerchantUser'
                    ? 'orange'
                    : 'blue'
                } fontSize="0.6em" padding={1} rounded={'md'} >
                {user.role}
              </Badge>
            </MenuButton>
            <MenuList fontSize="sm">
              <MenuItem icon={<FiUser />}>Perfil</MenuItem>
              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
                Cerrar sesión
              </MenuItem>
            </MenuList>
          </Menu>
        )}

        {!user && !isLoading && (
          <Button size="sm" colorScheme="teal" onClick={() => router.push('/login')}>
            Iniciar sesión
          </Button>
        )}

        {isLoading && (
          <Text fontSize="sm" color={iconColor}>
            Cargando...
          </Text>
        )}
      </HStack>
    </Flex>
  );
}
