"use client";

import {
  VStack,
  Button,
  Select,
  useToast,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useReturnContext } from "@/context/useReturnContext";

const RETURN_STATUSES = [
  "Registered",
  "Approved",
  "Received",
  "Refunded",
  "Rejected",
  "Cancelled",
];


export default function ReturnActions() {
  const { t } = useTranslation("return");
  const { currentStatus, setCurrentStatus, setNote } = useReturnContext();

  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [localNote, setLocalNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleOpenModal = () => {
    if (selectedStatus === currentStatus) return;
    onOpen();
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000)); // simula API

      toast({
        title: t("status_updated"),
        description: t("status_changed_to", {
          status: t(`status.${selectedStatus}`),
        }),
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setCurrentStatus(selectedStatus);
      setNote(localNote); // ← guardamos la nota en contexto
      setLocalNote("");
      onClose();
    } catch (err) {
      toast({
        title: t("error_updating_status"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <VStack spacing={4} align="stretch">
        <Text fontWeight="bold">{t("actions.change_status")}</Text>

        <Select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {RETURN_STATUSES.map((status) => (
            <option key={status} value={status}>
              {t(`status.${status}`)} {status === currentStatus ? `(${t("current")})` : ""}
            </option>
          ))}
        </Select>

        <Button
          colorScheme="blue"
          onClick={handleOpenModal}
          isDisabled={selectedStatus === currentStatus}
        >
          {t("actions.confirm_change")}
        </Button>
      </VStack>

      {/* Modal de confirmación */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("confirm_status_change_title")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3}>
              {t("confirm_status_change", {
                status: t(`status.${selectedStatus}`),
              })}
            </Text>
            <Textarea
              placeholder={t("optional_note")}
              value={localNote}
              onChange={(e) => setLocalNote(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="ghost" mr={3}>
              {t("cancel")}
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleConfirm}
              isLoading={isLoading}
            >
              {t("confirm")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
// This component provides actions for managing the return status.
// It allows users to change the status of a return and add an optional note.
// The status options are defined in a constant array, and the component uses Chakra UI for styling.
// A modal is used for confirmation before changing the status, and it provides feedback via toast notifications.
// The component is responsive and user-friendly, ensuring a smooth experience when managing returns.