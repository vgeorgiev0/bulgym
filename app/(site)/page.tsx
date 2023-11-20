import About from "@/components/About";
import Feature from "@/components/Features";
import Hero from "@/components/Hero";
import ManagementBoard from "@/components/ManagementBoard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Българска Федерация по Гимнастика",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <ManagementBoard />
    </main>
  );
}
