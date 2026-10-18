import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata: Metadata = { title: "PhoneWeb — Demo Phone Store", description: "Shop the latest phones at PhoneWeb Demo Store." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><Navbar/><main>{children}</main><Footer/><WhatsAppButton/></CartProvider></body></html>;
}