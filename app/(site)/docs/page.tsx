import SidebarLink from "@/components/Docs/SidebarLink";
import FeaturesTab from "@/components/FeaturesTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Документи - Българска Федерация по Гимнастика",
  description: "Нормативни документи - Българска Федерация по Гимнастика",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="mb-8 mt-40">
        <div className="container mx-auto">
          <div className="w-full px-4 md:px-10 xl:px-16">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h1>Документи</h1>

              <p className="text-body-color dark:text-body-color-dark text-base">
                This document serves as a simple template to showcase a sample
                layout and format. It is solely created for demonstration
                purposes and is not intended for any official use.
              </p>
              <p className="text-body-color dark:text-body-color-dark text-base">
                Please visit:{" "}
                <b>
                  <a href="https://nextjstemplates.com/docs">
                    nextjstemplates.com/docs
                  </a>
                </b>{" "}
                to check out the real docs, setup guide and even video
                instructions
              </p>
            </div>
          </div>
          <FeaturesTab />
          {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

          </div> */}
        </div>
      </section>
    </>
  );
}
