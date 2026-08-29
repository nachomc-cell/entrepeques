import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entre Peques",
  description: "Ofrecemos servicios de cuidado infantil y actividades para niños, brindando tranquilidad a los padres mientras sus hijos se divierten.",
  icons: {
    icon: "/logo.png",
  },
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
