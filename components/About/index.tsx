"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutHyphenItem from "../AboutHyphenItem";

const hyphenItems = [
  {
    title: "Стоян Делчев",
    description: "Олимпийски шампион на висилка от ОИ Москва -1980 година.",
  },
  {
    title: "Любомир Герасков",
    description: "Олимпийски шампион на кон с гривни от ОИ Сеул -1988 година.",
  },
  {
    title: "Йордан Йовчев",
    description:
      "Участник в шест олимпиади, вицешампион на халки от ОИ Атина - 2004 година, световен шампион на халки и земна гимнастика на Световното първенство /СП/ в Гент през 1991 г. и на СП - Анахайм, САЩ през 1993 година.",
  },
  {
    title: "Красимир Дунев",
    description:
      "Вицешампион на висилка на ОИ Атланта - 1996 година, европейски шампион на висилка на ЕП Копенхаген 1996 година",
  },
  {
    title: "Боряна Стоянова",
    description: "Световен шампион на прескок на СП Будапеща 1983 година.",
  },
];
const hyphenItems2 = [
  { title: "Велик Капсъзов", description: "" },
  { title: "Райчо Христов", description: "" },
  { title: "Стоян Делчев", description: "" },
  { title: "Пламен Петков", description: "" },
  { title: "Калофер Христозов", description: "" },
  { title: "Иван Иванов", description: "" },
];
const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/other/image-2.jpg"
                alt="About"
                className="dark:hidden"
                width={1024}
                height={1024}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Спортна Гимнастика
                </span>
              </h2>
              <p>
                Родната спортна гимнастика има своите успехи, с които всички се
                гордеем. Ето златните имена в историята на българската спортна
                гимнастика:
              </p>
              {hyphenItems.map((item, index) => (
                <AboutHyphenItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Европейски шампиони
                </span>
              </h2>
              {hyphenItems2.map((item, index) => (
                <AboutHyphenItem
                  description=""
                  title={item.title}
                  key={index}
                />
              ))}
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/other/image-3.jpg"
                alt="About"
                className="dark:hidden"
                width={1024}
                height={1024}
              />
            </motion.div>
          </div>
        </div>
        <div className="my-32 h-[150px] w-full bg-primary-100" />
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
