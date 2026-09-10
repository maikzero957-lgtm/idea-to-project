import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "حوّل فكرتك إلى مشروع",
  description: "منصة ذكية لتحويل الأفكار إلى خطط عمل احترافية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
