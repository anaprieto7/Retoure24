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

export const RETURN_STATUSES = [
  "Registered",
  "Approved",
  "Received",
  "Refunded",
  "Rejected",
  "Cancelled",
];

interface ReturnActionsProps {
  initialStatus: string;
  onStatusChange: (newStatus: string, note?: string) => void;
}

export default function ReturnActions({
  initialStatus,
  onStatusChange,
}: ReturnActionsProps) {
  const { t } = useTranslation("return");
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleOpenModal = () => {
    if (selectedStatus === initialStatus) return;
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

      onStatusChange(selectedStatus, note); // ← pasamos la nota
      setNote("");
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
              {t(`status.${status}`)} {status === initialStatus ? `(${t("current")})` : ""}
            </option>
          ))}
        </Select>

        <Button
          colorScheme="blue"
          onClick={handleOpenModal}
          isDisabled={selectedStatus === initialStatus}
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
           {/* <Textarea
              placeholder={t("optional_note")}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            /> */}
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
