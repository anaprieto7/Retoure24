"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
  VStack,
  CheckboxGroup,
  Checkbox
} from "@chakra-ui/react";
import { useState } from "react";
import { mockWarehouses } from "@/data/mockWarehouses";
import { mockShops } from "@/data/mockShops";

interface AddShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (shop: any) => void;
}

export default function AddShopModal({ isOpen, onClose, onSave }: AddShopModalProps) {
  const toast = useToast();
  const [form, setForm] = useState({
    name: "",
    warehouseId: "",
    welcomeText: "",
    primaryColor: "#FF6A00",
    requiredFields: ["orderNumber"],
    returnPolicy: "",
    language: "de",
  });

  const handleSubmit = () => {
    if (!form.name || !form.warehouseId) {
      toast({
        title: "Faltan campos obligatorios",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newShop = {
      id: `shop-${Date.now()}`,
      ...form,
    };

    onSave(newShop); // esta función debería agregar el shop al mock o persistirlo luego
    onClose();
    setForm({
      name: "",
      warehouseId: "",
      welcomeText: "",
      primaryColor: "#FF6A00",
      requiredFields: ["orderNumber"],
      returnPolicy: "",
      language: "de",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Neue Shop</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Shop Name</FormLabel>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </FormControl>

            <FormControl  isRequired>
              <FormLabel>Link to Shop</FormLabel>
              <Input
                value={form.linkShop}
                onChange={(e) => setForm({ ...form, linkShop: e.target.value })}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} variant="ghost" mr={3}>
            Cancelar
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
// This component allows users to add a new shop with various configurations.