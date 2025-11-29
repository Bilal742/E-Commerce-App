"use client";
import dynamic from "next/dynamic";

const SearchPageContent = dynamic(() => import("./SearchPageContent"), { ssr: false });

export default function Page() {
  return <SearchPageContent />;
};
  