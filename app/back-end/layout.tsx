import type { Metadata } from "next";
import RootLayout from "../layout";
import { Inter } from "next/font/google";
import PageTitle from "@/components/pageTitle/PageTitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Back-end Skils | My Portfolio ",
  description: "My Portfolio",
};


export default function BELayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="min-h-screen">
    <PageTitle title="Back-end skills" />
    {children}
    </section>
}
