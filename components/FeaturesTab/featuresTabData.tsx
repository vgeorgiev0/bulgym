import {
  activity,
  annualReports,
  regulatoryDocuments,
} from "@/constants/PdfFiles";
import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Нормативни документи",
    documents: regulatoryDocuments,
    image: "/images/other/image-1.jpg",
  },
  {
    id: "tabTwo",
    title: "Дейност",
    documents: activity,
    image: "/images/other/image-2.jpg",
  },
  {
    id: "tabThree",
    title: "Годишни отчети и бюджети",
    documents: annualReports,
    image: "/images/other/image-4.jpg",
  },
];

export default featuresTabData;
