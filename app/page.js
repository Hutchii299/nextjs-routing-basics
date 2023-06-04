"use client";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaRoute } from "react-icons/Fa";
import { TbFileInvoice } from "react-icons/tb";
import { usePathname } from "next/navigation";
import Container from "./components/Container";

export default function Home() {
  const pathname = usePathname();
  return (
    <Container title="Root Page" bgColor="bg-white">
      <div className="grid grid-cols-3 items-center gap-4 justify-items-center max-w-lg py-12">
        <AiOutlineFolderOpen size={"4rem"} />
        <p className="font-semibold">Segment: </p>
        <p>&quot;/&quot;</p>
        <TbFileInvoice size={"4rem"} />
        <p className="font-semibold">File: </p>
        <p>&quot;page.js&quot;</p>
        <FaRoute size={"4rem"} />
        <p className="font-semibold">Path: </p>
        <p>&quot;{pathname}&quot;</p>
      </div>
    </Container>
  );
}
