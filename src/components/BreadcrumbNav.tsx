// components/BreadcrumbNav.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface BreadcrumbNavProps {
  items: { label: string; href?: string }[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {items.map((item, idx) => (
        <BreadcrumbItem key={idx} isCurrentPage={!item.href}>
          {item.href ? (
            <BreadcrumbLink as={NextLink} href={item.href}>
              {item.label}
            </BreadcrumbLink>
          ) : (
            item.label
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
