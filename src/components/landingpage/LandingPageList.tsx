"use client";

import { SimpleGrid } from "@chakra-ui/react";
import LandingCard from "./LandingCard";
import { useRouter } from "next/navigation";

interface Shop {
  id: string;
  name: string;
  logoUrl?: string;
}

interface Props {
  shops: Shop[];
  configurations: { [shopId: string]: any };
}

export default function LandingPageList({ shops, configurations }: Props) {
  const router = useRouter();

  const handleConfigure = (shopId: string) => {
    router.push(`/setup/landingpage/${shopId}`);
  };

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
      {shops.map((shop) => (
        <LandingCard
          key={shop.id}
          shopId={shop.id}
          shopName={shop.name}
          logoUrl={shop.logoUrl}
          isConfigured={Boolean(configurations[shop.id])}
          onConfigure={handleConfigure}
        />
      ))}
    </SimpleGrid>
  );
}
