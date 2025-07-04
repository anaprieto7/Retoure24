'use client';

import { Accordion, Alert, Text, useColorModeValue } from '@chakra-ui/react';
import HelpAccordion from '../HelpAccordion';
import { FiUser, FiLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function EmailHelp() {
  const { t } = useTranslation('return');
  const bgYellow = useColorModeValue('yellow.50', 'yellow.800');
  const bgBlue = useColorModeValue('blue.50', 'blue.800');

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <HelpAccordion title=" 1. Wie aktiviert man den automatischen E-Mail-Versand?" icon={FiLink}>
        <Text mb={2}>Fülle die folgenden Felder aus: </Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>Aktiviere die Option<strong> „E-Mail-Versand aktivieren“  </strong></li>
          <li>Gib Folgendes ein: 
            <strong> E-Mail Absender, E-Mail Betreff, E-Mail Inhalt</strong>
            <Text mt={2}>E-Mail-Adresse des Absenders (von dieser Adresse werden die E-Mails gesendet).</Text>
            <Text mt={2}>Bcc-E-Mail (optional, um eine versteckte Kopie aller gesendeten E-Mails zu erhalten).</Text>
          </li>
        </ul>
        <Text mt={2}>Klicke auf den Button <strong>  „Speichern“.</strong></Text>
      </HelpAccordion>
       <HelpAccordion title="2. Mail templates" icon={FiUser}>
        <Text mb={2}>Du kannst den Inhalt der E-Mails entsprechend dem Rücksende-Status konfigurieren.</Text>
        <Text mb={2}>Folgende Vorlagen stehen zur Verfügung:</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li><strong>Rückgabe akzeptiert: </strong> wenn die Rücksendeanfrage akzeptiert wurde</li>
          <li><strong>Rückgabe an Disponent/Versanddienstleister übergeben: </strong> wenn das Paket dem Disponent übergeben wurde.</li>
          <li><strong>Rückgabe im Lager eingetroffen: </strong> wenn das Paket im Lager angekommen ist.</li>
          <li>Jede Vorlage ermöglicht es dir:
            <Text mt={2}>Den Betreff und den Inhalt der E-Mail anzupassen.</Text>
            <Text mt={2}>Dynamische Variablen wie [[customer.name]] oder [[order.id]] zu verwenden.</Text>
          </li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgBlue} borderColor="blue.300" borderWidth={1}>
          <Text fontSize="sm">💡 Du kannst den Rich-Text-Editor verwenden, um Formatierungen, Links, Symbole usw. hinzuzufügen.</Text>
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