import Image from "next/image";
// import hero from "@/bazar-hero.png";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-white  rounded-xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
        
        <div className="w-full md:w-2/3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {date}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="btn bg-green-700 text-white border-none rounded-xl mt-6">
            সব পণ্যের দাম দেখুন
          </button>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের পণ্য"
            width={350}
            height={250}
            className="w-full max-w-[300px] h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;