import Image from "next/image";
import me from "../../../public/Me.jpg";

const TestimonyCard = (props: any) => {
  return (
    <div className="px-8 py-12 flex flex-col gap-4 min-w-[320px] max-w-[320px] text-center rounded justify-center items-center shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100 max-md:min-w-[280px]">
      <Image
        src={props.image}
        alt={props.author}
        className="w-[70px] rounded"
      ></Image>
      <p>{props.testimony}</p>
      <div>
        <p className="text-[16px] font-medium text-[#030712] dark:text-white">
          {props.author}
        </p>
        <p className="text-[12px] ">{props.authorOcupation}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="flex w-full px-[5%] bg-gray-100 text-[14px] py-24 items-center justify-center max-lg:py-16 dark:text-gray-100 dark:bg-[#111827]"
    >
      <div className="w-full flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4 h-fit items-center justify-center">
          <button className="flex border-none outline-none text-[12px] px-7 py-1 rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
            Testimonials
          </button>
          <p>Nice things people have said about me:</p>
        </div>

        <div className="w-full flex justify-center gap-12 flex-wrap">
          <TestimonyCard
            image={me}
            author="Great"
            authorOcupation="Founder of Vanya.io"
            testimony="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"
          />

          <TestimonyCard
            image={me}
            author="Great"
            authorOcupation="Founder of Vanya.io"
            testimony="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"
          />

          <TestimonyCard
            image={me}
            author="Great"
            authorOcupation="Founder of Vanya.io"
            testimony="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
