import React from "react";

import { Metadata } from "next";
import ResultsTab from "@/components/FeaturesTab/resultsTab";

export const metadata: Metadata = {
  title: "Резултати - Българска Федерация по Гимнастика",
  description: "Резултати от състезания - Българска федерация по гимнастика",
};

interface ResultsPageProps {}

const ResultsPage: React.FC<ResultsPageProps> = ({}) => {
  return (
    <main className="mt-36">
      <ResultsTab />
    </main>
  );
};

export default ResultsPage;
