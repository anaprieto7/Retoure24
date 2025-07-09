
import AccountView from '@/components/account/AccountView'


// This page is part of the setup process for user accounts.
// It allows users to view and edit their account information, upload a company logo,
// and select authentication options for accessing the returns page.
// The components used here are designed to provide a user-friendly interface
// for managing account settings in a web application.

// The AccountInfoCard component displays the user's name, email, phone number, and company name.
// The CompanyLogoUploader component allows users to upload a logo for their company.
// The ReturnAuthOptions component lets users select authentication methods for accessing the returns page.

// This page is styled using Chakra UI components for a consistent and responsive design.
// The user data is hardcoded for demonstration purposes, but in a real application,
// it would typically be fetched from an API or database.

export default async function AccountPage() {
  return (
  <AccountView />
  )
}
// This page displays the user's account information and allows them to upload a company logo.
// It uses the AccountInfoCard component to show user details and the CompanyLogoUploader component for logo management.
// The user data is hardcoded for demonstration purposes, but in a real application, it would be fetched from an API or database.
// The page is styled using Chakra UI components for a consistent and responsive design.
// The AccountInfoCard component displays the user's name, email, phone number, and company name