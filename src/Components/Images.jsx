import React, { useEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { Linear } from "gsap";

function Images() {
  const first = useRef(null);
  const third = useRef(null);
  const parent = useRef(null);
  const second = useRef(null);
  const four = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start : "0 90%",
        scrub: 1
      },
    });
    tl.to(first.current,{
      x : "35%",
      ease: Linear
    })
    tl.to(third.current,{
      x : "30%",
      ease: Linear
    })
    tl.to(second.current,{
      x : "40%",
      ease: Linear
    })
    tl.to(four.current,{
      x : "-30%",
      ease: Linear
    })
  });

  return (
    <div
      ref={parent}
      className="w-full sm:h-[100vh] h-[70vh] flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[70%]  h-1/2 relative">
        <div
          ref={first}
          className="absolute sm:w-40 sm-h-[15rem] w-20  top-5 -right-1/3 h-[8rem]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute sm:w-[20rem] sm:-left-2/3 w-[8rem] aspect-video -left-[60%] top-1/3 ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute sm:w-[17rem] w-[9rem] aspect-video -bottom-10  -left-[70%]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={four} className="absolute sm:w-[16rem] sm:-bottom-[10%] sm:-right-[50%] w-[10rem] aspect-[1.5/1] -right-[50%] -bottom-[37%] ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
