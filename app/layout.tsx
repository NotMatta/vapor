import type { Metadata } from "next";
import QueryProvider from "@/components/query-proviver";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vapor",
  description: "",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
