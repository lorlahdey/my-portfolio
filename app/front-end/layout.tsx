import PageTitle from "@/components/pageTitle/PageTitle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front-end Skils | My Portfolio ",
  description: "My Portfolio",
};

export default function FELayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen">
      <PageTitle title="Front-end skills" />
      {children}
    </section>
  );
}
