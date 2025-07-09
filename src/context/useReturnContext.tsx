// context/useReturnContext.tsx
'use client';

import { createContext, useContext } from 'react';

interface ReturnContextValue {
  returnData: any;
  shop?: any;
  warehouse?: any;
  showShop: boolean;
  showWarehouse: boolean;
  currentStatus: string;
  setCurrentStatus: (status: string) => void;
  note?: string;
  setNote: (note: string) => void;
}

const ReturnContext = createContext<ReturnContextValue | null>(null);

export const useReturnContext = () => {
  const ctx = useContext(ReturnContext);
  if (!ctx) throw new Error("useReturnContext debe usarse dentro de ReturnProvider");
  return ctx;
};

export const ReturnProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ReturnContextValue;
}) => {
  return <ReturnContext.Provider value={value}>{children}</ReturnContext.Provider>;
};
