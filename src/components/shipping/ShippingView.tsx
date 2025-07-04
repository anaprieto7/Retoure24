"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Stack, Flex
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiSettings, FiTruck } from "react-icons/fi";
import ShippingProviderCard from "./ShippingProviderCard";
import AddEditProviderModal from "./AddEditProviderModal";
import SettingsPageHeader from '@/components/SettingsPageHeader'
import BreadcrumbNav from "../BreadcrumbNav";
import { FiPlus } from 'react-icons/fi'

const NATIONAL_CODE = "NACIONAL";

const europeanCountries = [
  { code: NATIONAL_CODE, labelKey: "shipping.national" },
  { code: "DE", labelKey: "shipping.countries.DE" },
  { code: "FR", labelKey: "shipping.countries.FR" },
  { code: "ES", labelKey: "shipping.countries.ES" },
  { code: "IT", labelKey: "shipping.countries.IT" },
  { code: "NL", labelKey: "shipping.countries.NL" },
];

// Configuración paginación
const ITEMS_PER_PAGE = 6; // 3 columnas x 2 filas

export default function ShippingView() {
  const { t } = useTranslation("return");

  // Estado global proveedores (mock)
  const [providers, setProviders] = useState([
    {
      id: "1",
      name: "DHL",
      contractNumber: "DHL123",
      country: NATIONAL_CODE,
      logoUrl: "/logos/dhl.png",
    },
    {
      id: "2",
      name: "GLS",
      contractNumber: "GLS456",
      country: "DE",
      logoUrl: "/logos/gls.png",
    },
    {
      id: "3",
      name: "UPS",
      contractNumber: "UPS789",
      country: "FR",
      logoUrl: "/logos/ups.png",
    },
    {
      id: "4",
      name: "FedEx",
      contractNumber: "FEDX101",
      country: "DE",
      logoUrl: "/logos/fedex.png",
    },
    {
      id: "5",
      name: "DPD",
      contractNumber: "DPD202",
      country: "ES",
      logoUrl: "/logos/dpd.png",
    },
    {
      id: "6",
      name: "TNT",
      contractNumber: "TNT303",
      country: "NL",
      logoUrl: "/logos/tnt.png",
    },
    {
      id: "7",
      name: "Hermes",
      contractNumber: "HER404",
      country: NATIONAL_CODE,
      logoUrl: "/logos/hermes.png",
    },
    {
      id: "8",
      name: "GLS France",
      contractNumber: "GLS505",
      country: "FR",
      logoUrl: "/logos/gls-fr.png",
    },
  ]);

  // Estado UI
  const [activeTabIndex, setActiveTabIndex] = useState(0); // 0 = Nacional, 1 = Internacional
  const [activeCountryCode, setActiveCountryCode] = useState(europeanCountries[1].code); // Primer país internacional por defecto
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [providerToEdit, setProviderToEdit] = useState(null);

 //BredCrumbs
  const breadcrumbs = [
     { labelKey: "setting", href: "/setup/account", icon: FiSettings },
     { labelKey: "shipping", icon: FiTruck},
   ];

  // Responsive columnas (1 en móvil, 2 en tablet, 3 en desktop)
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 3;

  // Filtrar proveedores nacional e internacional
  const nationalProviders = providers.filter((p) => p.country === NATIONAL_CODE);
  const internationalProviders = providers.filter((p) => p.country === activeCountryCode);

  // Paginación: calcular items y páginas
  const paginate = (items) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  };

  const totalPages = (items) => Math.ceil(items.length / ITEMS_PER_PAGE);

  // Abrir modal para agregar
  function openAddModal() {
    setProviderToEdit(null);
    setIsModalOpen(true);
  }

  // Abrir modal para editar
  function openEditModal(provider) {
    setProviderToEdit(provider);
    setIsModalOpen(true);
  }

  // Guardar nuevo o editado
  function saveProvider(provider) {
    setProviders((prev) => {
      const exists = prev.find((p) => p.id === provider.id);
      if (exists) {
        return prev.map((p) => (p.id === provider.id ? provider : p));
      }
      return [...prev, { ...provider, id: (Date.now()).toString() }];
    });
    setIsModalOpen(false);
  }

  // Cambiar tab principal
  function handleTabChange(index) {
    setActiveTabIndex(index);
    setCurrentPage(1);
  }

  // Cambiar país internacional
  function handleCountryTabChange(index) {
    setActiveCountryCode(europeanCountries[index + 1].code); // +1 porque 0 es Nacional
    setCurrentPage(1);
  }

  // Cambiar página
  function handlePageChange(page) {
    setCurrentPage(page);
  }

  // Items a mostrar según tab activo
  const displayedProviders =
    activeTabIndex === 0 ? nationalProviders : internationalProviders;

  const pagesCount = totalPages(displayedProviders);
  const pagedProviders = paginate(displayedProviders);

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
          <Button leftIcon={<FiPlus />} size={"sm"} colorScheme="blue" onClick={openAddModal}>
            {t("shipping.add_new_provider")}
          </Button>
        </Flex>

        <Text fontSize={"sm"} mt={0}>{t("shipping.description")}</Text>
      <VStack spacing={4} align="stretch">
       

        <Tabs
          index={activeTabIndex}
          onChange={handleTabChange}
          isFitted
          variant="enclosed"
        >
          <TabList>
            <Tab fontSize={"sm"}>{t("shipping.national")}</Tab>
            <Tab fontSize={"sm"}>{t("shipping.international")}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Tab Nacional */}
              {nationalProviders.length === 0 ? (
                <Text>{t("shipping.no_providers")}</Text>
              ) : (
                <>
                  <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
                    {pagedProviders.map((provider) => (
                      <ShippingProviderCard
                        key={provider.id}
                        provider={provider}
                        onEdit={() => openEditModal(provider)}
                      />
                    ))}
                  </Grid>
                  {pagesCount > 1 && (
                    <HStack mt={4} justify="center" spacing={2}>
                      {Array.from({ length: pagesCount }).map((_, idx) => {
                        const page = idx + 1;
                        return (
                          <Button
                            key={page}
                            size="sm"
                            variant={page === currentPage ? "solid" : "outline"}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </HStack>
                  )}
                </>
              )}
            </TabPanel>

            <TabPanel>
              {/* Tab Internacional con sub-tabs */}
              <Tabs
                variant="soft-rounded"
                colorScheme="blue"
                size={"sm"}
                index={europeanCountries.findIndex(
                  (c) => c.code === activeCountryCode
                ) - 1} // -1 porque la primera es nacional
                onChange={handleCountryTabChange}
              >
                <TabList mb={4} overflowX="auto">
                  {europeanCountries.slice(1).map((country) => (
                    <Tab key={country.code}>{t(country.labelKey)}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {europeanCountries.slice(1).map((country) => {
                    const providersByCountry = providers.filter(
                      (p) => p.country === country.code
                    );
                    const totalPgs = totalPages(providersByCountry);
                    const paged = paginate(providersByCountry);

                    return (
                      <TabPanel key={country.code}>
                        {providersByCountry.length === 0 ? (
                          <Text>{t("shipping.no_providers")}</Text>
                        ) : (
                          <>
                            <Grid
                              templateColumns={`repeat(${columns}, 1fr)`}
                              gap={6}
                            >
                              {paged.map((provider) => (
                                <ShippingProviderCard
                                  key={provider.id}
                                  provider={provider}
                                  onEdit={() => openEditModal(provider)}
                                />
                              ))}
                            </Grid>
                            {totalPgs > 1 && (
                              <HStack mt={4} justify="center" spacing={2}>
                                {Array.from({ length: totalPgs }).map((_, idx) => {
                                  const page = idx + 1;
                                  return (
                                    <Button
                                      key={page}
                                      size="sm"
                                      variant={page === currentPage ? "solid" : "outline"}
                                      onClick={() => handlePageChange(page)}
                                    >
                                      {page}
                                    </Button>
                                  );
                                })}
                              </HStack>
                            )}
                          </>
                        )}
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </Tabs>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>

      <AddEditProviderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={providerToEdit}
        onSave={saveProvider}
      />
    </Stack>
  );
}
