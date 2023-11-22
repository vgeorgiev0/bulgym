import PdfViewer from "@/components/PDFViewer";
import { allDocuments } from "@/constants/PdfFiles";
import { Metadata } from "next";
import Head from "next/head";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Документи - Българска Федерация по Гимнастика",
  description: "Нормативни документи - Българска Федерация по Гимнастика",
};

const PDFPage = ({ params }: { params: { pdfId: string } }) => {
  const currentDocument = allDocuments.find(
    (document) => document.id === +params.pdfId,
  );
  !currentDocument && notFound();

  return (
    <>
      <Head>
        <title>{currentDocument?.title.substring(0, 10)}</title>
      </Head>
      <main className="my-46">
        <header className="mb-10 flex items-center justify-center text-xl">
          <h1>{currentDocument?.title}</h1>
        </header>

        <section className="mx-3 flex items-center justify-center md:mx-10 xl:mx-40">
          <PdfViewer url={currentDocument?.url} />
        </section>
      </main>
    </>
  );
};
export default PDFPage;
