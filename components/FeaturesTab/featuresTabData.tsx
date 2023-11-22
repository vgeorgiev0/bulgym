import {
  activity,
  allResults,
  annualReports,
  regulatoryDocuments,
} from "@/constants/PdfFiles";
import { FeatureTab, FeatureTabEnum } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Нормативни документи",
    documents: regulatoryDocuments,
    image: "/images/other/image-1.jpg",
    type: FeatureTabEnum.SINGLE,
  },
  {
    id: "tabTwo",
    title: "Дейност",
    documents: activity,
    image: "/images/other/image-2.jpg",
    type: FeatureTabEnum.SINGLE,
  },
  {
    id: "tabThree",
    title: "Годишни отчети и бюджети",
    documents: annualReports,
    image: "/images/other/image-4.jpg",
    type: FeatureTabEnum.SINGLE,
  },
  {
    id: "tabFour",
    title: "Резултати от състезания",
    type: FeatureTabEnum.MULTIPLE,
    documents: allResults,
    image: "/images/other/image-3.jpg",
  },
];

export default featuresTabData;
