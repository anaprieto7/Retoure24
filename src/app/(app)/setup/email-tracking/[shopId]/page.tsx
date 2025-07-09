// /app/(app)/setup/email-tracking/[shopId]/page.tsx

import EmailTrackingView from "@/components/email/EmailTrackingView";
import { mockShops } from "@/data/mockShops";

interface Props {
  params: { shopId: string };
}

export default function Page({ params }: Props) {
  const shop = mockShops.find((s) => s.id === params.shopId);
  if (!shop) return null;

  return <EmailTrackingView shopId={shop.id} shopName={shop.name} />;
}
