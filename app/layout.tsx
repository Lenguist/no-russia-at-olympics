import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No Russia at Paralympics — Stop the Normalization",
  description:
    "Russia's war against Ukraine continues. Former soldiers are being sent to the 2026 Paralympics under the Russian flag. This must stop.",
  openGraph: {
    title: "No Russia at Paralympics",
    description:
      "Former combatants from Russia's invasion of Ukraine are competing at the 2026 Paralympics under the Russian flag. Take action.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Russia at Paralympics",
    description:
      "Former combatants from Russia's invasion of Ukraine are competing at the 2026 Paralympics under the Russian flag. Take action.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-[family-name:var(--font-geist)] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
