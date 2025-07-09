import returnsMock from "@/data/returnsMock";
import ReturnDetailClientView from "@/components/ReturnDetails/ReturnDetailClientView";

export default function ReturnDetailPage({ params }) {
  const returnData = returnsMock.find(r => r.id === params.id);
  if (!returnData) return <div>Devolución no encontrada</div>;
  return <ReturnDetailClientView returnData={returnData} />;
}
