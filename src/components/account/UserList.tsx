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
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { FiUserPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

export default function UserList() {
  const { t } = useTranslation('return');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Anna Becker', email: 'anna@firma.de', role: 'Admin', status: 'active' },
    { id: 2, name: 'Karl Meier', email: 'karl@firma.de', role: 'Editor', status: 'inactive' },
    { id: 3, name: 'Julia Sommer', email: 'julia@firma.de', role: 'Editor', status: 'active' },
    { id: 4, name: 'Lukas Weber', email: 'lukas@firma.de', role: 'Admin', status: 'active' },
    { id: 5, name: 'Mia Schneider', email: 'mia@firma.de', role: 'Editor', status: 'active' },
    { id: 6, name: 'Leon König', email: 'leon@firma.de', role: 'Editor', status: 'inactive' },
  ]);

  const [form, setForm] = useState({ name: '', email: '', role: 'Editor', status: 'active' });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginatedUsers = users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  const openAddModal = () => {
    setEditingUser(null);
    setForm({ name: '', email: '', role: 'Editor', status: 'active' });
    onOpen();
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });
    onOpen();
  };

  const handleSave = () => {
    if (!form.name || !form.email) {
      toast({ title: t('user.fill_all_fields'), status: 'warning' });
      return;
    }

    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...form } : u)));
      toast({ title: t('user.user_updated'), status: 'success' });
    } else {
      const newUser = {
        id: Date.now(),
        ...form,
      };
      setUsers([...users, newUser]);
      toast({ title: t('user.user_added'), status: 'success' });
    }

    onClose();
    setEditingUser(null);
    setForm({ name: '', email: '', role: 'Editor', status: 'active' });
  };

  const handleDelete = (userId: number) => {
    setUsers(users.filter((u) => u.id !== userId));
    toast({ title: t('user.user_deleted'), status: 'info' });

    if ((users.length - 1) % usersPerPage === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      color={useColorModeValue('gray.800', 'gray.300')}
      mt={3}
      p={6}
      borderRadius="md"
      shadow="sm"
    >
      <Stack direction="row" justify="space-between" align="center" mb={4}>
        <Heading size="md">{t('user.title')}</Heading>
        <Button size="sm" leftIcon={<FiUserPlus />} colorScheme="blue" onClick={openAddModal}>
          {t('user.add')}
        </Button>
      </Stack>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>{t('user.name')}</Th>
            <Th>{t('user.email')}</Th>
            <Th>{t('user.role')}</Th>
            <Th>{t('user.status')}</Th>
            <Th textAlign="center">{t('user.actions')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paginatedUsers.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Badge colorScheme={user.role === 'Admin' ? 'purple' : 'blue'}>
                  {t(user.role.toLowerCase())}
                </Badge>
              </Td>
              <Td>
                <Badge colorScheme={user.status === 'active' ? 'green' : 'red'}>
                  {t(user.status)}
                </Badge>
              </Td>
              <Td textAlign="center">
                <Stack direction="row" justify="center">
                  <IconButton
                    aria-label="Edit"
                    icon={<FiEdit2 />}
                    size="sm"
                    variant="ghost"
                    onClick={() => openEditModal(user)}
                  />
                  <IconButton
                    aria-label="Delete"
                    icon={<FiTrash2 />}
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => handleDelete(user.id)}
                  />
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Stack direction="row" justify="center" mt={6} spacing={2}>
        <IconButton
          icon={<span>‹</span>}
          aria-label="Previous"
          size="sm"
          isDisabled={currentPage === 1}
          variant="ghost"
          onClick={() => setCurrentPage(currentPage - 1)}
          rounded={"full"}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            size="sm"
            rounded={"full"}
            colorScheme="orange"
            onClick={() => setCurrentPage(i + 1)}
            variant={currentPage === i + 1 ? 'solid' : 'ghost'}
          >
            {i + 1}
          </Button>
        ))}
        <IconButton
          icon={<span>›</span>}
          aria-label="Next"
          size="sm"
          isDisabled={currentPage === totalPages}
          variant="ghost"
          onClick={() => setCurrentPage(currentPage + 1)}
          rounded={"full"}
        />
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editingUser ? t('user.edit_user') : t('user.add_user')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>{t('user.name')}</FormLabel>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </FormControl>
              <FormControl>
                <FormLabel>{t('user.email')}</FormLabel>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </FormControl>
              <FormControl>
                <FormLabel>{t('user.role')}</FormLabel>
                <Select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="Admin">{t('user.admin')}</option>
                  <option value="Editor">{t('user.editor')}</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>{t('user.status')}</FormLabel>
                <Select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value="active">{t('active')}</option>
                  <option value="inactive">{t('inactive')}</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button size={"sm"}  variant="ghost" mr={3} onClick={onClose}>
              {t('user.cancel')}
            </Button>
            <Button size={"sm"} colorScheme="blue" onClick={handleSave}>
              {t('user.save')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
