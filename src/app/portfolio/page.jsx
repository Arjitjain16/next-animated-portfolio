"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Link from 'next/link';


const Page = () => {

  const projects = [
    {
      id: 1,
      title: "Blogging Plate",
      color: "from-red-300 to-blue-300",
      description: "A platform for creating and sharing blogs.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/blogging-plate",
    },
    {
      id: 2,
      title: "ChatApp MERN",
      color: "from-blue-300 to-violet-300",
      description: "A real-time chat application built with MERN stack.",
      img: "https://images.pexels.com/photos/16229745/pexels-photo-16229745/free-photo-of-social-media-apps-on-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://example.com/chatapp-mern",
    },
    {
      id: 3,
      title: "Marine Vista",
      color: "from-violet-300 to-purple-300",
      description: "A website showcasing marine life and conservation efforts.",
      img: "https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://example.com/marine-vista",
    },
    {
      id: 4,
      title: "Brain Space",
      color: "from-purple-300 to-zinc-300",
      description: "An interactive platform for brain games and puzzles.",
      img: "https://images.pexels.com/photos/20955079/pexels-photo-20955079/free-photo-of-green-aurora-borealis-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "https://example.com/brain-space",
    },
  ];


  const ref = useRef();

  // useScroll hook to get scroll progress
  const { scrollYProgress } = useScroll({ target: ref });

  // useTransform to create a translation effect based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Array of project details
  

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl lg:text-8xl text-center">
            My Works
          </div>
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex" >
              <div className="w-screen h-screen flex items-center justify-center z-50 bg-gradient-to-r from-purple-300 to-red-300"></div>
              {projects.map((item) => (
                <div
                  key={item.id}
                  className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                >
                  <div className="flex flex-col gap-8 text-white">
                    <h1 className="font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl ">{item.title}</h1>
                    <div className="relative shadow w-80 h-52 md:w-96 md:h-60 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[360px]   ">
                      <Image src={item.img} alt={item.title} layout="fill" className="object-cover rounded-md h-full w-full" />
                    </div>
                    <p className="w-72 md:w-96 lg:w-[500px] xl:w-[600px]">{item.description}</p>
                    <Link href={item.url} className="flex justify-end">
                      <button className="bg-white text-black px-3 py-3 md:p-4 lg:p-5 xl:p-6 font-semibold hover:bg-black hover:text-zinc-200 rounded">See Demo</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
         {/* "Hire Me" Section */}
         <div className="hire w-screen h-screen flex flex-col gap-16 items-center  text-center z-10">
          <div className="relative flex items-center justify-center pt-32 gap-12">
            <h1 className="bg-[#D4D1DB] rounded px-2 text-2xl md:text-4xl md:px-4 lg:text-6xl lg:px-5 xl:text-7xl xl:px-6">Do you have any Project ?</h1> {/* Adjusted font size */}
            <div className="absolute top-full mt-8  flex gap-28 items-center justify-center"> {/* Adjust positioning */}
              <motion.svg 
              animate={{rotate:360}} 
              transition={{duration:3.4 , ease:"linear", repeat:Infinity }} 
              viewBox="0 0 300 300" className="w-96 h-80">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150
                      m -60, 0
                      a 60,60 0 1,1 120,0
                      a 60,60 0 1,1 -120,0"
                  />
                </defs>
                <text fill="#000">
                  <textPath href="#circlePath" className="text-xl font-semibold">Frontend Developer  &  Software Dev &bull;</textPath>
                </text>
              </motion.svg>
              <div className="absolute  flex items-center justify-center cursor-pointer"> 
                <Link href="/about" className="bg-black text-white h-20 w-20 cursor-pointer rounded-full ring-2 flex items-center justify-center">
                  Hire Me
                </Link>
              </div>
            </div>
        </div>
</div>

      </motion.div>

      
    </>
  );
};

export default Page;
