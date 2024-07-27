import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Works from "./Components/Works";
import Play from "./Components/Play";
import Images from "./Components/Images";
import Spread from "./Components/Spread";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full ">
      <Navbar />
      <Landing />
      <Works />
      <Play />
      <Images />
      <Spread />
    </div>
  );
}

export default App;
