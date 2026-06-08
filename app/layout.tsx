import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Shri Dutta Mandir Bhopal | Sacred Abode of Lord Dattatreya",
  description:
    "Shri Dutta Mandir, Shri Kshetra E-4 Arera Colony Bhopal. A sacred temple dedicated to Lord Dattatreya — the divine trinity of Brahma, Vishnu, and Mahesh.",
  keywords: "Dutta Mandir Bhopal, Lord Dattatreya, Arera Colony Temple, Dattatreya Temple Bhopal",
  openGraph: {
    title: "Shri Dutta Mandir Bhopal",
    description: "A sacred abode of Lord Dattatreya in the heart of Bhopal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
