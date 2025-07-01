'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';

interface BreadcrumbNavProps {
  items: { labelKey: string; href?: string; icon?: IconType }[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const { t } = useTranslation('return');

  const linkColor = useColorModeValue('orange.600', 'orange.300');
  const linkHover = useColorModeValue('orange.800', 'orange.400');
  const lastColor = useColorModeValue('gray.600', 'gray.400');
  const separatorColor = useColorModeValue('gray.400', 'gray.600');
  const bgBreadcrumb = useColorModeValue('gray.50', 'gray.900');

  return (
    <Flex bg={bgBreadcrumb} borderRadius="xl" py={2} px={4} mb={3} w="fit-content">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color={separatorColor} boxSize={5} />}
        fontSize="sm"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const Icon = item.icon;
          const label = t(`setting.${item.labelKey}`); // usa return.bread

          return (
            <BreadcrumbItem key={idx} isCurrentPage={isLast}>
              {item.href && !isLast ? (
                <BreadcrumbLink
                  as={NextLink}
                  href={item.href}
                  color={linkColor}
                  _hover={{ textDecoration: 'underline', color: linkHover }}
                  fontWeight="medium"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {Icon && <Icon size={16} style={{ marginRight: 3 }} />}
                  {label}
                </BreadcrumbLink>
              ) : (
                <Flex align="center" gap={1} color={lastColor} fontWeight="semibold">
                  {Icon && <Icon size={16} style={{ marginRight: 3 }} />}
                  <Text>{label}</Text>
                </Flex>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Flex>
  );
}

// This component renders a breadcrumb navigation bar using Chakra UI.
// It accepts an array of items, each with a label, optional href, and optional icon.
// The breadcrumb items are displayed with icons if provided, and the last item is styled differently to indicate it's the current page.
// The component uses Chakra UI's Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, and Text components for layout and styling.
//         <InputLeftElement pointerEvents="none">
//           <FiSearch color={iconColor} />
//         </InputLeftElement>