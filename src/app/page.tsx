import * as React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Paragraph from "@/components/ui/LargeHeading";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <Paragraph></Paragraph>
    </main>
  );
}
