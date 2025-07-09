"use client";

import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  StackDivider,
  useColorModeValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  Select
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useReturnContext } from "@/context/useReturnContext";

export default function ReturnProductsList() {
  const { t } = useTranslation("return");
  const bg = useColorModeValue("white", "gray.800");
  const { returnData } = useReturnContext();
  const products = returnData.products || [];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
    setComments(product.comments ?? []);
    onOpen();
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComment = {
      id: Date.now().toString(),
      user: "Usuario actual",
      date: new Date().toLocaleDateString("de-DE"),
      message: commentText.trim(),
    };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box >
      <Text fontWeight="bold" mb={3} fontSize="lg">
        {t("returned_products")}
      </Text>

      <VStack
        divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}
        align="stretch"
        spacing={3}
      >
        {totalPages > 1 && (
          <Box display="flex" justifyContent="flex-end" mt={4}>
            <HStack spacing={2}>
              <Button
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                isDisabled={currentPage === 1}
              >
                {t("prev")}
              </Button>
              <Text fontSize="sm">
                {t("page")} {currentPage} {t("of")} {totalPages}
              </Text>
              <Button
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                isDisabled={currentPage === totalPages}
              >
                {t("next")}
              </Button>
            </HStack>
          </Box>
        )}

        {paginatedProducts.map((prod) => (
          <HStack key={prod.id} align="center" spacing={4} onClick={() => handleOpenDetail(prod)} cursor="pointer">
            {prod.imageUrl && (
              <Image
                src={prod.imageUrl}
                alt={prod.name}
                boxSize="48px"
                objectFit="cover"
                borderRadius="md"
                bg="gray.100"
              />
            )}
            <VStack align="start" spacing={0} flex={1}>
              <Text fontWeight="semibold">{prod.name}</Text>
              {prod.sku && (
                <Text fontSize="xs" color="gray.400">
                  {t("sku")}: {prod.sku}
                </Text>
              )}
              <Text fontSize="sm">
                {t("quantity")}: <b>{prod.quantity}</b>
              </Text>
              <Text fontSize="sm">
                {t("reason")}: <b>{prod.reason}</b>
              </Text>
              {typeof prod.price === "number" ? (
                <Text fontSize="sm">
                  {t("price")}: <b>{prod.price.toFixed(2)} €</b>
                </Text>
              ) : (
                <Text fontSize="sm">
                  {t("price")}: <b>{(prod.price ?? 0).toFixed(2)} €</b>
                </Text>
              )}
            </VStack>
          </HStack>
        ))}
      </VStack>

      {totalPages > 1 && (
        <HStack justify="center" mt={4}>
          <Button
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            isDisabled={currentPage === 1}
          >
            {t("prev")}
          </Button>
          <Text fontSize="sm">
            {t("page")} {currentPage} {t("of")} {totalPages}
          </Text>
          <Button
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            isDisabled={currentPage === totalPages}
          >
            {t("next")}
          </Button>
        </HStack>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProduct?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedProduct && (
              <VStack align="start" spacing={4}>
                {selectedProduct.imageUrl && (
                  <Image
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    boxSize="72px"
                    borderRadius="md"
                    mb={2}
                  />
                )}
                <Text><b>{t("sku")}:</b> {selectedProduct.sku || "—"}</Text>
                <Text><b>{t("quantity")}:</b> {selectedProduct.quantity}</Text>
                <Text><b>{t("reason")}:</b> {selectedProduct.reason}</Text>
                <Text><b>{t("price")}:</b> {selectedProduct.price.toFixed(2)} €</Text>

                {/* Comentarios */}
                <Box w="100%">
                  <Text mt={4} mb={2} fontWeight="bold">{t("comments")}</Text>
                  <VStack align="start" spacing={2}>
                    {comments.length > 0 ? (
                      comments.map((c) => (
                        <Box key={c.id} bg="gray.50" p={2} rounded="md" w="100%">
                          <Text fontSize="xs" color="gray.500">
                            {c.user} • {c.date}
                          </Text>
                          <Text fontSize="sm">{c.message}</Text>
                        </Box>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.400">{t("no_comments")}</Text>
                    )}
                  </VStack>
                  <HStack mt={3}>
                    <Input
                      placeholder={t("write_comment")}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      size="sm"
                    />
                    <IconButton
                      icon={<FiSend />}
                      aria-label={t("add_comment")}
                      size="sm"
                      colorScheme="orange"
                      onClick={handleAddComment}
                      isDisabled={!commentText.trim()}
                    />
                  </HStack>
                </Box>

                {/* Historial */}
                <Box w="100%" mt={4}>
                  <Text mb={2} fontWeight="bold">{t("return_history")}</Text>
                  <VStack align="start" spacing={2}>
                    {selectedProduct.history?.length > 0 ? (
                      selectedProduct.history.map((h) => (
                        <Box key={h.id} bg="gray.50" p={2} rounded="md" w="100%">
                          <Text fontSize="xs" color="gray.500">{h.date}</Text>
                          <Text fontSize="sm"><b>{t("status")}:</b> {h.status}</Text>
                          {h.note && (
                            <Text fontSize="sm"><b>{t("note")}:</b> {h.note}</Text>
                          )}
                        </Box>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.400">{t("no_history")}</Text>
                    )}
                  </VStack>
                </Box>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
// This component displays a list of returned products with pagination.
// Users can click on a product to see more details in a modal, including comments and history.
// It uses Chakra UI for styling and i18next for translations.
// The component supports pagination and allows users to add comments to each product.
// The modal shows product details, comments, and history of the return.