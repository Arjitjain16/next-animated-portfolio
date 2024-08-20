"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";

const Page = () => {
  const ref = useRef();

  // useScroll hook to get scroll progress
  const { scrollYProgress } = useScroll({ target: ref });

  // useTransform to create a translation effect based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-73%"]);

  // Array of project details
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
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/chatapp-mern",
    },
    {
      id: 3,
      title: "Marine Vista",
      color: "from-violet-300 to-purple-300",
      description: "A website showcasing marine life and conservation efforts.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/marine-vista",
    },
    {
      id: 4,
      title: "Brain Space",
      color: "from-purple-300 to-zinc-300",
      description: "An interactive platform for brain games and puzzles.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/brain-space",
    },
  ];

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My Works
          </div>
          <div className="sticky top-0 h-screen w-screen flex items-center overflow-hidden">
            <motion.div className="flex" style={{ x }}>
              <div className="w-screen h-screen flex items-center justify-center z-50 bg-gradient-to-r from-purple-300 to-red-300"></div>
              {projects.map((item) => (
                <div
                  key={item.id}
                  className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                >
                  <div className="flex flex-col gap-8 text-white">
                    <h1>{item.title}</h1>
                    <div className="relative w-96 h-60">
                      <Image src={item.img} alt={item.title} layout="fill" className="object-cover" />
                    </div>
                    <p>{item.description}</p>
                    <Link href={item.url}>
                      <button className="bg-white text-black px-4 py-2 rounded">See Demo</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* "Hire Me" Section */}
      <div className="hire w-screen h-screen flex flex-col gap-16 items-center justify-center text-center z-10 bg-slate-300">
        <div className="relative">
        <h1>Do you have any Project?</h1>
          <svg viewBox="0 0 300 300" className="w-60 h-60">
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
                <textPath href="#circlePath">Frontend Developer and UI Designer &bull;</textPath>
              </text>
          </svg>
          <div className="absolute inset-0 top-5 flex items-center justify-center"> 
            <Link href="/contact" className="">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
