'use client'

import { Box, Heading, SimpleGrid, Stat, StatLabel, StatHelpText, Container } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>Dashboard - Retoure24</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <StatCard label="Total de devoluciones" value="1.284" />
        <StatCard label="En proceso" value="314" />
        <StatCard label="Completadas" value="970" />
      </SimpleGrid>
    </Container>
  )
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatHelpText fontSize="2xl" fontWeight="bold">{value}</StatHelpText>
      </Stat>
    </Box>
  )
}
