import Link from "next/link";
import Image from "next/image";
import Ellas from "../../../public/Ellas.png";
import { TbExternalLink } from "react-icons/tb";
import Port1 from "../../../public/portfolio dark.png";
import Port2 from "../../../public/portfolio light .png";

const ProjectSkils = (props: any) => {
  return (
    <button className="flex border-none outline-none px-4 p-[6px] rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
      {`${props.name}`}
    </button>
  );
};

const Work = () => {
  return (
    <section id="work" className="w-full px-[5%] flex py-16 bg-white items-center justify-center dark:bg-[#030712] text-gray-600 dark:text-gray-100 text-[14px]">
      <div className="flex w-full items-center flex-col gap-12 max-md:gap-8">
        <div className="flex flex-col gap-4 w-full h-fit items-center justify-center">
          <button className="flex border-none outline-none text-[12px] px-7 py-1 rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
            Work
          </button>
          <p>Some of the noteworthy projects I have built:</p>
        </div>

        <div className="flex w-[90%] rounded max-lg:flex-col max-lg:w-full max-sm:text-[12px]">
          <section className="flex w-1/2 p-6 items-center rounded-l bg-gray-100 dark:bg-gray-600 max-lg:w-full max-lg:rounded-l-none max-lg:rounded-t max-sm:p-2">
            <Image
              src={Ellas}
              alt=""
              className="w-full h-fit rounded min-h-fit max-h-fit"
            ></Image>
          </section>

          <section className="flex flex-col w-1/2 px-12 py-6 justify-center rounded-r gap-6 bg-white dark:bg-gray-800 max-lg:w-full max-lg:p-6 max-lg:rounded-r-none max-lg:rounded-b max-sm:gap-3 max-sm:p-4">
            <h1 className="text-[18px] text-[#030712] dark:text-white ">
              DripWithElla
            </h1>

            <p>
              DripWithElla Is An E-commerce Website That Sells Mostly females
              Accersories, My First E-commerce Website Actually, Also
              Acknowledging{" "}
              <Link
                href="https://github.com/feyisayo1"
                className="underline px-1 text-[15px] text-black dark:text-white"
              >
                David
              </Link>{" "}
              Whos is My Partner In This Projects, This Website is Special To Me
              Cause Most Of the Tools I Used In Building It, I Learnt Them While
              Building it, <br />
              Ooh And The Website Is Still Under Production
            </p>

            <div className="flex w-full flex-wrap gap-2">
              <ProjectSkils name="React" />
              <ProjectSkils name="Next.js" />
              <ProjectSkils name="TypeScript" />
              <ProjectSkils name="Tailwind Css" />
            </div>

            <Link href="http://drip-with-ella.vercel.app/" className="mt-5">
            <TbExternalLink className="size-[25px]"/>
            </Link>
          </section>
        </div>

        <div className="flex w-[90%] rounded max-lg:flex-col-reverse max-lg:w-full max-sm:text-[12px]">
          <section className="flex flex-col w-1/2 px-12 py-6 justify-center rounded-l gap-6 bg-white dark:bg-gray-800 max-lg:w-full max-lg:p-6 max-lg:rounded-t-none max-lg:rounded-b max-sm:gap-3 max-sm:p-4">
            <h1 className="text-[18px] text-[#030712] dark:text-white ">
              My Porfolio
            </h1>

            <p>
              In As Much As This Is Not A Big Project, I Just Wanted To Put It
              Out Here Cause I Love The Ui Design
            </p>

            <div className="flex w-full flex-wrap gap-2">
              <ProjectSkils name="React" />
              <ProjectSkils name="Next.js" />
              <ProjectSkils name="TypeScript" />
              <ProjectSkils name="Tailwind Css" />
            </div>

            <Link href="/" className="mt-5">
            <TbExternalLink className="size-[25px]"/>
            </Link>
          </section>

          <section className="flex w-1/2 p-6 items-center rounded-r bg-gray-100 dark:bg-gray-600 max-lg:w-full max-lg:rounded-r-none max-lg:rounded-t max-sm:p-2 dark:hidden">
            <Image
              src={Port1}
              alt=""
              className="w-full h-fit rounded min-h-fit max-h-fit"
            ></Image>
          </section>

          <section className="hidden w-1/2 p-6 items-center rounded-r bg-gray-100 dark:bg-gray-600 max-lg:w-full max-lg:rounded-r-none max-lg:rounded-t max-sm:p-2 dark:flex">
            <Image
              src={Port2}
              alt=""
              className="w-full h-fit rounded min-h-fit max-h-fit"
            ></Image>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Work;
