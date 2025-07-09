// src/app/(app)/layout.tsx
'use client';

import { ReactNode } from 'react';
import Providers from '@/app/providers';
import AppShell from '@/components/AppShell';
import { UserProvider } from '@/context/UserContext';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <UserProvider>
        <AppShell>{children}</AppShell>
      </UserProvider>
    </Providers>
  );
}


// This layout component wraps the application in a Providers component for context management
// and an AppShell component for consistent layout structure across the app.
// It ensures that all pages have access to the necessary providers and layout elements.
// The dynamic rendering is set to 'force-dynamic' to ensure that the layout is always rendered on the server,
// which is useful for applications that require server-side rendering for SEO or performance reasons.
// The AppShell component includes a sidebar and header, providing a consistent user interface across the application.
// This layout is used for all pages within the application, ensuring a unified look and feel.
// It allows for easy management of global state and context, making it easier to share data across components.
// The use of ReactNode allows for flexibility in what can be passed as children to this layout, accommodating various page structures.