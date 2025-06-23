"use client";

import Image from "next/image";
import { Button } from "@heroui/button";

import DressShowcase from "@/components/DressShowcase";
import FashionArticle from "@/components/FashionArticle";
export default function Home() {
  return (
    <div>
      <DressShowcase />
      <FashionArticle />
    </div>
  );
}
