// src/components/LanguageSelector.tsx
"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import i18n from "@/i18n/i18n";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "de", label: "Deutsch 🇩🇪" },
  { code: "en", label: "English 🇺🇸" },
  { code: "es", label: "Español 🇪🇸" },
];

export default function LanguageSelector() {
  const { i18n: i18next } = useTranslation();
  const currentLang = i18next.language;

  const handleChange = (lng: string) => {
     console.log("Cambiando idioma a:", lng);
  i18n.changeLanguage(lng);
  };

  const current = languages.find((l) => l.code === currentLang)?.label ?? "🌐";

  return (
    <Menu>
      <MenuButton as={Button} size="sm" variant="ghost" rightIcon={<ChevronDownIcon />}>
        {current}
      </MenuButton>
      <MenuList>
        {languages.map((lng) => (
          <MenuItem key={lng.code} onClick={() => handleChange(lng.code)}>
            {lng.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
