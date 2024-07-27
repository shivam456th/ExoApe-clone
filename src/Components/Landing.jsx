import React from "react";
import { motion, stagger } from "framer-motion";
import { Power4 } from "gsap";

function Landing() {
  return (
    <div className=" relative w-full h-[150vh] sm:h-[250vh]">
      <div className="picture overflow-hidden w-full h-full">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" text-white  h-full max-w-screen-xl  mx-auto px-5 sm:px-10">
          <div className="text mt-72 sm:mt-[30rem]">
            {[
              "Global digital design studio partnering with",
              " brands and businesses that create execptional",
              "experiences where people ",
              "live, work, and unwind.",
            ].map((elem, idx) => {
              return (
                <p key={idx} className="text-sm sm:text-3xl overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: idx * 0.2,
                    }}
                    className="inline-block origin-left "
                  >
                    {elem}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="heading mt-5 sm:mt-10">
            {["Digital", "Design", "Experiences"].map((elem, idx) => {
              return (
                <h1
                  key={idx}
                  className="text-6xl overflow-hidden sm:text-[16vw] font-medium tracking-tighter leading-none"
                >
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: 1 + idx * 0.15,
                    }}
                    className="inline-block origin-left "
                  >
                    {elem}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 mt-10 sm:mt-20 sm:w-1/3 ">
            <p className="sm:text-xl text-sm">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[.3px] sm:border-b-[1px] sm:text-xl border-zinc-100 pb-1 mt-4 inline-block"
              href=""
            >
              The studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
