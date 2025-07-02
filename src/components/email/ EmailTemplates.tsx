"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  VStack,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    // Simular guardado (en real llamar API)
    setTimeout(() => {
      onUpdateTemplate(localTemplates[activeTabIndex]);
      setIsSaving(false);
    }, 1000);
  }

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} bg="white" shadow="sm" mb={6}>
      <Text fontWeight="bold" mb={4}>
        {t("emailTracking.templates.title")}
      </Text>
      <Tabs
        index={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
        variant="enclosed"
        colorScheme="orange"
      >
        <TabList>
          <Tab>{t("emailTracking.templates.returnAccepted")}</Tab>
          <Tab>{t("emailTracking.templates.returnDelivered")}</Tab>
          <Tab>{t("emailTracking.templates.receivedWarehouse")}</Tab>
        </TabList>

        <TabPanels>
          {localTemplates.map((tpl) => (
            <TabPanel key={tpl.id}>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>{t("emailTracking.templates.subject")}</FormLabel>
                  <Input
                    value={tpl.subject}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                    placeholder={t("emailTracking.templates.subjectPlaceholder")}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>{t("emailTracking.templates.content")}</FormLabel>
                  <Textarea
                    rows={8}
                    value={tpl.content}
                    onChange={(e) => handleContentChange(e.target.value)}
                    placeholder={t("emailTracking.templates.contentPlaceholder")}
                  />
                </FormControl>

                <Button
                  colorScheme="orange"
                  onClick={handleSave}
                  isLoading={isSaving}
                  loadingText={t("emailTracking.templates.saving")}
                  alignSelf="flex-end"
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
