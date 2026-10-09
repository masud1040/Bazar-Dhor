
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "../UserMenu";

const NavBar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="navbar container mx-auto min-h-16 px-3 sm:px-4 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর"
              width={48}
              height={48}
              className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12"
            />
          </Link>

          <div className="min-w-0">
            <h1 className="text-base font-bold sm:text-lg md:text-xl">
              বাজার দর
            </h1>

            <p className="truncate text-[10px] text-gray-500 sm:text-xs">
              {date}
            </p>
          </div>
        </div>

        <div className="ml-2 flex shrink-0 items-center gap-1 sm:gap-2">
          <UserInfo />
        </div>
      </div>

      <hr className="border-gray-200" />

      <NavLinks />
    </header>
  );
};

export default NavBar;
