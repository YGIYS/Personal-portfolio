"use client"
import Image from "next/image";
import Hero from "../app/asset/Hero.png"
import '../app/globals.css'
import ExperiencePage from "@/components/ExperiencePage";
import { useTheme } from "./ThemeContext";
import Aboutpage from "@/components/Aboutpage";
import Header from "@/components/Header";
import { useState } from "react";
export default function Home() {
  // const [section, setSection] = useState("home");

  const {isDarkMode} = useTheme()
  return (
    <>
      <Header />
      <div className="container">
        <div className=" grid grid-cols-2 gap-0 ">
          <div className="text-center p-5 flex justify-center flex-col relative left-48">
            <h1 className="text-3xl z-10  font-bold mb-5">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="  z-10 mr-7 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              molestiae sunt id soluta, iure provident commodi enim obcaecati
              expedita tenetur! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quas tempora porro nemo repellat tenetur quia
              itaque molestiae inventore, odit architecto!
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Circle (Placed Behind Image) */}
            <div
              className={`${
                isDarkMode ? "coloorrr" : "bg-blue-400 text-gray-950"
              } w-80 h-80 rounded-full absolute  top-36 right-21`}
            ></div>

            {/* Image */}

            <Image
              src={Hero}
              height={200} // Base height (can be overridden by larger screens)
              width={200} // Base width (can be overridden by larger screens)
              alt="Heroimg"
              className="z-10 relative " // Tailwind classes for responsive sizing
            />
          </div>
        </div>

        {/* Wrap the Image and Circle in a Relative Container */}
      </div>
      <section id="Experience">
        <ExperiencePage />
      </section>
      <Aboutpage />
    </>
  );
}
