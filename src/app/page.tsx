import * as React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & open-source text similarity API",
};

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-center'>
          <LargeHeading></LargeHeading>
        </div>
      </div>
    </div>
  );
}
