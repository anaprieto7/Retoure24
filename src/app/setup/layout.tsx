import { Flex, Box } from '@chakra-ui/react'
import SettingsSidebar from '@/components/SettingsSidebar'

export default function EinstellungenLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex w="100%" p={6} minH="100vh">
      <Box w="250px" pr={6}>
        <SettingsSidebar />
      </Box>
      <Box flex="1" >
        {children}
      </Box>
    </Flex>
  )
}
