// src/theme/index.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    orange: {
      50:  "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",  // ¡Más fuerte!
      600: "#ea580c",
      700: "#92310a",
      800: "#6c2710",
      900: "#3b1106",
      950: "#220a04",
    },
    yellow: {
      50:  "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",  // ¡Más fuerte!
      600: "#ca8a04",
      700: "#845209",
      800: "#713f12",
      900: "#422006",
      950: "#281304",
    },
    red: {
      50:  "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a1",
      400: "#f87171",
      500: "#ef4444",  // ¡Más fuerte!
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },
    green: {
      50:  "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",  // ¡Más fuerte!
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },
    blue: {
      50:  "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",  // ¡Más fuerte!
      600: "#2563eb",
      700: "#173da6",
      800: "#1a3478",
      900: "#14204a",
      950: "#0c142e",
    },
    gray: {
      50:  "#f7f8fa",
      100: "#eceef2",
      200: "#d7dbe4",
      300: "#b7bcc8",
      400: "#868da3",
      500: "#545a70",
      600: "#373c49",
      700: "#252832",
      800: "#1d222c",
      900: "#15181f",
      950: "#101218"
    }
    // Puedes añadir otros colores aquí
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
