"use client";
import { useEffect, useState } from 'react';
import Select from "react-select";
import { Box } from "@chakra-ui/react";

type StoreOption = { label: string; value: string };

type Props = {
  options: StoreOption[];
  selectedStores: StoreOption[];
  onChange: (selected: StoreOption[]) => void;
};

export default function StoreMultiSelector({ options, selectedStores, onChange }: Props) {
  return (
    <Box minW="250px">
      <Select
        isMulti
        placeholder="Select stores..."
        options={options}
        value={selectedStores}
        onChange={(selected) => onChange(selected || [])}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "white",
          }),
          menu: (base) => ({
            ...base,
            zIndex: 20,
          }),
        }}
      />
    </Box>
  );
}
