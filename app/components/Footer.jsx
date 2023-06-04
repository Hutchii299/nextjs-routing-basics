import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-8 pr-20 mt-4 bg-white rounded-xl">
      <div className="flex justify-between gap-8 rounded-full ">
        <div className="p-4 flex flex-col gap-8">
          <Link
            className="cursor-pointer hover:text-auth text-login text-2xl font-bold"
            href={"/"}
          >
            RH
          </Link>
          <p className="text-lg text-black/50 font-semibold italic">
            A tutorial about NextJS 13 routing basics
          </p>
        </div>

        <div className="flex justify-end gap-20">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl text-black/60 mb-4">Company</p>
            <p className="text-lg text-black/50 cursor-pointer">About</p>
            <p className="text-lg text-black/50 cursor-pointer">Blog</p>
            <p className="text-lg text-black/50 cursor-pointer">Jobs</p>
            <p className="text-lg text-black/50 cursor-pointer">Press</p>
            <p className="text-lg text-black/50 cursor-pointer">Partners</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl text-black/60 mb-4">Legal</p>
            <p className="text-lg text-black/50 cursor-pointer">Claim</p>
            <p className="text-lg text-black/50 cursor-pointer">Privacy</p>
            <p className="text-lg text-black/50 cursor-pointer">Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
