'use client';

import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function HelpContactFooter() {
  const { t } = useTranslation('return');

  const bgCard = useColorModeValue('white', 'gray.700');
  const iconBg = useColorModeValue('orange.50', 'orange.800');
  const iconColor = useColorModeValue('orange.500', 'orange.300');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box mt={16}>
      <Heading
        as="h3"
        size="lg"
        textAlign="center"
        mb={2}
        color={useColorModeValue('gray.900', 'gray.400')}
      >
        {t('help.contact.title')}
      </Heading>
      <Text textAlign="center" fontSize="md" mb={10} color={textColor}>
        {t('help.contact.subtitle')}
      </Text>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
        gap={6}
      >
        {/* Phone card */}
        <Flex
          bg={bgCard}
          p={6}
          borderRadius="md"
          direction="column"
          align="center"
          shadow="sm"
          w={{ base: '100%', md: '300px' }}
          h={{ base: 'auto', md: '250px' } }
        >
          <Flex
            bg={iconBg}
            borderRadius="full"
            p={3}
            mb={4}
            align="center"
            justify="center"
          >
            <Icon as={FiPhone} boxSize={5} color={iconColor} />
          </Flex>
          <Text fontWeight="bold" fontSize="lg"  color={useColorModeValue('gray.900', 'gray.400')}>
            + (810) 2548 2568
          </Text>
          <Text mt={4} fontSize="sm" color={textColor}>
            {t('help.contact.phone_desc')}
          </Text>
        </Flex>

        {/* Email card */}
        <Flex
          bg={bgCard}
          p={6}
          borderRadius="md"
          direction="column"
          align="center"
          shadow="sm"
          w={{ base: '100%', md: '300px' }}
          h={{ base: 'auto', md: '250px' } }
        >
          <Flex
            bg={iconBg}
            borderRadius="full"
            p={3}
            mb={4}
            align="center"
            justify="center"
          >
            <Icon as={FiMail} boxSize={5} color={iconColor} />
          </Flex>
          <Text fontWeight="bold" fontSize="lg"  color={useColorModeValue('gray.900', 'gray.400')}>
            hello@help.com
          </Text>
          <Text mt={4} fontSize="sm" color={textColor}>
            {t('help.contact.email_desc')}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
// This component displays contact information for the help center, including a phone number and email address, with appropriate styling and translations.
// It uses Chakra UI for styling and layout, and react-icons for icons. The component is responsive, adjusting the layout based on screen size.
// The text is translated using the `useTranslation` hook from the `react-i18next` library, allowing for multilingual support.

// The `useColorModeValue` hook is used to set colors based on the current color mode (light or dark), ensuring good visibility and aesthetics in both modes.