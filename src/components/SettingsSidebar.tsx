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
import { FiUser, FiMapPin, FiTruck, FiMail, FiSettings, FiLayout, FiShoppingBag } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useUser } from '@/context/UserContext';

export default function SettingsSidebar() {
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

  const { user } = useUser();

  if (!user) return null;

  const restrictedRoles = ['MerchantUser', 'Viewer'];

  const showAdvancedSections = !restrictedRoles.includes(user.role || '');

  const navItems = [
    { labelKey: 'setting.account', icon: FiUser, path: 'account' },
    ...(showAdvancedSections
      ? [
          { labelKey: 'Shops', icon: FiShoppingBag, path: 'shops' },
          { labelKey: 'setting.addresses', icon: FiMapPin, path: 'addresses' },
          { labelKey: 'setting.shipping', icon: FiTruck, path: 'shipping' },
          { labelKey: 'setting.email_tracking', icon: FiMail, path: 'email-tracking' },
          { labelKey: 'Landing Page', icon: FiLayout, path: 'landingpage' },
        ]
      : []),
  ];

  const renderSidebarContent = () => (
    <VStack align="stretch" spacing={1}>
      {navItems.map((item) => {
        const isActive = pathname.includes(item.path);
        return (
          <Button
            key={item.path}
            onClick={() => {
              router.push(`/setup/${item.path}`);
              onClose();
            }}
            leftIcon={<Icon as={item.icon} boxSize={4} />}
            variant="ghost"
            justifyContent="flex-start"
            size="md"
            fontWeight="medium"
            fontSize="sm"
            color={isActive ? textColor : inactiveColor}
            bg={isActive ? bgActive : 'transparent'}
            _hover={{ bg: hoverBg }}
            _active={{ bg: hoverBg }}
            _focus={{ boxShadow: 'outline' }}
            borderLeft={isActive ? '3px solid' : '3px solid transparent'}
            borderColor={isActive ? borderColor : 'transparent'}
            borderRadius="md"
            paddingY={2}
            paddingX={4}
            transition="all 0.2s ease"
            aria-current={isActive ? 'page' : undefined}
            fontWeight={isActive ? 'semibold' : 'normal'}
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
          icon={<FiSettings />}
          aria-label={t('setting.open_sidebar')}
          onClick={onOpen}
          colorScheme="orange"
          size="md"
          variant="ghost"
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>{t('setting.sidebar_title')}</DrawerHeader>
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
