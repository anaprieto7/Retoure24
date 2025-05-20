// src/app/layout.tsx
import './globals.css'
import "leaflet/dist/leaflet.css";
import { Metadata } from 'next';
import Providers from './providers';
import AppShell from '@/components/AppShell';

export const metadata: Metadata = {
  title: "Retoure24 Dashboard",
  description: "Dashboard de devoluciones",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
