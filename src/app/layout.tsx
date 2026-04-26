import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atul Kumar Rai · Software Engineer",
  description:
    "Software Engineer II at Sony Interactive Entertainment. Ex-AWS. CMU Grad. Building distributed systems at scale.",
  keywords: ["Software Engineer", "Distributed Systems", "AWS", "Sony", "Carnegie Mellon", "Backend Engineer"],
  authors: [{ name: "Atul Kumar Rai" }],
  openGraph: {
    title: "Atul Kumar Rai · Software Engineer",
    description: "Software Engineer II at Sony Interactive Entertainment. Ex-AWS. CMU Grad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050508]">{children}</body>
    </html>
  );
}
