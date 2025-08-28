import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import PdfLink from "../Docs/PdfLink";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, image, documents } = featureTab;
  return (
    <>
      <div className="flex items-start justify-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-10 text-start text-3xl font-bold text-lime-900 dark:text-white xl:text-4xl">
            {title}
          </h2>

          {documents.map((document) => (
            <PdfLink
              key={document.id.toString()}
              id={document.id.toString()}
              title={document.title}
            />
          ))}
        </div>
        <div className="relative mx-auto mt-20 hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={1024}
            height={1024}
            // className="dark:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
