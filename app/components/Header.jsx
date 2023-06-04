import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-8 bg-white rounded-xl mb-4">
      <div className="flex items-center justify-between gap-8">
        <div className="p-4 bg-root/50 rounded-full text-login text-2xl font-bold">
          <Link className="cursor-pointer hover:text-auth" href={"/"}>
            RH
          </Link>
        </div>
        <nav className="flex text-login text-2xl bg-root/50 w-full py-4 px-12 rounded-full gap-8 justify-end font-bold">
          <Link className="cursor-pointer hover:text-auth" href={"/auth/login"}>
            Login
          </Link>
          <Link
            className="cursor-pointer hover:text-auth"
            href={"/auth/register"}
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
