const AboutMe = () => {
  return (
    <section className="flex w-full px-[5%] bg-gray-100 dark:bg-[#111827] py-24 items-center justify-center max-lg:py-16">
      <div className="w-full flex flex-col gap-24">
        <div className="flex w-full h-fit items-center justify-center">
          <button className="flex border-none outline-none px-8 py-2 rounded-r-[20px] rounded-l-[20px] bg-gray-300 text-[#030712] dark:bg-gray-600 dark:text-gray-100 ">
            About Me
          </button>
        </div>

        <div className="flex gap-20 justify-around items-start max-lg:flex-wrap max-lg:justify-center">
          <section>
            <div className="flex h-[320px] w-[280px] bg-gray-200 justify-center relative dark:bg-gray-600 max-lg:w-[320px] max-lg:items-center max-sm:h-[280px] max-sm:w-[260px] ">
              <div className="picture2 h-[320px] w-[280px] border-[8px] border-gray-100 dark:border-[#111827] max-lg:relative max-lg:bottom-[20px] max-sm:h-[280px] max-sm:w-[240px] max-sm:border-[5px] max-sm:bottom-[10px]"></div>
            </div>
          </section>

          <section className="flex flex-col gap-12 text-gray-600 dark:text-gray-100 text-[14px] max-lg:gap-8 max-sm:gap-6">
            <div className="flex flex-col gap-4 max-w-[600px] max-lg:max-w-full">
              <h1 className="text-[30px] font-bold leading-none text-[#030712] dark:text-white max-lg:text-[25px] max-sm:text-[22px]">
                Curious about me? Here you have it:
              </h1>

              <p>
                I am a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>

              <p>
                I began my journey as a web developer in 2015, and since then,
                I have continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I am building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>

              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>

              <p>
                When I am not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>

              <p>Finally Some Quick Bit About Me</p>

              <div className="w-full flex gap-3 flex-wrap">
                <div className="flex flex-col gap-3">
                  <li>B.E. in Computer Engineering</li>
                  <li>Avid learner</li>
                </div>
                <div className="flex flex-col gap-3">
                  <li>Full time freelancer</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>

              <p>
                One last thing, I am available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
