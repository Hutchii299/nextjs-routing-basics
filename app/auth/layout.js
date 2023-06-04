"use client";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaRoute } from "react-icons/Fa";
import { TbFileInvoice } from "react-icons/tb";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="bg-auth w-full py-8 px-4 rounded-xl">
      <div className="pl-4 mb-8 flex flex-col gap-4">
        <p className="text-3xl font-semibold">Auth Layout</p>
        <div className="grid grid-cols-3 items-center gap-4 max-w-lg text-2xl">
          <AiOutlineFolderOpen size={"4rem"} />
          <p className="font-semibold">Segment: </p>
          <p>&quot;auth&quot;</p>
          <TbFileInvoice size={"4rem"} />
          <p className="font-semibold">File: </p>
          <p>&quot;layout.js&quot;</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
