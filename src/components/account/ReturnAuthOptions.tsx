'use client'

import {
  Box,
  Heading,
  Stack,
  Text,
  Badge,
  Switch,
  Flex,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const options = [
  {
    id: 'zip',
    labelKey: 'access.zip',
    recommended: true,
  },
  {
    id: 'email',
    labelKey: 'access.email',
  },
  {
    id: 'phone',
    labelKey: 'access.phone',
  },
  {
    id: 'credit',
    labelKey: 'access.credit',
  },
  {
    id: 'passport',
    labelKey: 'access.passport',
    optional: true,
  },
]

export default function ReturnAccessOptions() {
  const { t } = useTranslation("return")
  const [selected, setSelected] = useState('zip')
  const toast = useToast()

  const handleToggle = (id: string) => {
    setSelected(id)
    toast({
      title: t('access.selected') + ": " + t(options.find(o => o.id === id)?.labelKey || id),
      status: 'info',
      duration: 1200,
      isClosable: true,
    })
  }

  return (
    <Box p={6} mt={5} mb={6} borderRadius="lg" shadow="base" bg={useColorModeValue("white", "gray.700")} color={useColorModeValue("gray.800", "gray.300")}>
      <Heading size="md" mb={4}>
        {t("access.title")}
      </Heading>

      <Stack spacing={4}>
        {options.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <Flex
              key={opt.id}
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("white", "gray.700")}
              borderWidth="1px"
              borderColor={isSelected ? 'orange.500' : 'gray.200'}
              justify="space-between"
              align="center"
              boxShadow={isSelected ? 'sm' : 'none'}
              _hover={{ borderColor: 'gray.400' }}
              transition="all 0.2s"
              onClick={() => handleToggle(opt.id)}
              cursor="pointer"
            >
              <Box>
                <Text fontWeight="medium">
                  {t(opt.labelKey)}
                </Text>
                <Stack direction="row" spacing={2} mt={1}>
                  {opt.recommended && (
                    <Badge colorScheme="teal" fontSize="xs">
                      {t("access.recommended")}
                    </Badge>
                  )}
                  {opt.optional && (
                    <Badge colorScheme="gray" fontSize="xs">
                      {t("access.optional")}
                    </Badge>
                  )}
                </Stack>
              </Box>
              <Switch
                isChecked={isSelected}
                onChange={() => handleToggle(opt.id)}
                colorScheme="orange"
              />
            </Flex>
          )
        })}
      </Stack>
    </Box>
  )
}
