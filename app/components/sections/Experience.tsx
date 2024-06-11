import Image from "next/image"
import Logo from "../../../public/Swiftallylogo.svg"

const Experience = () => {
  return (
    <main className="flex w-full px-[5%] bg-gray-100 text-[14px] py-24 items-center justify-center max-lg:py-16 dark:text-gray-100 dark:bg-[#111827]">
      <div className="w-full flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4 h-fit items-center justify-center text-center">
          <button className="flex border-none outline-none text-[12px] px-7 py-1 rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
            Experience
          </button>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>

        
        <div className="w-full flex flex-col items-center gap-12 flex-wrap">
            <div className="flex w-[90%] p-9 gap-12 justify-between rounded shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100 max-lg:flex-col max-lg:gap-6 max-lg:w-full">
                 <Image src={Logo} alt="Swiftally Logo" className=" w-[180px]"/>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] text-[#030712] dark:text-white">Frontend Developer</h3>
                <li>Used Next.js For The Frontend</li>
                <li>Used Taiwind Css For The Styling</li>
              </div>

              <p className="text-[12px]">Nov 2023 - Present</p>
            </div>
        </div>
        
      </div>
    </main>
  );
};

export default Experience;
