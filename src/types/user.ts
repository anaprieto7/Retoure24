export type UserRole = 'SuperAdmin' | 'WarehouseAdmin' | 'MerchantAdmin' | 'MerchantUser' | 'Viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  warehouseId?: string;
  merchantId?: string;
  shopIds: string[];
}
