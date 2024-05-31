import PageTitle from "@/components/pageTitle/PageTitle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact | My Portfolio ",
  description: "My Portfolio",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="min-h-screen">
    <PageTitle title="Kontakt" />
    {children}
    </section>
}
