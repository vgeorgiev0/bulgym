import React from "react";

interface AboutHyphenItemProps {
  title: string;
  description: string;
}

const AboutHyphenItem: React.FC<AboutHyphenItemProps> = ({
  description,
  title,
}) => {
  return (
    <div className="mt-7.5 flex items-center gap-5">
      <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
        <p className="text-metatitle2 font-semibold text-black dark:text-white">
          —
        </p>
      </div>
      <div className="w-3/4">
        <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutHyphenItem;
