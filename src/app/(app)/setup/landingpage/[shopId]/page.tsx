import LandingConfigWrapper from "@/components/landingpage/LandingConfigWrapper";
import { mockShops } from "@/data/mockShops";
import { notFound } from "next/navigation";

export default function LandingConfigPage({ params }: { params: { shopId: string } }) {
  const shop = mockShops.find((s) => s.id === params.shopId);
  if (!shop) notFound();

  return <LandingConfigWrapper shop={shop} />;
}
