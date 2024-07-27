import React from "react";
import { motion } from "framer-motion";

function Spread() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
        <div className="flex justify-center items-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1>In the media</h1>
        </div>
        <div className="mt-10 text-center">
          {["Spread", "the News"].map((elem, idx) => {
            return (
              <h1 key={idx} className="capitalize overflow-hidden sm:text-8xl text-5xl tracking-tight ">
                <motion.span
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                  className="inline-block origin-left "
                >
                  {elem}
                </motion.span>
              </h1>
            );
          })}

          <p className="w-2/3 sm:w-1/3 sm:mt-10 sm:text-xl mx-auto mt-5 text-sm leading-2">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block"
            href=""
          >
            Browser all news
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
