'use client';

import {
  VStack,
  Button,
  Icon,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { FiUser, FiMapPin, FiTruck, FiMail, FiHelpCircle, FiLayout } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const navItems = [
  { labelKey: 'help.konto', icon: FiUser, path: 'account' },
  { labelKey: 'help.addresses', icon: FiMapPin, path: 'address' },
  { labelKey: 'help.dispatchers', icon: FiTruck, path: 'shipping' },
  { labelKey: 'help.email', icon: FiMail, path: 'email' },
  { labelKey: 'help.returns', icon: FiLayout, path: 'returns' },
];

export default function HelpSidebar() {
  const { t } = useTranslation('return');
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const bgActive = useColorModeValue('gray.100', 'gray.800');
  const inactiveColor = useColorModeValue('gray.500', 'gray.400');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('orange.400', 'orange.300');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const renderSidebarContent = () => (
    <VStack align="stretch" spacing={1}>
      {navItems.map((item) => {
        const isActive = pathname.includes(item.path);
        return (
          <Button
            key={item.path}
            onClick={() => {
              router.push(`/help/${item.path}`);
              onClose();
            }}
            leftIcon={<Icon as={item.icon} boxSize={4} />}
            variant="ghost"
            justifyContent="flex-start"
            size="md"
            fontWeight={isActive ? 'semibold' : 'normal'}
            fontSize="sm"
            color={isActive ? textColor : inactiveColor}
            bg={isActive ? bgActive : 'transparent'}
            _hover={{ bg: hoverBg }}
            _active={{ bg: hoverBg }}
            _focus={{ boxShadow: 'outline' }}
            borderLeft={isActive ? '3px solid' : '3px solid transparent'}
            borderColor={isActive ? borderColor : 'transparent'}
            borderRadius="md"
            py={2}
            px={4}
            transition="all 0.2s ease"
            aria-current={isActive ? 'page' : undefined}
          >
            {t(item.labelKey)}
          </Button>
        );
      })}
    </VStack>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          icon={<FiHelpCircle />}
          aria-label={t('help.open_sidebar')}
          onClick={onOpen}
          colorScheme="orange"
          size="md"
          variant="ghost"
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>{t('help.sidebar_title')}</DrawerHeader>
            <DrawerBody>{renderSidebarContent()}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      as="nav"
      position="sticky"
      top="100px"
      maxW="220px"
      minW="200px"
      alignSelf="flex-start"
    >
      {renderSidebarContent()}
    </Box>
  );
}
