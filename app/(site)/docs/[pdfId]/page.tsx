import PdfViewer from "@/components/PDFViewer";
import { allDocuments } from "@/constants/PdfFiles";
import Head from "next/head";
import { notFound } from "next/navigation";

const PDFPage = ({ params }: { params: { pdfId: string } }) => {
  const currentDocument = allDocuments.find(
    (document) => document.id === +params.pdfId,
  );
  !currentDocument && notFound();

  console.log(currentDocument?.title);
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
