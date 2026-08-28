import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entre Peques",
  description: "Babysitting, clases particulares y organización de cumpleaños para los más pequeños",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
