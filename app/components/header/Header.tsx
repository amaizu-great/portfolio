import Link from "next/link";
import ThemeChangeButton from "./ThemeChangeButton";

const Header = () => {
  return (
    <header className="flex text-gray-600 px-[5%] py-4 w-full dark:text-gray-100 dark:bg-[#030712] z-10 top-0 right-full max-md:py-0 max-md:px-0 max-md:pl-[5%] max-md:flex-col max-md:h-screen max-md:bg-gray-100 max-md:dark:bg-white max-sm:pl-[10%] max-md:fixed ">
      <div className="flex w-full h-full justify-between bg-white max-md:flex-col dark:bg-[#030712] max-md:justify-start">
        <div className="flex items-center max-md:border-b max-md:p-4 max-md:dark:border-gray-700">
          <h1 className="font-semibold text-[20px] max-md:text-[18px] max-sm:text-[16px] text-[#030712] dark:text-white">
            {"<Great />"}
          </h1>
        </div>

        <nav className="flex text-[13px] gap-5 items-center max-md:text-[12px] max-md:gap-0 max-md:flex-col max-md:items-start">
          <div className="flex w-full h-fit gap-5 max-md:gap-4 max-md:flex-col max-md:border-b max-md:p-4 max-md:dark:border-gray-700">
            <Link href="#about">About</Link>
            <Link href="#work">Work</Link>
            <Link href="#Testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <hr className="w-[1px] h-full bg-gray-100 border-none max-md:hidden" />

          <div className="flex gap-4 items-center max-md:flex-col max-md:w-full max-md:p-4 ">
            <ThemeChangeButton />
            <button className="py-3 px-4 rounded-[8px] whitespace-nowrap border-none self-center bg-[#030712] text-white outline-none leading-none dark:bg-white dark:text-[#030712] max-md:w-[400px] max-sm:w-full">
              Download CV
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
