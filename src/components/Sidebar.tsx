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
} from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [isOpen, setIsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(
  pathname?.startsWith('/einstellungen') // se abre si ya estás en esa ruta
)

  const sidebarContent = (
    <VStack align="start" spacing={4}>
      <SidebarItem icon={FiHome} label="Dashboard" href="/dashboard" active={pathname === '/dashboard'} onClick={() => setIsOpen(false)}/>
      <SidebarItem icon={FiList} label="Retoure Liste" href="/retoure-liste" active={pathname === '/retoure-liste'}  onClick={() => setIsOpen(false)} />

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
    active={pathname?.startsWith('/einstellungen')}
  />

  {isSettingsOpen && (
    <VStack align="start" pl={6} mt={2} spacing={2}>
      <SidebarItem icon={FiUser} label="Konto" href="/einstellungen/konto" small active={pathname === '/einstellungen/konto'} />
      <SidebarItem icon={FiMapPin} label="Adressen" href="/einstellungen/adressen" small active={pathname === '/einstellungen/adressen'} />
      <SidebarItem icon={FiTruck} label="Versanddienstleister" href="/einstellungen/versanddienstleister" small active={pathname === '/einstellungen/versanddienstleister'} />
      <SidebarItem icon={FiMail} label="Email Tracking" href="/einstellungen/email-tracking" small active={pathname === '/einstellungen/email-tracking'} />
    </VStack>
  )}
</Box>


      <Box flex="1" />

      <Divider borderColor="gray.600" />

      <SidebarItem icon={FiHelpCircle} label="Hilfe" href="/hilfe" active={pathname === '/hilfe'}  onClick={() => setIsOpen(false)} />
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
            <DrawerBody>
              {sidebarContent}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <Box
      as="aside"
      bg="gray.800"
      color="white"
      w="250px"
      minH="100vh"
      px={4}
      py={6}
      position="sticky"
      top={0}
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
})
 {
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
  bg={active ? 'gray.700' : 'transparent'}
  color={active ? 'white' : 'gray.300'}
  px={3}
  py={2}
  borderRadius="md"
  _hover={{ bg: 'gray.600', color: 'white' }}
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
// Compare this snippet from src/app/dashboard/page.tsx: