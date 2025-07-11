'use client'

import {
  Box,
  VStack,
  Text,
  Link,
  Icon,
  Divider,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from '@chakra-ui/react'
import {
  FiHome,
  FiList,
  FiSettings,
  FiHelpCircle,
  FiUser,
  FiMapPin,
  FiTruck,
  FiMail,
  FiMenu,
  FiLayout,
  FiChevronRight,
  FiShoppingBag
} from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useUser } from '@/context/UserContext'

export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [isOpen, setIsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(pathname?.startsWith('/setup'))

  const { user } = useUser()

  const isRestricted = user?.role === 'MerchantUser' || user?.role === 'Viewer'

  const sidebarContent = (
    <VStack align="start" spacing={4}>
      <SidebarItem icon={FiHome} label="Dashboard" href="/dashboard" active={pathname === '/dashboard'} onClick={() => setIsOpen(false)} />
      <SidebarItem icon={FiList} label="Retouren Liste" href="/returnList" active={pathname === '/returnList'} onClick={() => setIsOpen(false)} />

      {/* EINSTELLUNGEN */}
      <Box width="100%">
        <SidebarItem
          icon={FiSettings}
          label="Einstellungen"
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          rightIcon={
            <Box
              transform={isSettingsOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
              transition="transform 0.2s ease-in-out"
            >
              <FiChevronRight />
            </Box>
          }
          active={pathname?.startsWith('/setup')}
        />

        {isSettingsOpen && (
          <VStack align="start" pl={6} mt={2} spacing={2}>
            <SidebarItem icon={FiUser} label="Account" href="/setup/account" small active={pathname === '/setup/account'} />
            {!isRestricted && (
              <>
                <SidebarItem icon={FiShoppingBag} label="Shops" href="/setup/shops" small active={pathname === '/setup/shops'} />
                <SidebarItem icon={FiMapPin} label="Addresses" href="/setup/addresses" small active={pathname === '/setup/addresses'} />
                <SidebarItem icon={FiTruck} label="Shipping Providers" href="/setup/shipping" small active={pathname === '/setup/shipping'} />
                <SidebarItem icon={FiMail} label="Email Tracking" href="/setup/email-tracking" small active={pathname === '/setup/email-tracking'} />
                <SidebarItem icon={FiLayout} label="Landing Page" href="/setup/landingpage" small active={pathname === '/setup/landingpage'} />
              </>
            )}
          </VStack>
        )}
      </Box>

      <Box flex="1" />
      <Divider borderColor="gray.600" />

      <SidebarItem icon={FiHelpCircle} label="HelpCenter" href="/help/account" active={pathname?.startsWith('/help')} onClick={() => setIsOpen(false)} />
    </VStack>
  )

  if (isMobile) {
    return (
      <>
        <IconButton
          icon={<FiMenu />}
          aria-label="Open menu"
          m={4}
          onClick={() => setIsOpen(true)}
        />
        <Drawer isOpen={isOpen} placement="left" onClose={() => setIsOpen(false)}>
          <DrawerOverlay />
          <DrawerContent bg="gray.800" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Menü</DrawerHeader>
            <DrawerBody>{sidebarContent}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <Box
      as="aside"
      zIndex={1000}
      bg="blue.950"
      color="white"
      w="250px"
      h="100vh"
      px={4}
      py={6}
      position="fixed"
      top={0}
      left={0}
      overflowY="auto"
      sx={{
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray.600',
          borderRadius: 'full',
        },
      }}
      _hover={{ overflowY: 'auto' }}
    >
      <NextLink href="/dashboard">
        <Image
          src="/logo-retoure.png"
          alt="Retoure24 Logo"
          width={140}
          height={40}
          style={{ marginBottom: '1rem', cursor: 'pointer' }}
        />
      </NextLink>

      {sidebarContent}
    </Box>
  )
}

function SidebarItem({
  icon,
  label,
  href = '#',
  small = false,
  active = false,
  onClick,
  rightIcon,
}: {
  icon: any
  label: string
  href?: string
  small?: boolean
  active?: boolean
  onClick?: () => void
  rightIcon?: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      fontSize={small ? 'sm' : 'md'}
      fontWeight={active ? 'semibold' : 'normal'}
      bg={active ? 'blue.900' : 'transparent'}
      color={active ? 'white' : 'gray.300'}
      px={3}
      py={2}
      borderRadius="md"
      _hover={{ bg: 'blue.800', color: 'white' }}
      borderLeft={active ? '4px solid' : 'none'}
      borderColor={active ? 'orange.400' : 'transparent'}
    >
      <Box display="flex" alignItems="center">
        <Icon as={icon} mr={3} />
        <Text>{label}</Text>
      </Box>
      {rightIcon && <Box ml="auto">{rightIcon}</Box>}
    </Link>
  )
}
