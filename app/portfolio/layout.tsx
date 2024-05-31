import PageTitle from "@/components/pageTitle/PageTitle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | My Portfolio ",
  description: "My Portfolio",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
    <PageTitle title="Portfolio" />
    {children}
    </section>
  );
}
