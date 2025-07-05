'use client';

import { Accordion, Alert, Text, useColorModeValue } from '@chakra-ui/react';
import HelpAccordion from '../HelpAccordion';
import { FiUser, FiLink, FiUsers } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function AccountHelp() {
  const { t } = useTranslation('return');
  const bgTeal = useColorModeValue('teal.50', 'teal.800');
  const bgBlue = useColorModeValue('blue.50', 'blue.800');
  const bgYellow = useColorModeValue('yellow.50', 'yellow.800');
  const bgPurple = useColorModeValue('purple.50', 'purple.800');
  const bgGreen = useColorModeValue('green.50', 'green.800');

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <HelpAccordion title={t('help.account.title_1')} icon={FiUser}>
        <Text mb={2}>{t('help.account.info_intro')}</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>{t('help.account.info_name')}</li>
          <li>{t('help.account.info_email')}</li>
          <li>{t('help.account.info_phone')}</li>
          <li>{t('help.account.info_company')}</li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgTeal} borderColor="teal.300" borderWidth={1}>
          <Text fontSize="sm">
            <strong>{t('help.account.note')}:</strong> {t('help.account.change_password')}
          </Text>
        </Alert>
        <Alert status="info" mt={4} rounded={8} bg={bgBlue} borderColor="blue.300" borderWidth={1}>
          <Text fontSize="sm">
            <strong>{t('help.account.important')}:</strong> {t('help.account.verify_email')}
          </Text>
        </Alert>
        <Alert status="warning" mt={4} rounded={8} bg={bgYellow} borderColor="yellow.300" borderWidth={1}>
          <Text fontSize="sm">
            <strong>{t('help.account.warning')}:</strong> {t('help.account.logout_email')}
          </Text>
        </Alert>
        <Alert status="info" mt={4} rounded={8} bg={bgPurple} borderColor="purple.300" borderWidth={1}>
          <Text fontSize="sm">
            📌 {t('help.account.how_update')}
          </Text>
        </Alert>
      </HelpAccordion>

      <HelpAccordion title={t('help.account.title_2')} icon={FiLink}>
        <Text>{t('help.account.auth_intro')}</Text>
        <Text mb={2}>{t('help.account.auth_options')}</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>✅ {t('help.account.option_zip')}</li>
          <li>{t('help.account.option_email')}</li>
          <li>{t('help.account.option_phone')}</li>
          <li>{t('help.account.option_id')}</li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgGreen} borderColor="green.300" borderWidth={1}>
          <Text fontSize="sm">💡 {t('help.account.switches')}</Text>
        </Alert>
        <Alert status="info" mt={4} rounded={8} bg={bgBlue} borderColor="blue.300" borderWidth={1}>
          <Text fontSize="sm">
            <strong>{t('help.account.important')}:</strong> {t('help.account.only_one')}
          </Text>
        </Alert>
      </HelpAccordion>

      <HelpAccordion title={t('help.account.title_3')} icon={FiUsers}>
        <Text>{t('help.account.user_intro')}</Text>
        <Text mb={2}>{t('help.account.user_info')}</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>{t('help.account.user_name')}</li>
          <li>{t('help.account.user_email')}</li>
          <li>{t('help.account.user_role')}</li>
          <li>{t('help.account.user_status')}</li>
          <li>{t('help.account.user_actions')}</li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgGreen} borderColor="green.300" borderWidth={1}>
          <Text fontSize="sm">📌 {t('help.account.add_user')}</Text>
        </Alert>
        <Alert status="info" mt={4} rounded={8} bg={bgBlue} borderColor="blue.300" borderWidth={1}>
          <Text fontSize="sm">
            <strong>{t('help.account.important')}:</strong> {t('help.account.only_one')}
          </Text>
        </Alert>
      </HelpAccordion>

      <HelpAccordion title={t('help.account.title_4')} icon={FiUsers}>
        <Text>{t('help.account.logo_intro')}</Text>
        <Text mb={2}>{t('help.account.logo_info')}</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>{t('help.account.logo_format')}</li>
          <li>{t('help.account.logo_resolution')}</li>
          <li>{t('help.account.logo_size')}</li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgGreen} borderColor="green.300" borderWidth={1}>
          <Text fontSize="sm">📌 {t('help.account.logo_note')}</Text>
        </Alert>
      </HelpAccordion>
    </Accordion>
  );
}
// This component provides help information related to user accounts, authentication, and logos.
// It uses the Chakra UI library for styling and layout, and the react-icons library for icons.
// The component is structured as an accordion with multiple sections, each containing relevant information and alerts.
// The content is localized using the i18next library, allowing for easy translation into different languages.
// The component includes sections for account information, authentication options, user management, and logo guidelines.
// Each section provides detailed instructions and tips for users to manage their accounts effectively.