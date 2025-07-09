
import { Shop } from "@/types/shop";

export const mockShops : Shop[] =  [
  {
    id: 'shop-1',
    name: 'Berlin Shop',
    merchantId: 'm-001',
    warehouseId: 'w-001',
    welcomeText: "Bienvenido a Finitex Returns",
    requiredFields: ["orderNumber", "zipCode"],
    primaryColor: "#FF6A00",
    returnPolicy: "Puedes devolver tus productos hasta 14 días...",
    language: "de",
  },
  {
    id: 'shop-2',
    name: ' Ecommerce Hub',
    merchantId: 'm-001',
    warehouseId: 'w-001',
  },
  {
    id: 'shop-3',
    name: 'TechGear',
    merchantId: 'm-002',
    warehouseId: 'w-002',
  },
   {
    id: 'shop-4',
    name: 'Shoping World',
    merchantId: 'm-002',
    warehouseId: 'w-002',
  },
];
