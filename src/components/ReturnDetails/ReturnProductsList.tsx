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

interface Comment {
  id: string;
  user: string;
  date: string;
  message: string;
}

interface HistoryItem {
  id: string;
  date: string;
  status: string;
  note?: string;
}

interface ProductItem {
  id: string;
  name: string;
  sku?: string;
  quantity: number;
  reason: string;
  price: number;
  imageUrl?: string;
  comments?: Comment[];
  history?: HistoryItem[];
}

interface ReturnProductsListProps {
  products: ProductItem[];
  subtotal?: number;
  deductions?: number;
  total?: number;
}

export default function ReturnProductsList({
  products,
  subtotal,
  deductions,
  total,
}: ReturnProductsListProps) {
  const { t } = useTranslation("return");
  const bg = useColorModeValue("white", "gray.800");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");

  const handleOpenDetail = (product: ProductItem) => {
    setSelectedProduct(product);
    setComments(product.comments ?? []);
    onOpen();
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = {
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
    <Box bg={bg} p={5} rounded="xl" boxShadow="sm">
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
          <HStack key={prod.id} align="center" spacing={4}>
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
                <Text>
                  <b>{t("sku")}:</b> {selectedProduct.sku || "—"}
                </Text>
                <Text>
                  <b>{t("quantity")}:</b> {selectedProduct.quantity}
                </Text>
                <Text>
                  <b>{t("reason")}:</b> {selectedProduct.reason}
                </Text>
                <Text>
                  <b>{t("price")}:</b> {selectedProduct.price.toFixed(2)} €
                </Text>

                {/* Comentarios */}
                <Box w="100%">
                  <Text mt={4} mb={2} fontWeight="bold">
                    {t("comments")}
                  </Text>
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
                      <Text fontSize="sm" color="gray.400">
                        {t("no_comments")}
                      </Text>
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
                  <Text mb={2} fontWeight="bold">
                    {t("return_history")}
                  </Text>
                  <HStack justify="space-between" mb={3}>
                    <Text fontWeight="bold" fontSize="lg">
                      {t("returned_products")}
                    </Text>
                    <HStack spacing={2}>
                      <Text fontSize="sm" color="gray.500">
                        {t("items_per_page")}:
                      </Text>
                      <Select
                        size="sm"
                        width="70px"
                        value={itemsPerPage}
                        onChange={(e) => {
                          setItemsPerPage(Number(e.target.value));
                          setCurrentPage(1); // Reset page
                        }}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                      </Select>
                    </HStack>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {selectedProduct.history && selectedProduct.history.length > 0 ? (
                      selectedProduct.history.map((h) => (
                        <Box key={h.id} bg="gray.50" p={2} rounded="md" w="100%">
                          <Text fontSize="xs" color="gray.500">
                            {h.date}
                          </Text>
                          <Text fontSize="sm">
                            <b>{t("status")}:</b> {h.status}
                          </Text>
                          {h.note && (
                            <Text fontSize="sm">
                              <b>{t("note")}:</b> {h.note}
                            </Text>
                          )}
                        </Box>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.400">
                        {t("no_history")}
                      </Text>
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
