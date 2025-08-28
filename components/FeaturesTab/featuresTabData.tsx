import {
  activity,
  annualReports,
  internationalResults,
  nationalResults,
  regulatoryDocuments,
} from "@/constants/PdfFiles";
import { FeatureTab } from "@/types/featureTab";

export const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Нормативни документи",
    documents: regulatoryDocuments.reverse(),
    image: "/images/other/image-1.jpg",
  },
  {
    id: "tabTwo",
    title: "Дейност",
    documents: activity.reverse(),
    image: "/images/other/image-2.jpg",
  },
  {
    id: "tabThree",
    title: "Отчети и бюджети",
    documents: annualReports.reverse(),
    image: "/images/other/image-4.jpg",
  },
];

export const resultsTabData: FeatureTab[] = [
  {
    id: "nationalResults",
    title: "Национални състезания",
    documents: nationalResults.reverse(),
    image: "/images/results/results-1.jpg",
  },
  {
    id: "internationalResults",
    title: "Международни състезания",
    documents: internationalResults.reverse(),
    image: "/images/results/results-2.jpg",
  },
];
