// types/warehouse.ts

export type Warehouse = {
  id: string;
  name: string;
  [key: string]: any; // por si luego agregas dirección, región, etc.
};
