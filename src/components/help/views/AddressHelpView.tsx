
'use client';

import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import HelpSidebar from '../HelpSidebar';
import AddressHelp from '../sections/AddressHelp';
import HelpContactFooter from '../HelpContactFooter';

export default function AddressHelpView() {
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
          Address – Help
        </Heading>

        <Box
          borderLeft="4px solid"
          borderColor={accentBorder}
          pl={4}
          mb={8}
        >
           <Text fontSize="sm" color={textColor} mt={2}> In diesem Abschnitt kannst du die Adressen verwalten, die im Rücksendesystem verwendet werden. Es gibt drei Arten von Adressen:</Text>
           <Text fontSize="sm" color={textColor} mt={2}>  <strong>Absender: </strong> Die Adresse, die auf dem Versandetikett erscheint. </Text>
           <Text fontSize="sm" color={textColor} mt={2}> <strong>Empfänger: </strong> Die Adresse, an die die zurückgesendeten Pakete geschickt werden</Text>
           <Text fontSize="sm" color={textColor} mt={2}> <strong> E-Mail-Benachrichtigungen:</strong> Die Adresse, die in den an den Kunden gesendeten E-Mails erscheint.</Text>
          
        </Box>

        <AddressHelp />
        <HelpContactFooter />
      </Box>
    </Flex>
  );
} 
