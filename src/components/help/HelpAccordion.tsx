'use client';

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useColorModeValue,
  Text,
  Icon
} from '@chakra-ui/react';
import { IconType } from 'react-icons'; 

interface HelpAccordionProps {
  title: string;
   icon?: IconType; 
  children: React.ReactNode;
}

export default function HelpAccordion({ title, children }: HelpAccordionProps) {
  const bgPanel = useColorModeValue('white', 'gray.800');
  const bgButton = useColorModeValue('white', 'gray.700');
  const titleColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <AccordionItem
      borderTop={"none"}
      borderBottom={"none"}
      overflow="hidden"
      mb={4}
      bg={bgButton}
      rounded={"xl"}
      _hover={{
        shadow: 'sm', bg: 'bgPanel', color: 'gray.500'
      }}
      _focus={{ boxShadow: 'none' }}
      _expanded={{ bg: 'bgPanel', color: 'gray.500' }}
      transition="background-color 0.2s ease-in-out"
    >
      <h2>
        <AccordionButton
          px={5}
          py={4}
          _expanded={{ bg: "bgPanel", color: 'gray.500' }}
        >
          <Box flex="1" textAlign="left" fontWeight="semibold" fontSize="sm" color={titleColor}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel px={5} pb={5} pt={3} bg={bgPanel} >
        <Box fontSize="sm" color={titleColor}>
          {children}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
}
