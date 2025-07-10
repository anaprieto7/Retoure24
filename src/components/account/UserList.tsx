'use client';

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  Stack,
  IconButton,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiUserPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { User } from '@/types/user';
import { useUser } from '@/context/UserContext';
import UserModalForm from '@/components/account/UserModalForm';
import { mockWarehouses } from '@/data/mockWarehouses';
import { mockShops } from '@/data/mockShops';

export default function UserList() {
  const { t } = useTranslation('return');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user: currentUser } = useUser();

  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Marie Admin',
      email: 'admin@retoure24.com',
      role: 'SuperAdmin',
      status: 'active',
    },
    {
      id: '2',
      name: 'Luca Merchant',
      email: 'luca@shop.com',
      role: 'MerchantAdmin',
      merchantId: 'm-001',
      warehouseIds: ['w-001'],
      shopIds: ['shop-1', 'shop-2'],
      status: 'active',
    },
    {
      id: '3',
      name: 'Nina User',
      email: 'nina@shop.com',
      role: 'MerchantUser',
      merchantId: 'm-001',
      warehouseIds: ['w-001'],
      shopIds: ['shop-1'],
      status: 'inactive',
    },
  ]);

  const [form, setForm] = useState<User>({
    id: '',
    name: '',
    email: '',
    role: 'MerchantUser',
    status: 'active',
    shopIds: [],
    warehouseIds: [],
  });


// Estado para manejar el usuario que se está editando
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const visibleUsers = users.filter((u) => {
    if (currentUser?.role === 'SuperAdmin') return true;
    if (currentUser?.role === 'WarehouseAdmin') {
      // Mostrar si alguno de los warehouses del usuario coincide con los del admin
      return u.warehouseIds?.some((id) => currentUser.warehouseIds?.includes(id));
    }
    if (currentUser?.role === 'MerchantAdmin') return u.merchantId === currentUser.merchantId;
    return false;
  });

  const getWarehouseNames = (ids?: string[]) => {
    if (!ids || ids.length === 0) return ['-'];
    return ids
      .map((id) => mockWarehouses.find((w) => w.id === id)?.name)
      .filter(Boolean) as string[];
  };

  const getShopNames = (shopIds?: string[]) => {
    if (!shopIds || shopIds.length === 0) return ['-'];
    return shopIds
      .map((id) => mockShops.find((s) => s.id === id)?.name)
      .filter(Boolean) as string[];
  };

  const openAddModal = () => {
    setEditingUser(null);
    setForm({
      id: '',
      name: '',
      email: '',
      role: 'MerchantUser',
      status: 'active',
      shopIds: [],
      warehouseIds: [],
    });
    onOpen();
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setForm(user);
    onOpen();
  };

  const handleSave = () => {
  if (!form.name || !form.email || !form.role) {
    toast({ title: 'Complete all field', status: 'warning' });
    return;
  }

  // Validaciones según tipo de usuario
  if (form.role === 'WarehouseAdmin' && (!form.warehouseIds || form.warehouseIds.length === 0)) {
    toast({ title: 'Select a Warehouse', status: 'warning' });
    return;
  }

  if (
    form.role === 'MerchantAdmin' &&
    (!form.warehouseIds || form.warehouseIds.length !== 1 || !form.shopIds || form.shopIds.length === 0)
  ) {
    toast({
      title: 'Complete warehouse and Shopss',
      description: 'El MerchantAdmin musst have 1 warehouse and at least one Shop',
      status: 'warning',
    });
    return;
  }

  if (
    (form.role === 'MerchantUser' || form.role === 'Viewer') &&
    (!form.shopIds || form.shopIds.length === 0)
  ) {
    toast({ title: 'Asign at least one Shop', status: 'warning' });
    return;
  }

  // Guardar usuario
  const newUser = {
    ...form,
    id: editingUser ? form.id : Date.now().toString(),
  };

  if (editingUser) {
    setUsers(users.map((u) => (u.id === editingUser.id ? newUser : u)));
    toast({ title: 'User Updated', status: 'success' });
  } else {
    setUsers([...users, newUser]);
    toast({ title: 'User Added', status: 'success' });
  }

  onClose();
};


  const toggleUserStatus = (userId: string) => {
    setUsers(users.map((u) =>
      u.id === userId
        ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
        : u
    ));
    toast({
      title: 'Status Updated',
      description: 'User status changed.',
      status: 'info',
    });
  };

  const color= useColorModeValue("gray.700", "gray.300");
  const buttonbgColor = useColorModeValue("blue.500","blue.800")
  const buttonColor = useColorModeValue("white","blue.400")
  const bg = useColorModeValue("white","gray.800")

  return (
    <Box bg={bg} mt={3} p={6} borderRadius="md" shadow="sm">
      <Stack direction="row" justify="space-between" align="center" mb={4}>
        <Heading size="md" color={color}>{t('user.title')}</Heading>
        {(currentUser?.role === 'SuperAdmin' || currentUser?.role?.includes('Admin')) && (
          <Button size="sm" leftIcon={<FiUserPlus />} bg={buttonbgColor} color={buttonColor} onClick={openAddModal}>
            {t('user.add')}
          </Button>
        )}
      </Stack>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>E-mail</Th>
            <Th>Rol</Th>
            <Th>Status</Th>
            <Th>Warehouses</Th>
            <Th>Shops</Th>
            <Th>Aktionen</Th>
          </Tr>
        </Thead>
        <Tbody>
          {visibleUsers.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Badge colorScheme={
                  user.role === 'SuperAdmin'
                    ? 'purple'
                    : user.role === 'MerchantAdmin'
                    ? 'green'
                    : user.role === 'WarehouseAdmin'
                    ? 'cyan'
                    : user.role === 'MerchantUser'
                    ? 'blue'
                    : 'gray'
                }>
                  {user.role}
                </Badge>
              </Td>
              <Td>
                <Badge colorScheme={user.status === 'active' ? 'green' : 'red'}>
                  {user.status === 'active' ? 'Activo' : 'Inactivo'}
                </Badge>
              </Td>
              <Td>
                {getWarehouseNames(user.warehouseIds).map((name) => (
                  <Badge key={name} colorScheme="purple" mr={1}>
                    {name}
                  </Badge>
                ))}
              </Td>
              <Td>
                {getShopNames(user.shopIds).map((name) => (
                  <Badge key={name} colorScheme="gray" mr={1}>
                    {name}
                  </Badge>
                ))}
              </Td>
              <Td>
                <Stack direction="row">
                  <IconButton
                    icon={<FiEdit2 />}
                    aria-label="Editar"
                    size="sm"
                    variant="ghost"
                    onClick={() => openEditModal(user)}
                  />
                  <IconButton
                    icon={<FiTrash2 />}
                    aria-label={user.status === 'active' ? 'Desactivar' : 'Activar'}
                    size="sm"
                    variant="ghost"
                    colorScheme={user.status === 'active' ? 'red' : 'green'}
                    onClick={() => toggleUserStatus(user.id)}
                    rounded={"full"}
                  />
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>


      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editingUser ? 'Benutzer Bearbeiten' : 'Neue Benutzer'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserModalForm form={form} setForm={setForm}/>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" variant="ghost" mr={3} onClick={onClose}>
              Schließen
            </Button>
            <Button size="sm" colorScheme="blue" onClick={handleSave}>
              Speicher
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
