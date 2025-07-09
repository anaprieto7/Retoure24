"use client";

import { SimpleGrid } from "@chakra-ui/react";
import LandingCard from "./LandingCard";

interface Shop {
  id: string;
  name: string;
  logoUrl?: string;
  isConfigured?: boolean;
}

interface Props {
  shops: Shop[];
  configurations: { [shopId: string]: any };
  onConfigure: (shopId: string) => void;
}

export default function LandingPageList({ shops, onConfigure }: Props) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
      {shops.map((shop) => (
        <LandingCard
          key={shop.id}
          shopId={shop.id}
          shopName={shop.name}
          logoUrl={shop.logoUrl}
          isConfigured={shop.isConfigured}
          onConfigure={onConfigure}
        />
      ))}
    </SimpleGrid>
  );
}
