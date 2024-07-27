import React, { useState } from "react";
import { motion } from "framer-motion";
function Works() {
  const [data, setData] = useState([
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      title: "Columbia Pictures",
      para: "Celebrating a Century of Cinema",
    },
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      title: "Rino & Pelle",
      para: "Effortless chic lifestyle",
    },
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      title: " Aebele Interiors",
      para: "   Luxurious design experience ",
    },
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      title: "Pixelflakes",
      para: "   Architectural marketing agency",
    },
  ]);
  return (
    <div className="relative w-full">
      <div className="max-w-screen-xl mx-auto px-5 py-20 sm:px-10">
        <div className="feature flex gap-3">
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
          <h3>Featured Projects</h3>
        </div>
        <h1 className="text-6xl overflow-hidden sm:text-[18vw] sm:mb-6 py-4">
          <motion.span initial={{rotate:90,y:"40%",opacity:0}} whileInView={{rotate:0,y:0,opacity:1}} viewport={{once:true}}  transition={{ease:[0.22,1,0.36,1], duration:0.8}} className="inline-block origin-left ">Work</motion.span>
        </h1>
        <p className="leading-2 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-8 sm:flex sm:flex-wrap sm:gap-8">
          {data.map((elem, idx) => {
            return (
              <div key={idx} className="elem w-full sm:w-[48%]  ">
                <div className="video w-full overflow-hidden sm:h-[50vw]  relative h-[104vw]">
                  <motion.img initial={{opacity:1}} whileHover={{opacity:0}} data-scroll data-scroll-speed="-.5"
                    className="w-full sm:absolute sm:top-0 sm:left-0 sm:z-[2] hidden sm:block h-full"
                    src={elem.img}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full sm:z-[1] block  scale-[1.2] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-full object-cover absolute"
                    src={elem.video}
                  ></video>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-2xl font-medium">
                    {elem.title}
                  </h3>
                  <p className="opacity-40 sm:text-lg text-sm">{elem.para}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 sm:mt-24 items-center justify-center mt-16">
          <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="circle-outline w-2 sm:w-3 text-zinc-500"
            data-v-5152decb=""
          >
            <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
          </svg>
          <h1 className="text-base sm:text-xl border-b-[.3px] border-black text-zinc-500">
            Browse all work
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Works;
