'use client'

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
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Reason = {
  id: number
  reasonKey: string
  descriptionKey: string
  status: 'active' | 'inactive'
}

export default function ReturnReasonsList() {
  const { t } = useTranslation('return')

  const [reasons, setReasons] = useState<Reason[]>([
    {
      id: 1,
      reasonKey: 'return_reason.reasons.size',
      descriptionKey: 'return_reason.reasons.size_desc',
      status: 'active',
    },
    {
      id: 2,
      reasonKey: 'return_reason.reasons.defect',
      descriptionKey: 'return_reason.reasons.defect_desc',
      status: 'active',
    },
    {
      id: 3,
      reasonKey: 'return_reason.reasons.not_expected',
      descriptionKey: 'return_reason.reasons.not_expected_desc',
      status: 'inactive',
    },
  ])

  const [form, setForm] = useState({ reasonKey: '', descriptionKey: '', status: 'active' })
  const [editingReason, setEditingReason] = useState<Reason | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const reasonsPerPage = 5

  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const totalPages = Math.ceil(reasons.length / reasonsPerPage)
  const paginatedReasons = reasons.slice((currentPage - 1) * reasonsPerPage, currentPage * reasonsPerPage)

  const openAddModal = () => {
    setEditingReason(null)
    setForm({ reasonKey: '', descriptionKey: '', status: 'active' })
    onOpen()
  }

  const openEditModal = (item: Reason) => {
    setEditingReason(item)
    setForm({
      reasonKey: item.reasonKey,
      descriptionKey: item.descriptionKey,
      status: item.status,
    })
    onOpen()
  }

  const handleSave = () => {
    if (!form.reasonKey || !form.descriptionKey) {
      toast({ title: t('return_reason.fill_all_fields'), status: 'warning' })
      return
    }

    if (editingReason) {
      const updated = reasons.map((r) =>
        r.id === editingReason.id ? { ...r, ...form } : r
      )
      setReasons(updated)
      toast({ title: t('return_reason.reason_updated'), status: 'success' })
    } else {
      const newReason = {
        id: Date.now(),
        ...form,
      }
      setReasons([...reasons, newReason])
      toast({ title: t('return_reason.reason_added'), status: 'success' })
    }

    setForm({ reasonKey: '', descriptionKey: '', status: 'active' })
    setEditingReason(null)
    onClose()
  }

  const handleDelete = (id: number) => {
    setReasons(reasons.filter((r) => r.id !== id))
    toast({ title: t('return_reason.reason_deleted'), status: 'info' })

    if ((reasons.length - 1) % reasonsPerPage === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const color= useColorModeValue("gray.700", "gray.300");
  const buttonbgColor = useColorModeValue("blue.500","blue.800")
  const buttonColor = useColorModeValue("white","blue.400")
  const bg = useColorModeValue("white","gray.800")

  return (
    <Box bg={bg} color={color} p={6} borderRadius="md" shadow="sm" mt={10}>
      <Stack direction="row" justify="space-between" align="center" mb={4}>
        <Heading size="md">{t('return_reason.return_reasons')}</Heading>
        <Button size="sm" leftIcon={<FiPlus />} bg={buttonbgColor} color={buttonColor} onClick={openAddModal}>
          {t('return_reason.add_reason')}
        </Button>
      </Stack>

      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th>{t('return_reason.reason')}</Th>
            <Th>{t('return_reason.description')}</Th>
            <Th>{t('return_reason.status_table')}</Th>
            <Th textAlign="center">{t('return_reason.actions')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paginatedReasons.map((item) => (
            <Tr key={item.id}>
              <Td fontSize={"sm"}>{t(item.reasonKey)}</Td>
              <Td fontSize={"sm"}>{t(item.descriptionKey)}</Td>
              <Td>
                <Badge colorScheme={item.status === 'active' ? 'green' : 'red'}>
                  {t(`return_reason.status.${item.status}`)}
                </Badge>
              </Td>
              <Td textAlign="center">
                <Stack direction="row" justify="center">
                  <IconButton icon={<FiEdit2 />} aria-label="Edit" size="sm" variant="ghost" onClick={() => openEditModal(item)} />
                  <IconButton icon={<FiTrash2 />} aria-label="Delete" size="sm" variant="ghost" colorScheme="red" onClick={() => handleDelete(item.id)} />
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
          <ModalHeader>{editingReason ? t('return_reason.edit_reason') : t('return_reason.add_reason')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>{t('return_reason.reason')}</FormLabel>
                <Input
                  value={form.reasonKey}
                  onChange={(e) => setForm({ ...form, reasonKey: e.target.value })}
                  placeholder="return_reason.reasons.new_reason"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>{t('return_reason.description')}</FormLabel>
                <Input
                  value={form.descriptionKey}
                  onChange={(e) => setForm({ ...form, descriptionKey: e.target.value })}
                  placeholder="return_reason.reasons.new_description"
                />
              </FormControl>
              <FormControl>
                <FormLabel>{t('return_reason.status')}</FormLabel>
                <Select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value as 'active' | 'inactive' })}
                >
                  <option value="active">{t('return_reason.status.active')}</option>
                  <option value="inactive">{t('return_reason.status.inactive')}</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button size={"sm"} variant="ghost" mr={3} onClick={onClose}>
              {t('return_reason.cancel')}
            </Button>
            <Button size={"sm"} colorScheme="blue" onClick={handleSave}>
              {t('return_reason.save')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
