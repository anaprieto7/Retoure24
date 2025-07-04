"use client";

import { useState } from "react";
import { Stack, Grid, Flex } from "@chakra-ui/react";
import { FiSettings, FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import SettingsPageHeader from "@/components/SettingsPageHeader";
import AddressInfoSection from "@/components/address/AddressInfoSection";
import AddNewAddress from "@/components/address/AddNewAddress";
import AddressCard from "@/components/address/AddressCard";
import EditAddressModal from "@/components/address/EditAddressModal"; // Importa el modal de edición

import addressMock from "@/data/addressMock";

export default function AddressView() {
  const { t } = useTranslation("setting");

  const breadcrumbs = [
    { labelKey: "setting", href: "/setup/account", icon: FiSettings },
    { labelKey: "addresses", icon: FiMapPin },
  ];

  const [addresses, setAddresses] = useState(addressMock);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const openEditModal = (address) => {
    setAddressToEdit(address);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setAddressToEdit(null);
    setEditModalOpen(false);
  };

  const saveEditedAddress = (editedAddress) => {
    setAddresses((prev) =>
      prev.map((addr) => (addr.id === editedAddress.id ? editedAddress : addr))
    );
    closeEditModal();
  };

  return (
    <Stack p={6} maxW="container.lg" mx="auto" spacing={6}>
      <BreadcrumbNav items={breadcrumbs} />
      <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                gap={4}
                mb={0}
              >
                <SettingsPageHeader />
                <AddNewAddress />
        </Flex>
      
      <AddressInfoSection />

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        mt={6}
      >
        {addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            type={addr.type}
            company={addr.company}
            street={addr.street}
            postalCode={addr.postalCode}
            city={addr.city}
            country={addr.country}
            isMain={addr.isMain}
            isActive={addr.isActive}
            onEdit={() => openEditModal(addr)}
          />
        ))}
      </Grid>

      {addressToEdit && (
        <EditAddressModal
          isOpen={editModalOpen}
          onClose={closeEditModal}
          initialData={addressToEdit}
          onSave={saveEditedAddress}
        />
      )}
    </Stack>
  );
}
