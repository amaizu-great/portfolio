import Link from "next/link";
import { Location , Figma} from "iconsax-react";

const HeroSection = () => {
  return (
    <section className="w-full px-[5%] flex min-h-[500px] bg-white items-center dark:bg-[#030712]">
      <div className="w-full flex gap-12 justify-between max-lg:flex-wrap-reverse max-lg:justify-center">
        <section className="flex flex-col gap-12 text-gray-600 dark:text-gray-100 text-[14px] max-lg:gap-8">
          <div className="flex flex-col gap-4 max-w-[600px] max-lg:max-w-full">
            <h1 className="text-[40px] font-bold leading-none text-[#030712] dark:text-white">
              Hi, I Am Great 👋
            </h1>
            <p>
              I am a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Location />
              <p className="leading-none">PortHarcourt Rivers, Nigeria</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex w-[24px] items-center justify-center">
                <div className="bg-green-600 size-2 rounded-full"></div>
              </div>
              <p>Available for new projects</p>
            </div>
          </div>

          <div className="flex gap-1">
            <Link href="/" className="flex p-[6px]"><Figma /></Link>
            <Link href="/" className="flex p-[6px]"><Figma /></Link>
            <Link href="/" className="flex p-[6px]"><Figma /></Link>
          </div>
        </section>

        <section>
          <div className="h-[320px] w-[280px] bg-gray-200 relative dark:bg-gray-600 max-lg:w-[320px] max-lg:items-center justify-center">
            <div className="picture1 h-[320px] w-[280px] border-[10px] border-white dark:border-[#030712] absolute left-[-50px] top-[-50px] max-lg:relative max-lg:left-0 max-lg:top-0"></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
