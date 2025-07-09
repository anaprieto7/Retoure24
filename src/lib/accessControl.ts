// /lib/accessControl.ts

import { User } from '@/types/user';
import { mockShops } from '@/data/mockShops';
import returnsMock from '@/data/returnsMock';

export function getAccessibleShopIds(user: User): string[] {
  if (!user) return [];

  switch (user.role) {
    case 'SuperAdmin':
      return mockShops.map(shop => shop.id);

    case 'WarehouseAdmin':
      return mockShops
        .filter(shop => user.warehouseIds?.includes(shop.warehouseId))
        .map(shop => shop.id);

    case 'MerchantAdmin':
    case 'MerchantUser':
    case 'Viewer':
      return user.shopIds || [];

    default:
      return [];
  }
}
 export function getAccessibleReturns(user: User) {
  const accessibleShopIds = getAccessibleShopIds(user);
  return returnsMock.filter(ret => accessibleShopIds.includes(ret.shopId));
}

