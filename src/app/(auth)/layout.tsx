// src/app/(auth)/layout.tsx
'use client';

import { ReactNode } from 'react';
import Providers from '@/app/providers';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}


// This layout wraps the authentication pages with Chakra UI and User context
// It provides a consistent styling and user state management across auth pages
// The UserProvider can be used to manage user authentication state and actions
// ChakraProvider applies the Chakra UI theme and styles to the components within this layout
// This layout is used for all authentication-related pages in the application
// It ensures that all auth pages have access to the same user context and styling
// The UserProvider can be customized to include additional user-related functionality in the future
// This layout is essential for maintaining a consistent user experience across authentication pages
// It allows for easy access to user state and Chakra UI components in auth-related components
// The layout can be extended with additional providers or context as needed in the future
// It serves as a foundation for building out the authentication flow in the application
// The use of ChakraProvider ensures that all components within this layout have access to the Chakra UI theme
// This layout can be imported and used in the authentication pages like login, register, etc.
// It is designed to be reusable and maintainable, following best practices for React component structure
// The UserProvider can be used to manage user sessions, authentication status, and user-related data
// This layout is a key part of the application's architecture for handling user authentication
// It provides a clean separation of concerns by isolating auth-related functionality in its own layout
// The use of ReactNode allows for flexibility in what can be passed as children to this layout
// This layout can be easily modified or extended to include additional features or providers in the future
// It is a crucial part of the application's structure for managing user authentication and state
// The layout ensures that all auth pages have a consistent look and feel, enhancing user experience
// It can be used in conjunction with other layouts for different parts of the application