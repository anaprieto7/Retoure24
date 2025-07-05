
'use client';

import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import HelpSidebar from '../HelpSidebar';
import EmailHelp from '../sections/EmailHelp';
import HelpContactFooter from '../HelpContactFooter';

export default function EmailHelpView() {
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
          Email Verfolgung – Help
        </Heading>

        <Box
          borderLeft="4px solid"
          borderColor={accentBorder}
          pl={4}
          mb={8}
        >
           <Text fontSize="sm" color={textColor} mt={2}> In diesem Abschnitt kannst du den automatischen Versand von E-Mails konfigurieren, um deine Kunden über den Status ihrer Rücksendungen zu informieren. Dies umfasst die Aktivierung des Versands, die Personalisierung des Inhalts sowie das Hinzufügen der visuellen Identität deiner Marke. </Text>
        </Box>
        <EmailHelp />
        <HelpContactFooter />
      </Box>
    </Flex>
  );
} 
