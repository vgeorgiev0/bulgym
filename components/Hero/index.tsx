"use client";
import Image from "next/image";
import ImageSlider from "../ImageSlider";

const Hero = () => {
  const heroImages: string[] = [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-3.jpg",
    "/images/hero/hero-4.jpg",
    "/images/hero/hero-5.jpg",
  ];

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-lime-900 dark:text-white"></h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-lime-900 dark:text-white xl:text-hero">
                Българска Федерация по Гимнастика
              </h1>
              <p>
                Българска федерация по гимнастика е сдружение с нестопанска цел,
                което обединява гимнастически клубове, чиито основни цели са:
                високото спортно майсторство и масово развитие на спортната
                гимнастика и паркур.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <ImageSlider images={heroImages} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-32 h-[150px] w-full bg-primary-100" />
      </section>
    </>
  );
};

export default Hero;
