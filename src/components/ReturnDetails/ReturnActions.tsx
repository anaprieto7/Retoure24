import {
  HStack,
  Button,
  Icon,
  Badge,
  Text,
  useToast,
  Box,
} from "@chakra-ui/react";
import { FiCheck, FiXCircle, FiDownload, FiRotateCw } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RefundStatus = "Pending" | "Approved" | "Rejected";

interface ReturnActionsProps {
  initialStatus: RefundStatus;
  onApprove?: () => void;
  onReject?: () => void;
  onDownloadLabel?: () => void;
}

export default function ReturnActions({
  initialStatus,
  onApprove,
  onReject,
  onDownloadLabel,
}: ReturnActionsProps) {
  const [status, setStatus] = useState<RefundStatus>(initialStatus);
  const [undoTimeout, setUndoTimeout] = useState<NodeJS.Timeout | null>(null);
  const [prevStatus, setPrevStatus] = useState<RefundStatus | null>(null);
  const toast = useToast();

  const handleApprove = () => {
    setPrevStatus(status);
    setStatus("Approved");
    onApprove?.();
    toast({
      title: "Return approved",
      status: "success",
      duration: 1200,
      isClosable: true,
    });
    startUndoTimeout();
  };

  const handleReject = () => {
    setPrevStatus(status);
    setStatus("Rejected");
    onReject?.();
    toast({
      title: "Return rejected",
      status: "error",
      duration: 1200,
      isClosable: true,
    });
    startUndoTimeout();
  };

  const handleDownload = () => {
    onDownloadLabel?.();
    toast({
      title: "Label downloaded",
      status: "info",
      duration: 1000,
      isClosable: true,
    });
  };

  // Undo logic
  const startUndoTimeout = () => {
    if (undoTimeout) clearTimeout(undoTimeout);
    const timeout = setTimeout(() => {
      setPrevStatus(null);
    }, 3000);
    setUndoTimeout(timeout);
  };

  const handleUndo = () => {
    if (prevStatus) setStatus(prevStatus);
    setPrevStatus(null);
    if (undoTimeout) clearTimeout(undoTimeout);
  };

  console.log("Initial status:", initialStatus, "Current status:", status);
    // Renderiza los botones y badges según el estado actual

  return (
    <AnimatePresence mode="wait">
      <Box key={status} as={motion.div} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
        <HStack spacing={4}>
          {status === "Pending" && (
            <>
              <Button
                _hover={{ boxShadow: "md", opacity: 0.9 }}
                leftIcon={<FiCheck />}
                colorScheme="green"
                size="md"
                onClick={handleApprove}
                variant="solid"
              >
                Approve
              </Button>
              <Button
                _hover={{ boxShadow: "md", opacity: 0.9 }}
                leftIcon={<FiXCircle />}
                colorScheme="red"
                size="md"
                variant="outline"
                onClick={handleReject}
              >
                Reject
              </Button>
            </>
          )}
          {status === "Approved" && (
            <>
              <Badge colorScheme="green" px={4} py={1} borderRadius="lg" fontSize="md">
                <Icon as={FiCheck} mr={1} /> Approved
              </Badge>
              {prevStatus && (
                <Button
                  size="sm"
                  variant="ghost"
                  leftIcon={<FiRotateCw />}
                  onClick={handleUndo}
                  colorScheme="gray"
                >
                  Undo
                </Button>
              )}
            </>
          )}
          {status === "Rejected" && (
            <>
              <Badge colorScheme="red" px={4} py={1} borderRadius="lg" fontSize="md">
                <Icon as={FiXCircle} mr={1} /> Rejected
              </Badge>
              {prevStatus && (
                <Button
                  size="sm"
                  variant="ghost"
                  leftIcon={<FiRotateCw />}
                  onClick={handleUndo}
                  colorScheme="gray"
                >
                  Undo
                </Button>
              )}
            </>
          )}
          <Button
            leftIcon={<FiDownload />}
            colorScheme="orange"
            size="md"
            variant="ghost"
            onClick={handleDownload}
          >
            Download label
          </Button>
        </HStack>
        {/* Mensaje animado */}
        {prevStatus && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{ marginTop: 4 }}
          >
            <Text color="gray.500" fontSize="xs">
              You can undo this action for 3 seconds.
            </Text>
          </motion.div>
        )}
      </Box>
    </AnimatePresence>
  );
}
// Este componente maneja las acciones de devolución como aprobar, rechazar y descargar etiquetas.