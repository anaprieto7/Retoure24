import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Badge,
  StackDivider,
  useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

interface Comment {
  id: string;
  user: string;
  date: string; // formato corto o ISO
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
  status?: "Pendiente" | "Aprobado" | "Rechazado";
  imageUrl?: string;
  comments?: Comment[];
  history?: HistoryItem[];
}

interface ReturnProductsListProps {
  products: ProductItem[];
}

const statusColor = {
  Pendiente: "orange",
  Aprobado: "green",
  Rechazado: "red",
};

export default function ReturnProductsList({ products }: ReturnProductsListProps) {
  const bg = useColorModeValue("white", "gray.800");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Estado local para comentarios y texto de comentario NUEVO
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");

  // Cuando abres el detalle, inicializas los comentarios del producto seleccionado
  const handleOpenDetail = (product: ProductItem) => {
    setSelectedProduct(product);
    setComments(product.comments ?? []);
    onOpen();
  };

  // Handler para agregar comentario
  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      user: "Usuario actual", // Cambia esto por el usuario real
      date: new Date().toLocaleDateString("de-DE"),
      message: commentText.trim(),
    };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  return (
    <Box bg={bg} p={5} rounded="xl" boxShadow="sm">
      <Text fontWeight="bold" mb={3} fontSize="lg">Productos devueltos</Text>
      <VStack
        divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}
        align="stretch"
        spacing={3}
      >
        {products.map((prod) => (
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
                  SKU: {prod.sku}
                </Text>
              )}
              <Text fontSize="sm">
                Cantidad: <b>{prod.quantity}</b>
              </Text>
              <Text fontSize="sm">
                Motivo: <b>{prod.reason}</b>
              </Text>
            </VStack>
            {prod.status && (
              <Badge colorScheme={statusColor[prod.status]} px={3}>
                {prod.status}
              </Badge>
            )}
            <Button size="sm" onClick={() => handleOpenDetail(prod)}>
              Ver detalle
            </Button>
          </HStack>
        ))}
      </VStack>

      {/* Modal para ver detalle del producto */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedProduct?.name}
          </ModalHeader>
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
                <Text><b>SKU:</b> {selectedProduct.sku || "—"}</Text>
                <Text><b>Menge:</b> {selectedProduct.quantity}</Text>
                <Text><b>Gruend:</b> {selectedProduct.reason}</Text>
                <Text>
                  <b>Status:</b>{" "}
                  <Badge colorScheme={statusColor[selectedProduct.status || "Pendiente"]}>
                    {selectedProduct.status}
                  </Badge>
                </Text>

                {/* Comentarios */}
                <Box w="100%">
                  <Text mt={4} mb={2} fontWeight="bold">Comentarios</Text>
                  <VStack align="start" spacing={2}>
                    {comments.length > 0 ? comments.map((c) => (
                      <Box key={c.id} bg="gray.50" p={2} rounded="md" w="100%">
                        <Text fontSize="xs" color="gray.500">
                          {c.user} • {c.date}
                        </Text>
                        <Text fontSize="sm">{c.message}</Text>
                      </Box>
                    )) : (
                      <Text fontSize="sm" color="gray.400">Sin comentarios.</Text>
                    )}
                  </VStack>
                  {/* Input para nuevo comentario */}
                  <HStack mt={3}>
                    <Input
                      placeholder="Escribe un comentario…"
                      value={commentText}
                      onChange={e => setCommentText(e.target.value)}
                      size="sm"
                    />
                    <IconButton
                      icon={<FiSend />}
                      aria-label="Agregar comentario"
                      size="sm"
                      colorScheme="orange"
                      onClick={handleAddComment}
                      isDisabled={!commentText.trim()}
                    />
                  </HStack>
                </Box>

                {/* Historial de devoluciones */}
                <Box w="100%" mt={4}>
                  <Text mb={2} fontWeight="bold">Historial de devoluciones</Text>
                  <VStack align="start" spacing={2}>
                    {selectedProduct.history && selectedProduct.history.length > 0 ? (
                      selectedProduct.history.map((h) => (
                        <Box key={h.id} bg="gray.50" p={2} rounded="md" w="100%">
                          <Text fontSize="xs" color="gray.500">
                            {h.date}
                          </Text>
                          <Text fontSize="sm">
                            <b>Status:</b> {h.status}
                          </Text>
                          {h.note && <Text fontSize="sm"><b>Nota:</b> {h.note}</Text>}
                        </Box>
                      ))
                    ) : (
                      <Text fontSize="sm" color="gray.400">Sin historial.</Text>
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
