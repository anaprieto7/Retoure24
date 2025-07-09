export type UserRole =
  | 'SuperAdmin'
  | 'WarehouseAdmin'
  | 'MerchantAdmin'
  | 'MerchantUser'
  | 'Viewer';

export type ClientType = 'WEMALO' | 'INDEPENDENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
  clientType?: ClientType; // ← nuevo campo obligatorio excepto para SuperAdmin
  warehouseIds?: string[];
  merchantId?: string[] | string;
  shopIds?: string[];
  status?: 'active' | 'inactive';
}
