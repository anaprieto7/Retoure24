'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Stack,
  Text,
  Input,
  useToast,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { FiDelete, FiSave, FiUpload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function CompanyLogoUploader() {
  const toast = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation("return")

  const [previewUrl, setPreviewUrl] = useState('/placeholder-logo.jpg')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      toast({ title: t("logo.file_too_large"), status: 'error' })
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
    setSelectedFile(file)
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    const formData = new FormData()
    formData.append('logo', selectedFile)

    // await fetch('/api/account/upload-logo', { method: 'POST', body: formData })
    toast({ title: t("logo.updated"), status: 'success' })
  }

  const handleDelete = async () => {
    setPreviewUrl('/placeholder-logo.jpg')
    setSelectedFile(null)

    // await fetch('/api/account/delete-logo', { method: 'DELETE' })
    toast({ title: t("logo.deleted"), status: 'info' })
  }

    const color= useColorModeValue("gray.700", "gray.300");
    const buttonbgColor = useColorModeValue("blue.500","blue.800")
    const buttonColor = useColorModeValue("white","blue.400")
    const bg = useColorModeValue("white","gray.800")

  return (
    <Box
      bg={bg}
      color={color}
      p={6}
      borderRadius="xl"
      shadow="sm"
      h="100%"
    >
      <Stack spacing={6}>
        <FormControl>
          <Heading size="md">{t("logo.title")}</Heading>
          <Text mt={4} fontSize="sm" color="gray.500">
            {t("logo.instructions")}
          </Text>
          <Image
            src={previewUrl}
            alt={t("logo.alt")}
            boxSize="120px"
            objectFit="contain"
            mt={4}
          />
        </FormControl>

        <Input
          type="file"
          accept="image/png, image/jpeg"
          ref={fileInputRef}
          display="none"
          onChange={handleFileChange}
        />

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} justify="flex-end" mt={6}>
          <Button
            onClick={() => fileInputRef.current?.click()}
            colorScheme="gray"
            variant="outline"
            size="sm"
            leftIcon={<FiUpload />}
            width={{ base: 'full', sm: 'auto' }}
            fontSize="sm"
            _hover={{ boxShadow: 'lg' }}
            _active={{ bg: 'gray.200' }}
            transition="background-color 0.2s ease-in-out"
            boxShadow="sm"
            rounded="md"
            color={useColorModeValue("gray.800", "gray.100")}
            bg={useColorModeValue("gray.50", "gray.900")}
          >
            {t("logo.choose")}
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={handleDelete}
            size="sm"
            leftIcon={<FiDelete />}
            width={{ base: 'full', sm: 'auto' }}
            fontSize="sm"
            _hover={{ boxShadow: 'lg' }}
            _active={{ bg: 'red.200' }}
            transition="background-color 0.2s ease-in-out"
            boxShadow="sm"
            rounded="md"
            color={useColorModeValue("red.800", "red.100")}
            bg={useColorModeValue("", "red.900")}
          >
            {t("logo.delete")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
// This component allows users to upload, preview, and delete a company logo.
// It includes file validation, preview functionality, and buttons for uploading and deleting the logo.
// The component uses Chakra UI for styling and layout, and it integrates with a translation library for internationalization.
// The logo is displayed as a preview image, and users can select a new file or delete the existing one.
// The component handles file size validation and provides feedback through toast notifications.
// The buttons are styled for a consistent look and feel, with hover and active states for better user interaction.
// The component is responsive, adapting to different screen sizes and maintaining usability across devices.