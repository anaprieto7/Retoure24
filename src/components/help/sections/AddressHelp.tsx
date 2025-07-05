'use client';

import { Accordion, Alert, Text, useColorModeValue } from '@chakra-ui/react';
import HelpAccordion from '../HelpAccordion';
import { FiUser, FiLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function AddressHelp() {
  const { t } = useTranslation('return');
  const bgYellow = useColorModeValue('yellow.50', 'yellow.800');

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <HelpAccordion title={t('help.address.title_1')} icon={FiUser}>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>{t('help.address.step_1')}</li>
          <li>{t('help.address.step_2')}</li>
          <li>{t('help.address.step_3')}</li>
        </ul>
      </HelpAccordion>

      <HelpAccordion title={t('help.address.title_2')} icon={FiLink}>
        <Text mb={2}>{t('help.address.edit_intro')}</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>{t('help.address.edit_1')}</li>
          <li>{t('help.address.edit_2')}</li>
          <li>{t('help.address.edit_3')}</li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgYellow} borderColor="yellow.300" borderWidth={1}>
          <Text fontSize="sm">⚠️ {t('help.address.warning')}</Text>
        </Alert>
      </HelpAccordion>
    </Accordion>
  );
}
// This component provides help information for managing addresses in the return system.
// It includes sections for adding new addresses and editing existing ones, with a warning about the implications of address changes.
// The content is localized using the `useTranslation` hook from `react-i18next` for internationalization support.
// The `HelpAccordion` component is used to create collapsible sections for better organization of the help content.
// The component also uses Chakra UI for styling and layout, ensuring a consistent look and feel across the application.
// The use of icons from `react-icons` enhances the visual representation of each section, making it easier for users to navigate the help content.
// The component is designed to be responsive and user-friendly, providing clear instructions and warnings to users managing their addresses in the return system.
// The `useColorModeValue` hook is used to adapt the background color of the alert based on the current color mode (light or dark), ensuring good visibility and aesthetics in both modes.
// The component is structured to be easily maintainable and extendable, allowing for future updates or additions to the help content without significant refactoring.
// The use of TypeScript ensures type safety and better developer experience, reducing the likelihood of runtime errors and improving code quality.
// The component is part of a larger help system, providing users with the necessary guidance to effectively manage their addresses in the return process.
// It is designed to be integrated into a broader help center, enhancing the overall user experience by providing clear and concise instructions for address management.
// The component is expected to be used in a client-side rendering context, as indicated by the 'use client' directive at the top of the file.