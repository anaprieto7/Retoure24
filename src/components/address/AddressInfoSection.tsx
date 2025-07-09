'use client';

import { Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function AddressInfoSection() {
  const { t } = useTranslation('return');
    const color= useColorModeValue("gray.700", "gray.300");

  return (
    <Box mb={3}>
      <Text fontSize={"sm"} mb={1} color={color}>
        {t('address_info.intro')}
      </Text>
      <List spacing={1} pl={4}>
        <ListItem fontSize={"sm"} >
          <Text fontSize={"sm"} as="span" color={color} fontWeight="bold">{t('address_info.sender')}:</Text>{' '}
          {t('address_info.sender_desc')}
        </ListItem>
        <ListItem fontSize={"sm"}>
          <Text fontSize={"sm"} as="span" color={color} fontWeight="bold">{t('address_info.receiver')}:</Text>{' '}
          {t('address_info.receiver_desc')}
        </ListItem>
        <ListItem fontSize={"sm"}>
          <Text fontSize={"sm"} as="span" color={color} fontWeight="bold">{t('address_info.notification')}:</Text>{' '}
          {t('address_info.notification_desc')}
        </ListItem>
      </List>
    </Box>
  );
}
