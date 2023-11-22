import { FeatureTab, FeatureTabEnum } from "@/types/featureTab";
import Image from "next/image";
import PdfLink from "../Docs/PdfLink";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, image, documents, type } = featureTab;
  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-lime-900 dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>

          {type === FeatureTabEnum.SINGLE ? (
            documents?.map((document) => (
              <PdfLink
                key={document.id.toString()}
                id={document.id.toString()}
                title={document.title}
              />
            ))
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="mb-3 text-xl underline">Държавни състезания</h2>
                {documents.nationalResults.map((document) => (
                  <PdfLink
                    key={document.id.toString()}
                    id={document.id.toString()}
                    title={document.title}
                  />
                ))}
              </div>
              <div>
                <h2 className="mb-3 text-xl underline">
                  Международни състезания
                </h2>
                {documents.internationalResults.map((document) => (
                  <PdfLink
                    key={document.id.toString()}
                    id={document.id.toString()}
                    title={document.title}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={1024}
            height={1024}
            className="dark:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
