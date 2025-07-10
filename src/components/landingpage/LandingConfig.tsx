"use client";

import {
  Box,
  Heading,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { mockShops } from "@/data/mockShops";
import ReturnAccessOptions from "./ReturnAuthOptions";
import LandingPreview from "./LandingPreview";
import BreadcrumbNav from "../BreadcrumbNav";
import { FiLayout,FiSettings } from 'react-icons/fi';



interface Props {
  shopId: string;
  shopName: string;
}

export default function LandingConfig() {
  const { shopId } = useParams();
  const router = useRouter();
  const toast = useToast();

  const shop = mockShops.find((s) => s.id === shopId);

  const [welcomeText, setWelcomeText] = useState("");
  const [requiredFields, setRequiredFields] = useState<string[]>([]);
  const [primaryColor, setPrimaryColor] = useState("#F97316");
  const [returnPolicy, setReturnPolicy] = useState("");
  const [language, setLanguage] = useState("de");

  useEffect(() => {
    if (shop?.config) {
      setWelcomeText(shop.config.welcomeText || "");
      setRequiredFields(shop.config.requiredFields || []);
      setPrimaryColor(shop.config.primaryColor || "#F97316");
      setReturnPolicy(shop.config.returnPolicy || "");
      setLanguage(shop.config.language || "de");
    }
  }, [shop]);

  const handleSave = () => {
    toast({
      title: "Konfiguration gespeichert",
      status: "success",
      isClosable: true,
      duration: 2000,
    });

    // Aquí podrías llamar a tu API o guardar en estado global
    router.push("/setup/landingpage");
  };

  const color = useColorModeValue("gray.700", "gray.300");

  if (!shop) {
    return (
      <Box p={10}>
        <Heading>Shop nicht gefunden</Heading>
      </Box>
    );
  }
 // UI Colors

 const bg = useColorModeValue("white","gray.800")


   const breadcrumbs = [
         { labelKey: 'setting', href: '/setup/account', icon: FiSettings },
         { labelKey: 'Landing', href: '/setup/landingpage', icon: FiLayout},
         { label: `Shop ${shop.name}`, isCurrent: true },
       ];

  return (
    <Box maxW="1200px" mx="auto" py={6} px={4}>
      <BreadcrumbNav items={breadcrumbs} />
      <Heading size="lg" mb={4} color={color}>
        Landing Page für {shop.name} konfigurieren
      </Heading>

      <Stack spacing={5} mt={4}>
        <HStack
            spacing={6}
            align="start"
            bg={bg}
            p={6}
            shadow="sm"
            rounded="lg"
            >
            <FormControl flex="1">
                <FormLabel>Willkommensnachricht</FormLabel>
                <Input
                value={welcomeText}
                onChange={(e) => setWelcomeText(e.target.value)}
                />
            </FormControl>

            <FormControl w="150px">
                <FormLabel>Hauptfarbe</FormLabel>
                <Input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                p={0}
                h="40px"
                />
            </FormControl>
        </HStack>
        <ReturnAccessOptions
          requiredFields={requiredFields}
          onChange={setRequiredFields}
        />

        <FormControl>
          <FormLabel>Rückgabepolitik</FormLabel>
          <Textarea
            value={returnPolicy}
            onChange={(e) => setReturnPolicy(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Sprache</FormLabel>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </Select>
        </FormControl>
      </Stack>

      <Box mt={8} display="flex" justifyContent="flex-end">
        <Button colorScheme="blue" onClick={handleSave}>
          Speichern
        </Button>
      </Box>

      <LandingPreview
        logoUrl={shop.logoUrl}
        welcomeText={welcomeText}
        primaryColor={primaryColor}
        returnPolicy={returnPolicy}
        requiredFields={requiredFields}
      />
    </Box>
  );
}
