"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="history" className="py-20 lg:py-25 xl:py-30 ">
        <div className="mx-auto mb-40 max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "История",
              subtitle: "Спортна Гимнастика",
              description:
                "България става член на Международната федерация по гимнастика през 1931 година чрез гимнастическо дружество „Юнак”. Това е най-голямата спортна организация в страната, която е имала и културно-просветни прояви.В края на миналото столетие през 80 те и 90 те години българската спортна гимнастика постига забележителни успехи, защото преди това в средата на миналия век през 50-ти и 70-те години са положени солидни основи, залог за бъдещи успехи.",
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
        <div className="my-32 h-[150px] w-full bg-primary-100" />

        {/* <!-- Features item Start --> */}
        <SectionHeader
          headerInfo={{
            title: "Управление и структури",
            subtitle:
              "Информация за управление и структури на Българска федерация по гимнастика",
            description: "",
          }}
        />
        <div className="mx-auto mt-12.5 grid grid-cols-1 gap-7.5 md:mx-16 md:grid-cols-2 lg:mt-15 xl:mt-20 xl:gap-12.5">
          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
          {/* <!-- Features item End --> */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
