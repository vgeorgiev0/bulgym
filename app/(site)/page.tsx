import About from "@/components/About";
import Feature from "@/components/Features";
import Hero from "@/components/Hero";
import ManagementBoard from "@/components/ManagementBoard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Начало - Българска Федерация по Гимнастика",
  description:
    "Българска федерация по гимнастика е сдружение с нестопанска цел, което обединява гимнастически клубове, чиито основни цели са: високото спортно майсторство и масово развитие на спортната гимнастика и паркур.",
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
