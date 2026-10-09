import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "../UserMenu";
// import NavLinks from "./NavLinks";

const NavBar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-0 z-50 bg-white">
      

      <div className="navbar container mx-auto px-4">
        
  
        <div className="flex-1 flex items-center gap-2">
          
          <Link href="/"><Image
            src="/logo-icon.png"
            alt="বাজার দর"
            width={48}
            height={48}
          /></Link>

          <div>
            <h1 className="text-xl font-bold">
              বাজার দর
            </h1>

            <p className="text-xs text-gray-500">
              {date}
            </p>
          </div>

        </div>


       
        <div className="flex items-center gap-2">
        {/* <Link href="/sign-in">
          <button className="btn btn-ghost">
            সাইন ইন
          </button>
        
        </Link>

         <Link href="/sign-up">
          <button className="btn bg-green-700 text-white">
            সাইন আপ
          </button>
         </Link> */}
         <UserInfo></UserInfo>
        </div>

      </div>
   <hr className="border-gray-200" />


<NavLinks></NavLinks>

    </header>
  );
};

export default NavBar;