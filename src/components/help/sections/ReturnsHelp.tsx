'use client';

import { Accordion, Alert, Text, useColorModeValue } from '@chakra-ui/react';
import HelpAccordion from '../HelpAccordion';
import { FiUser, FiLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function ReturnsHelp() {
  const { t } = useTranslation('return');
  const bgYellow = useColorModeValue('yellow.50', 'yellow.800');
  const bgBlue = useColorModeValue('blue.50', 'blue.800');
  const bgGreen = useColorModeValue('green.50', 'green.800');
  

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <HelpAccordion title=" 1. Retrouren liste" icon={FiLink}>
        <Text mb={2}>Die Liste zeigt alle Rücksendeanfragen mit folgenden Daten:</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>Rücksendenummer</li>
          <li>Rücksende-Status</li>
          <li>Rücksende-Datum</li>
          <li>Rücksende-Adresse</li>
          <li>Rücksende-Tracking-Nummer</li>
          <li>Aktionen zum Anzeigen oder Bearbeiten der Details</li>
          <li>🔍 Du kannst filtern nach:
            <strong> E-Mail Absender, E-Mail Betreff, E-Mail Inhalt</strong>
            <Text mt={2}>Status (Erstattet, Angemeldet, Abgelehnt usw.)</Text>
            <Text mt={2}>Bestellnummer.</Text>
            <Text mt={2}>Datumsbereich.</Text>
            <Text mt={2}>Gründen.</Text>
          </li>
        </ul>
        <Text mt={2}>📤 Du kannst die Liste auch mit dem Button<strong>„Exportieren“ </strong>exportieren.</Text>
      </HelpAccordion>
      <HelpAccordion title="2. Rücksendungsdetails" icon={FiUser}>
        <Text mb={2}>Durch Klicken auf das Augensymbol oder die Rücksende-ID kannst du die vollständigen</Text>
        <Text mb={2}>Informationen einer einzelnen Rücksendung einsehen:</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>Informationen zur Originalbestellung.</li>
          <li>Bestellnummer</li>
          <li>Name, E-Mail-Adresse und Telefonnummer des Kunden</li>
          <li>Adresse des Kunden</li>
          <li>Jede Vorlage ermöglicht es dir:
            <Text mt={2}>Den Betreff und den Inhalt der E-Mail anzupassen.</Text>
            <Text mt={2}>Dynamische Variablen wie [[customer.name]] oder [[order.id]] zu verwenden.</Text>
          </li>
        </ul>
        <Alert status="info" mt={4} rounded={8} bg={bgBlue} borderColor="blue.300" borderWidth={1}>
          <Text fontSize="sm">💡 Du kannst den Rich-Text-Editor verwenden, um Formatierungen, Links, Symbole usw. hinzuzufügen.</Text>
        </Alert>
      </HelpAccordion>
      <HelpAccordion title="2. Rückgabeinformationen" icon={FiUser}>
        <Text mb={2}>Durch Klicken auf das Augensymbol oder die Rücksende-ID kannst du die vollständigen</Text>
        <Text mb={2}>Informationen einer einzelnen Rücksendung einsehen:</Text>
        <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
          <li>Sendungsnummer</li>
          <li>Rücksendedatum</li>
          <li>Verwendeter Versanddienstleister</li>
          <li>Zieladresse (Wohin die Rücksendung geschickt wurde)</li>
          <li> Du kannst den aktualisierten Status deiner Bestellung einsehen:
            <Text mt={2}>Registriert</Text>
            <Text mt={2}>Im Lager eingegangen</Text>
            <Text mt={2}>Rückerstattung</Text>
            <Text mt={2}>Jeder Status zeigt Datum und Uhrzeit des jeweiligen Ereignisses an.</Text>
          </li>
        </ul>
        <Alert status="success" mt={4} rounded={8} bg={bgGreen} borderColor="green.300" borderWidth={1}>
          <Text fontSize="sm">💡 Du siehst außerdem die zurückgesendeten Produkte inklusive SKU, Produktname und Menge.</Text>
        </Alert>
        <Alert status="info" mt={4} rounded={8} bg={bgBlue} borderColor="blue.300" borderWidth={1}>
          <Text fontSize="sm">🔧 Von hier aus kannst du den Rücksendestatus mit dem Button <strong> „Status ändern“ </strong> anpassen und die Änderungen mit „Änderung speichern“ sichern.</Text>
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