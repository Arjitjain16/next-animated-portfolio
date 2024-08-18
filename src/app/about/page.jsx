"use client"
import { motion } from "framer-motion";
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration : 1}}>
      <div className="bg-gradient-to-b from-blue-50 to-red-100">
      <div className="p-4  sm:p-8 md:p-12 lg:p-20 xl:p-44 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
            <div className="flex flex-col item-center gap-7"> 
                <h1 className="text-4xl font-bold">Biography</h1>
                <p className="teext-xl w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum est vel ipsum vestibulum, at aliquet velit dignissim. Nulla facilisi. 
                    Sed sed velit vel enim aliquet scelerisque. Integer ullamcorper, tortor at ultricies semper, 
                    justo sapien varius velit, vel eleifend felis lectus nec velit. Sed vel nisi vel felis fermentum scelerisque. 
                    Nulla facilisi.
                </p>
                <span className="italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, molestiae.</span>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600 hover:text-gray-800 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>

                </div>
            </div>
            <div className="flex flex-col item-center gap-7"> 
             <h1 className="text-4xl font-bold">Skills</h1>
             <div className="flex flex-wrap gap-5">
                <div className="p-2 text-sm rounded bg-black text-white hover:bg-white hover:text-black">
                    JavaScript
                </div>
                <div className="p-2 text-sm rounded bg-black text-white hover:bg-white hover:text-black">
                    Python
                </div>
                <div className="p-2 text-sm rounded bg-black text-white hover:bg-white hover:text-black">
                  Html
                </div>
                <div className="p-2 text-sm rounded bg-black text-white hover:bg-white hover:text-black">
                   Css
                </div>
                <div className="p-2 text-sm rounded bg-black text-white hover:bg-white hover:text-black">
                    Tailwind CSS
                </div>
                <div className="p-2 text-sm rounded bg-black text-white hover:bg-white hover:text-black">
                    React js
                </div>
             </div>
              <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600 hover:text-gray-800 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col item-center gap-7"> 
              <h1 className="text-4xl font-bold">Experience</h1>
              <div className="flex h-48 w-[44%]">
                <div className="left flex flex-col gap-10 w-1/3 justify-between">
                    <div className="w-full flex flex-col gap-2">
                        <div className="bg-zinc-100 w-44  px-4 py-3 rounded">
                            <h1 className="w-[90%] font-bold">Junior Software developer</h1>
                        </div>
                        <div className="flex flex-col italic">
                            <span>Lorem ipsum dolor sit.</span>
                            <span>Lorem, ipsum dolor.</span>
                            <span>Lorem, ipsum.</span>
                        </div>
                       <h1 className="text-slate-500">2024-2024</h1>
                       <h1 className="bg-white w-14 p-1 rounded font-bold">Apple</h1>
                    </div>
                    <div></div>
                    <div className="w-full flex flex-col gap-3">
                        <div className="bg-zinc-100 w-44  px-4 py-4 rounded">
                            <h1 className="w-[90%] font-bold">Junior Software developer</h1>
                        </div>
                        <div className="flex flex-col italic">
                            <span>Lorem ipsum dolor sit.</span>
                            <span>Lorem, ipsum dolor.</span>
                            <span>Lorem, ipsum.</span>
                        </div>
                       <h1 className="text-slate-500">2024-2024</h1>
                       <h1 className="bg-white w-14 p-1 rounded font-bold">Apple</h1>
                    </div>
                </div>
                <div className="center w-1/6 pt-5 flex items-center flex-col h-[90vh]">
                    <div className="w-1 h-full bg-gray-600 relative rounded">
                        <div className="absolute w-5 h-5 rounded-full ring-4  ring-red-400 -top-5 -left-2"></div>
                    </div>
                    <div className="w-1 h-full bg-gray-600 relative rounded">
                        <div className="absolute w-5 h-5 rounded-full ring-4  ring-red-400 -top-2 -left-2"></div>
                    </div>
                    <div className="w-1 h-full bg-gray-600 relative rounded">
                        <div className="absolute w-5 h-5 rounded-full ring-4  ring-red-400 -top-5 -left-2"></div>
                    </div>
                </div>
                <div className="right flex flex-col justify-between gap-5 w-1/3">
                  <div></div>
                  <div className="w-full flex flex-col gap-3">
                        <div className="bg-zinc-100 w-44  px-4 py-4 rounded">
                            <h1 className="w-[90%] font-bold">Junior Software developer</h1>
                        </div>
                        <div className="flex flex-col italic">
                            <span>Lorem ipsum dolor sit.</span>
                            <span>Lorem, ipsum dolor.</span>
                            <span>Lorem, ipsum.</span>
                        </div>
                       <h1 className="text-slate-500">2024-2024</h1>
                       <h1 className="bg-white w-14 p-1 rounded font-bold">Apple</h1>
                    </div>
                    <div></div>
                </div>
              </div>
                
            </div>
       </div>
      </div>
    </motion.div>
  )
}

export default About