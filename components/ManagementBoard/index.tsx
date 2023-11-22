"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  board,
  boardMen,
  boardWomen,
  menHeader,
  womenHeader,
} from "./ManagementBoardData";
import DropdownCard from "../Common/DropdownCard";

const ManagementBoard = () => {
  const [activeBoard, setActiveBoard] = useState(0);

  const handleBoardToggle = (id: number) => {
    activeBoard === id ? setActiveBoard(0) : setActiveBoard(id);
  };

  return (
    <>
      {/* <!-- ===== board Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="relative mx-auto max-w-c-1235 px-4 md:mx-16 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
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
            className="animate_right md:w-3/5 lg:w-1/2"
          >
            <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
              <DropdownCard
                boardData={{
                  id: 1,
                  activeBoard,
                  handleBoardToggle,
                  title: "Управителен съвет",
                  items: board,
                }}
              />
            </div>
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
            className="animate_right mt-2 md:w-3/5 lg:w-1/2"
          >
            <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
              <DropdownCard
                boardData={{
                  id: 2,
                  activeBoard,
                  handleBoardToggle,
                  title: "Технически комитет - Жени",
                  items: boardWomen,
                  headItems: womenHeader,
                }}
              />
            </div>
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
            className="animate_right mt-2 md:w-3/5 lg:w-1/2"
          >
            <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
              <DropdownCard
                boardData={{
                  id: 3,
                  activeBoard,
                  handleBoardToggle,
                  title: `Технически комитет - Мъже`,
                  items: boardMen,
                  headItems: menHeader,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ManagementBoard;
