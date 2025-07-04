"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit } from "react-icons/fi";
import dynamic from "next/dynamic";

// Import dinámico para evitar errores de SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import type { EmailTemplate, EmailTemplatesProps } from "./types";


export default function EmailTemplates({
  templates,
  onUpdateTemplate,
}: EmailTemplatesProps) {
  const { t } = useTranslation("return");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [localTemplates, setLocalTemplates] = useState<EmailTemplate[]>(templates);
  const [isSaving, setIsSaving] = useState(false);

  const currentTemplate = localTemplates[activeTabIndex];

  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  function handleSubjectChange(value: string) {
    setLocalTemplates((prev) =>
      prev.map((tpl, i) =>
        i === activeTabIndex ? { ...tpl, subject: value } : tpl
      )
    );
  }

  function handleContentChange(value: string) {
    setLocalTemplates((prev) =>
      prev.map((tpl, i) =>
        i === activeTabIndex ? { ...tpl, content: value } : tpl
      )
    );
  }

  function handleSave() {
    setIsSaving(true);
    setTimeout(() => {
      onUpdateTemplate(localTemplates[activeTabIndex]);
      setIsSaving(false);
    }, 1000);
  }

  return (
    <Box
      borderRadius="md"
      p={6}
      bg={bg}
      border="1px solid"
      borderColor={border}
      shadow="sm"
      mb={6}
    >
      <Text fontWeight="bold" fontSize="lg" mb={4}>
        {t("emailTracking.templates.title")}
      </Text>
      <Tabs
        index={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
        variant="enclosed"
        colorScheme="blue"
        isFitted
      >
        <TabList>
          <Tab fontSize="sm">{t("emailTracking.templates.returnAccepted")}</Tab>
          <Tab fontSize="sm">{t("emailTracking.templates.returnDelivered")}</Tab>
          <Tab fontSize="sm">{t("emailTracking.templates.receivedWarehouse")}</Tab>
        </TabList>

        <TabPanels>
          {localTemplates.map((tpl) => (
            <TabPanel key={tpl.id}>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel fontSize="sm">{t("emailTracking.templates.subject")}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FiEdit />
                    </InputLeftElement>
                    <Input
                      fontSize="sm"
                      value={tpl.subject}
                      onChange={(e) => handleSubjectChange(e.target.value)}
                      placeholder={t("emailTracking.templates.subjectPlaceholder")}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">{t("emailTracking.templates.content")}</FormLabel>
                  <Box
                    sx={{
                      ".ql-editor": {
                        minHeight: "200px",
                        fontSize: "sm",
                        bg: useColorModeValue("white", "gray.700"),
                        color: useColorModeValue("black", "white"),
                        borderRadius: "md",
                      },
                    }}
                  >
                    <ReactQuill
                      theme="snow"
                      value={tpl.content}
                      onChange={handleContentChange}
                      placeholder={t("emailTracking.templates.contentPlaceholder") ?? ""}
                    />
                  </Box>
                </FormControl>

                <Button
                  colorScheme="blue"
                  size="sm"
                  onClick={handleSave}
                  isLoading={isSaving}
                  loadingText={t("address_form.saving")}
                  alignSelf="flex-start"
                  fontSize="sm"
                >
                  {t("emailTracking.templates.saveTemplate")}
                </Button>
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
