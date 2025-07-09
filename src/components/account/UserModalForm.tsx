"use client";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Switch,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { useUser } from '@/context/UserContext';
import { User, UserRole } from '@/types/user';
import { mockWarehouses } from '@/data/mockWarehouses';
import { mockShops } from '@/data/mockShops';
import { Users } from '@/data/mockUsers';

interface Props {
  form: User & { clientType?: 'wemalo' | 'independent' };
  setForm: (u: any) => void;
}

export default function UserModalForm({ form, setForm }: Props) {
  const { user: currentUser } = useUser();

  const isSuperAdmin = currentUser?.role === 'SuperAdmin';
  const isWarehouseAdmin = currentUser?.role === 'WarehouseAdmin';
  const isMerchantAdmin = currentUser?.role === 'MerchantAdmin';

  const roleOptions: UserRole[] =
    form.clientType === 'independent'
      ? ['MerchantAdmin', 'MerchantUser']
      : isSuperAdmin
      ? ['SuperAdmin', 'WarehouseAdmin', 'MerchantAdmin', 'MerchantUser', 'Viewer']
      : isWarehouseAdmin
      ? ['MerchantAdmin', 'MerchantUser', 'Viewer']
      : ['MerchantUser', 'Viewer'];

  const selectedWarehouseIds = form.warehouseIds || [];

  return (
    <Stack spacing={4}>
      {/* Tipo de cliente → solo si NO es SuperAdmin ni WarehouseAdmin */}
      {isSuperAdmin && !['SuperAdmin', 'WarehouseAdmin'].includes(form.role || '') && (
        <FormControl>
          <FormLabel>Client Type</FormLabel>
          <Select
            placeholder="Select Type"
            value={form.clientType || ''}
            onChange={(e) =>
              setForm({
                ...form,
                clientType: e.target.value as 'wemalo' | 'independent',
                warehouseIds: [],
                shopIds: [],
                merchantId: '',
              })
            }
          >
            <option value="wemalo">Wemalo Client</option>
            <option value="independent">Independent</option>
          </Select>
        </FormControl>
      )}

      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </FormControl>

      {/* Rol */}
      <FormControl>
        <FormLabel>Rol</FormLabel>
        <Select
          value={form.role}
          onChange={(e) => {
            const newRole = e.target.value as UserRole;
            const isNowSuperAdmin = newRole === 'SuperAdmin';
            setForm({
              ...form,
              role: newRole,
              ...(isNowSuperAdmin && {
                clientType: undefined,
                warehouseIds: [],
                shopIds: [],
                merchantId: '',
              }),
            });
          }}
        >
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* 🏭 Si selecciona WarehouseAdmin → mostrar warehouses + shops */}
      {form.role === 'WarehouseAdmin' && (
        <>
          <FormControl>
            <FormLabel>Asignar a uno o más Warehouses</FormLabel>
            <CheckboxGroup
              value={form.warehouseIds || []}
              onChange={(val) =>
                setForm({ ...form, warehouseIds: val as string[], shopIds: [] })
              }
            >
              <Stack spacing={2}>
                {mockWarehouses.map((w) => (
                  <Checkbox key={w.id} value={w.id}>
                    {w.name}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {selectedWarehouseIds.length > 0 && (
            <FormControl>
              <FormLabel>Tiendas asignadas</FormLabel>
              <CheckboxGroup
                value={form.shopIds || []}
                onChange={(val) => setForm({ ...form, shopIds: val as string[] })}
              >
                <Stack spacing={2}>
                  {mockShops
                    .filter((shop) => selectedWarehouseIds.includes(shop.warehouseId))
                    .map((shop) => (
                      <Checkbox key={shop.id} value={shop.id}>
                        {shop.name}
                      </Checkbox>
                    ))}
                </Stack>
              </CheckboxGroup>
            </FormControl>
          )}
        </>
      )}

      {/* MerchantUser → seleccionar MerchantAdmin */}
      {form.role === 'MerchantUser' && isSuperAdmin && (
        <FormControl>
          <FormLabel>Asignar a MerchantAdmin</FormLabel>
          <Select
            placeholder="Selecciona un MerchantAdmin"
            value={form.merchantId || ''}
            onChange={(e) =>
              setForm({ ...form, merchantId: e.target.value })
            }
          >
            {Users.filter((u) => u.role === 'MerchantAdmin').map((admin) => (
              <option key={admin.id} value={admin.id}>
                {admin.name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Viewer Toggle */}
      <FormControl display="flex" alignItems="center">
        <FormLabel mb="0">ReadOnly (Viewer)</FormLabel>
        <Switch
          isChecked={form.role === 'Viewer'}
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.checked ? 'Viewer' : 'MerchantUser',
            })
          }
        />
      </FormControl>
    </Stack>
  );
}
