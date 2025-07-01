'use client';

import { Stack, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { FiSettings, FiMapPin } from 'react-icons/fi';
import SettingsPageHeader from '@/components/SettingsPageHeader';
import AddressInfoSection from '@/components/address/AddressInfoSection'
import AddNewAddress from '@/components/address/AddNewAddress'
import addressMock from "@/data/addressMock"; 

export default function AddressView() {
  const { t } = useTranslation('setting');

  const breadcrumbs = [
  { labelKey: 'setting', href: '/setup/account', icon: FiSettings },
  { labelKey: 'addresses', icon: FiMapPin }
];

  return (
    <Stack p={6} maxW="container.lg" mx="auto">
      <BreadcrumbNav items={breadcrumbs} />
        <SettingsPageHeader />
        <AddressInfoSection />
        <AddNewAddress />

        

      {/* Aquí irán los componentes específicos: AddressList, AddressForm, etc. */}
    </Stack>
  );
}
// This component serves as a view for managing addresses in the settings section of the application.
// It includes a breadcrumb navigation for easy access to the settings menu and displays the heading for the addresses section.
// The component is designed to be part of a larger settings management system, allowing users to view and manage their addresses.
// The breadcrumbs help users navigate back to the main settings page or other sections easily.
// The Heading component displays the title of the current section, which is "Addresses" in this case.
// The useTranslation hook is used to handle translations for internationalization, ensuring that the text displayed is appropriate for the user's language preference.