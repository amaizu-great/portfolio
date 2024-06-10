import Image from "next/image";
import Nest from "../../../public/icon-nest.svg";
import React from "../../../public/icon-react.svg";
import Next from "../../../public/icon-nextjs.svg";
import Node from "../../../public/icon-nodejs.svg";
import Js from "../../../public/icon-javscript.svg";
import Ts from "../../../public/icon-typescript.svg";
import Express from "../../../public/icon-express.svg";
import Mongo_DB from "../../../public/icon-mongodb.svg";
import TailWind from "../../../public/icon-tailwindcss.svg";
import Express2 from "../../../public/icon-expressLight.svg";

const EachSkill = (props: any) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image src={props.image} alt={`${props.alt}`} className="size-[50px]" />
      <p>{props.name}</p>
    </div>
  );
};

const ExpressJs = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src={Express}
        alt="Express Js Icon"
        className="size-[50px] dark:hidden"
      />
      <Image
        src={Express2}
        alt="Express Js Icon"
        className="size-[50px] hidden dark:flex"
      />
      <p>Express.Js</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="w-full px-[5%] flex py-16 bg-white  items-center justify-center dark:bg-[#030712]">
      <div className="w-full flex flex-col gap-4 text-gray-600 dark:text-gray-100 text-[14px]">
        <div className="flex flex-col gap-4 w-full h-fit items-center justify-center">
          <button className="flex border-none outline-none px-8 py-2 rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
            Skills
          </button>
        </div>

        <section className="flex flex-col w-full gap-20 text-center">
          <div className="flex flex-col gap-10 items-center ">
            <p>Tools and Technologies That In Am Good At</p>

            <div className="flex w-full justify-around gap-16 flex-wrap">
              <EachSkill image={Js} name="JavaScript" alt="Js Icon" />
              <EachSkill image={Ts} name="TypeScript" alt="Ts Icon" />
              <EachSkill image={React} name="React" alt="React Icon" />
              <EachSkill image={Next} name="Next.js" alt="Next js icon" />
              <EachSkill
                image={TailWind}
                name="Tailwind Css"
                alt="TailWind css icon"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <p>Others that my hands are a little bit light on 😑</p>

            <div className="flex w-full justify-around gap-16 flex-wrap">
              <EachSkill image={Node} name="Node.js" alt="Node js Icon" />
              <EachSkill image={Nest} name="Nest.js" alt="Nest js Icon" />
              <ExpressJs />
              <EachSkill image={Mongo_DB} name="MongoDB" alt="Mongo db icon" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
