import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Marie Admin',
    email: 'admin@retoure24.com',
    role: 'SuperAdmin',
    shopIds: [],
  },
  {
    id: '2',
    name: 'Louis Merchant',
    email: 'merchant@retoure24.com',
    role: 'MerchantAdmin',
    merchantId: 'm-001',
    shopIds: ['shop-1', 'shop-2'],
  },
  {
    id: '3',
    name: 'Ana Viewer',
    email: 'viewer@retoure24.com',
    role: 'Viewer',
    merchantId: 'm-001',
    shopIds: ['shop-1'],
  }
];
