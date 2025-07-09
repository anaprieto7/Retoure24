// types/shop.ts

export type Shop = {
  id: string;
  name: string;
  warehouseId: string;
  status?: 'connected' | 'disconnected';
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any; // ← opcional si necesitas campos dinámicos
};
