import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Календар - Българска Федерация по Гимнастика",
  description: "Спортен Календар - Българска федерация по гимнастика",
};

interface CalendarPageProps {}

const CalendarPage: React.FC<CalendarPageProps> = ({}) => {
  return (
    <main className="mt-40 flex flex-col items-center justify-center">
      <section className="mb-10 flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-10 w-full py-10 text-center text-3xl font-semibold">
          Календар
        </h1>
        <iframe
          src="https://sportenkalendar.bg/customer/events/mbd70vnt?rs:embed=true"
          allowFullScreen
          className="h-[100vh] max-h-[660px] min-h-[660px] w-[90vw] self-center"
          loading="lazy"
        />
      </section>
      <div className="mb-10 h-36 w-full bg-primary-100" />
      <section className="mb-10 flex w-full flex-col items-center justify-center">
        <h1 className="mb-10 w-full py-10 text-center text-3xl font-semibold">
          Събития
        </h1>
        <iframe
          src="https://sportenkalendar.bg/customer/events/listing/mbd70vnt"
          loading="lazy"
          className="h-[100vh] max-h-[660px] min-h-[660px] w-[90vw] self-center"
          allowFullScreen
        />
      </section>
    </main>
  );
};

export default CalendarPage;
