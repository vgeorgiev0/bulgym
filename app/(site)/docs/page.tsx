import FeaturesTab from "@/components/FeaturesTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Документи - Българска Федерация по Гимнастика",
  description: "Нормативни документи - Българска Федерация по Гимнастика",
};

export default function DocsPage() {
  return (
    <>
      <section className="mb-8 mt-36">
        <div className="container mx-auto">
          <FeaturesTab />
        </div>
      </section>
    </>
  );
}
