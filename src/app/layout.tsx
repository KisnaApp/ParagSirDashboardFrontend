import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./../utils/chakra/provider.chakra";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kisna Sale Report",
  description: "Report for HK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen `}>
        {/* <VeergeAssistant className="" /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
