
'use client';

import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import HelpSidebar from '../HelpSidebar';
import ReturnsHelp from '../sections/ReturnsHelp';
import HelpContactFooter from '../HelpContactFooter';
export default function ReturnsHelpView() {
  const headingColor = useColorModeValue('gray.800', 'gray.300');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const accentBorder = useColorModeValue('orange.400', 'orange.700');
  const accentBg = useColorModeValue('gray.50', 'gray.800');

  return (
    <Flex gap={10} px={{ base: 6, md: 12 }} py={10}>
      <Box w="250px" display={{ base: 'none', md: 'block' }}>
        <HelpSidebar />
      </Box>

      <Box flex="1">
        <Heading size="lg" mb={8} color={headingColor}>
          Help Center – Retoure24
        </Heading>

        <Heading size="md" mb={8} color={headingColor}>
          Retouren – Help
        </Heading>

        <Box
          borderLeft="4px solid"
          borderColor={accentBorder}
          pl={4}
          mb={8}
        >
           <Text fontSize="sm" color={textColor} mt={2}> In diesem Abschnitt kannst du alle Rücksendungen deiner Kunden anzeigen, filtern und verwalten. Du erreichst diese Funktion über den Reiter <strong> „Retrouren liste“</strong> im Hauptmenü. </Text>
        </Box>
        <ReturnsHelp />
        <HelpContactFooter />
      </Box>
    </Flex>
  );
} 
