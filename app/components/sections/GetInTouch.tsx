import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CallCalling, Message } from "iconsax-react";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="w-full px-[5%] flex py-16 bg-white items-center justify-center dark:bg-[#030712] text-gray-600 dark:text-gray-100 text-[14px]"
    >
      <div className="flex w-full items-center flex-col gap-8">
        <div className="flex flex-col gap-4 w-full max-w-[500px] text-center h-fit items-center justify-center">
          <button className="flex border-none outline-none text-[12px] px-7 py-1 rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
            Get In Touch
          </button>
          <p>
            What is next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-[#030712] dark:text-white text-[20px] font-medium max-md:text-[18px] max-sm:text-[16px]">
          <Link href="mailto:greatamaizu@gmail.com" className="flex gap-2">
            <Message />
            <p>GreatAmaizu@gmail.com</p>
          </Link>

          <Link href="tel:07047739348" className="flex gap-2">
            <CallCalling />
            <p>+234 7047739348</p>
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[12px] items-center">
          <p>You may also find me on these platforms!</p>
          
          <div className="flex gap-1 items-center">
            <Link href="https://github.com/amaizu-great" className="flex p-[6px] ">
              <LuGithub className="size-[25px]"/>
            </Link>
            <Link href="https://x.com/amaizu_great" className="flex p-[6px]">
              <FaXTwitter className="size-[25px]"/>
            </Link>
            <Link href="https://www.linkedin.com/in/great-amaizu-b6965b238/" className="flex p-[6px]">
              <CiLinkedin className="size-[30px]"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
