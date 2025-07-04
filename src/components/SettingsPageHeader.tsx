'use client';

import { Heading, useColorModeValue } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function SettingsPageHeader() {
  const pathname = usePathname();
  const { t } = useTranslation('return');

  // Extraer la última parte de la ruta: /setup/account → 'account'
  const pageKey = pathname.split('/').pop() || 'return';

  return (
    <Heading
      size="lg"
      mb={2}
      color={useColorModeValue('gray.800', 'gray.300')}
    >
      {t(`settingHeadings.${pageKey}`)}
    </Heading>
  );
}
// This component renders a header for the settings page.
// It uses Chakra UI for styling and Next.js for routing.
// The header displays a localized title based on the current page key.
// The page key is derived from the URL path, allowing for dynamic titles.
// The component supports internationalization using react-i18next for translations.
// The header is styled with a large font size and margin at the bottom for spacing.
// It adapts its text color based on the current color mode (light or dark).
// This ensures a consistent and user-friendly interface across different settings pages.
// The component is designed to be reusable across different settings pages in the application.
// It enhances the user experience by providing clear and localized titles for each settings section.