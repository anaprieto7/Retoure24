'use client';

import { Heading, Stack, Flex, Box } from '@chakra-ui/react'
import AccountInfoCard from '@/components/account/AccountInfoCard'
import CompanyLogoUploader from '@/components/account/CompanyLogoUploader'
import UserList from '@/components/account/UserList'
import ReturnReasonsList from '@/components/account/ReturnReasonsList'
import SettingsPageHeader from '@/components/SettingsPageHeader'
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { FiSettings, FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function AccountView() {
  const { t } = useTranslation('setting');
   const user = {
    name: 'Jan Smith',
    email: 'jan.smith@mustercompany.com',
    phone: '+496535353535',
    company: 'Example Name'
  }
  const breadcrumbs = [
  { labelKey: 'Settings', href: '/setup/account', icon: FiSettings },
  { labelKey: 'Account', icon: FiUser }
];

  return (
    <Stack spacing={6} maxW="container.lg" mx="auto">
      {/* Breadcrumb navigation for easy navigation */}

      <BreadcrumbNav items={breadcrumbs} />
      <SettingsPageHeader />
      <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={4}
              align="stretch"
              mb={6}
      >
              <Box flex="1" display="flex">
                <Box
                  rounded="xl"
                  w="full"
                  h="full"
                >
                  <AccountInfoCard
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    company={user.company}
                  />
                </Box>
              </Box>
      
              <Box flex="1" display="flex">
                <Box
                  w="full"
                  h="full"
                >
                  <CompanyLogoUploader />
                </Box>
              </Box>
            </Flex>
      
            
            <UserList />
            <ReturnReasonsList />
    </Stack>
  );
}
// This component serves as the main view for the account settings page,
// allowing users to view and edit their account information.
// It includes a breadcrumb navigation for easy access to different sections,
// a heading for the page title, and components for uploading a company logo
// and displaying account information in a card format.
// The translations are handled using the `useTranslation` hook from `react-i18next`.

// The `BreadcrumbNav` component is used to display the navigation path,
// while the `AccountInfoCard` component shows the user's account details.
// The `CompanyLogoUploader` component allows users to upload their company logo.
// The page is styled using Chakra UI components for a consistent and responsive design.