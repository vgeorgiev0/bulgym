"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import { Metadata } from "next";

// export default function Head() {
//   return (
//     <>
//       <title>Българска Федерация по Гимнастика</title>
//       <meta content="width=device-width, initial-scale=1" name="viewport" />
//       <meta name="description" content="" />
//       <link rel="icon" href="/images/favicon.ico" />
//       <link
//         rel="apple-touch-icon"
//         sizes="180x180"
//         href="/images/apple-touch-icon.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="32x32"
//         href="images/favicon-32x32.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="16x16"
//         href="images/favicon-16x16.png"
//       />
//       <link rel="manifest" href="/site.webmanifest" />
//       <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
//       <meta name="msapplication-TileColor" content="#ffffff" />
//       <meta name="theme-color" content="#ffffff" />
//     </>
//   );
// }



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className} bg-gray-20`}>
        <ThemeProvider
          enableSystem={false}
          forcedTheme="light"
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
