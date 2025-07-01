'use client';

import { Box, Text, List, ListItem } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function AddressInfoSection() {
  const { t } = useTranslation('return');

  return (
    <Box mb={6}>
      <Text mb={3}>
        {t('address_info.intro')}
      </Text>
      <List spacing={1} pl={4}>
        <ListItem>
          <Text as="span" fontWeight="bold">{t('address_info.sender')}:</Text>{' '}
          {t('address_info.sender_desc')}
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">{t('address_info.receiver')}:</Text>{' '}
          {t('address_info.receiver_desc')}
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">{t('address_info.notification')}:</Text>{' '}
          {t('address_info.notification_desc')}
        </ListItem>
      </List>
    </Box>
  );
}
