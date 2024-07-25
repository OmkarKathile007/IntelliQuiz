// src/components/BorderBeamDemo.tsx
// import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";
import { BorderBeam } from "../magicui/border-beam"

export function BorderBeamDemo(props) {
  return (
    <div className=" w-full relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl hover:bg-white transition-all duration-500 hover:opacity-85 hover:text-black ">
      <span className="w-full h-full text-white  hover:text-black transition-all duration-500 text-2xl p-5 py-9 font-semibold text-center ">
       
        {props.name}
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}

// {pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text}
