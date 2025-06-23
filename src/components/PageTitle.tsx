// components/PageTitle.tsx
import { Heading, Flex } from "@chakra-ui/react";

interface PageTitleProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <Flex align="center" mb={4}>
      <Heading size="lg" fontWeight="bold" mr={4} mt={4}>
        {title}
      </Heading>
      {children}
    </Flex>
  );
}
// This component is used to display a page title with optional children elements.
// It uses Chakra UI's Flex and Heading components for layout and styling.
// The title is displayed as a large, bold heading, and any additional children elements are rendered next to it.
// This is useful for creating consistent page headers across the application, allowing for additional elements like buttons or icons to be included alongside the title.