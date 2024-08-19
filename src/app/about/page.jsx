"use client"
import { delay, easeInOut, easeOut, motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from 'react'

const About = () => {
    const containerRef = useRef();
    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });


    const experienceRef = useRef();
    const isexperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    const { scrollYProgress } = useScroll({ container: containerRef });
    console.log(scrollYProgress)
  
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-scroll lg:flex" ref={containerRef} >
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-44 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <div className="flex flex-col item-center gap-7">
            <h1 className="text-4xl font-bold">Biography</h1>
            <p className="text-xl w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum est vel ipsum vestibulum, at aliquet velit dignissim. Nulla facilisi. 
              Sed sed velit vel enim aliquet scelerisque. Integer ullamcorper, tortor at ultricies semper, 
              justo sapien varius velit, vel eleifend felis lectus nec velit. Sed vel nisi vel felis fermentum scelerisque. 
              Nulla facilisi.
            </p>
            <span className="italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, molestiae.</span>
            <div>
              <motion.svg 
              initial={{opacity : 0 , y:0}}
              animate={{opacity : 1 , y: 10}}
              transition={{repeat:Infinity , duration : 3 , ease: easeInOut}}
                xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 hover:text-gray-800 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
          </div>
          <div className="flex flex-col item-center gap-7" ref={skillRef}>
            <motion.h1 initial={{x : "-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="text-4xl font-bold">Skills</motion.h1>
            <motion.div initial={{x : "-300px"}} animate={isSkillRefInView ? {x:0} : {}}  className="flex flex-wrap gap-5">
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
            </motion.div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 hover:text-gray-800 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-7" ref={experienceRef}>
            <motion.h2 initial={{x : "-300px"}} animate={isexperienceRefInView ? {x :0} :{}} transition={{delay : 0.2}} className="text-4xl font-bold mb-8">Experience</motion.h2>
            <motion.div className="relative w-full" initial={{x : "-300px"}} animate={isexperienceRefInView ? {x :0} :{}}>
              <div className="w-full lg:w-[44%]">
                
                {/* Timeline Item 1 (Left) */}
                <div className="flex flex-col sm:flex-row h-full gap-6 sm:gap-16">
                  <div className="sm:w-1/2 flex flex-col gap-2">
                    <div className="bg-zinc-100 w-full px-4 py-3 rounded">
                      <h1 className="font-bold">Junior Software Developer</h1>
                    </div>
                    <div className="flex flex-col italic">
                      <span>Lorem ipsum dolor sit.</span>
                      <span>Lorem, ipsum dolor.</span>
                      <span>Lorem, ipsum.</span>
                    </div>
                    <h1 className="text-slate-500">2024-2024</h1>
                    <h1 className="bg-white w-14 p-1 rounded font-bold">Apple</h1>
                  </div>
                  <div className="center sm:w-1/6 flex items-center flex-col pt-5 sm:pt-0">
                    <div className="w-1 h-full bg-gray-600 relative rounded">
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -top-2 -left-2 sm:left-0"></div>
                    </div>
                  </div>
                  <div className="hidden sm:block w-1/2"></div>
                </div>
                
                {/* Timeline Item 2 (Right) */}
                <div className="flex flex-col sm:flex-row h-full gap-6 sm:gap-16">
                  <div className="hidden sm:block w-1/2"></div>
                  <div className="center sm:w-1/6 flex items-center flex-col pt-5 sm:pt-0">
                    <div className="w-1 h-full bg-gray-600 relative rounded">
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -top-2 -left-2 sm:left-0"></div>
                    </div>
                  </div>
                  <div className="sm:w-1/2 flex flex-col gap-2">
                    <div className="bg-zinc-100 w-full px-4 py-3 rounded">
                      <h1 className="font-bold">Junior Software Developer 2</h1>
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
                
                {/* Timeline Item 3 (Left) */}
                <div className="flex flex-col sm:flex-row h-full gap-6 sm:gap-16">
                  <div className="sm:w-1/2 flex flex-col gap-2">
                    <div className="bg-zinc-100 w-full px-4 py-3 rounded">
                      <h1 className="font-bold">Junior Software Developer 3</h1>
                    </div>
                    <div className="flex flex-col italic">
                      <span>Lorem ipsum dolor sit.</span>
                      <span>Lorem, ipsum dolor.</span>
                      <span>Lorem, ipsum.</span>
                    </div>
                    <h1 className="text-slate-500">2024-2024</h1>
                    <h1 className="bg-white w-14 p-1 rounded font-bold">Apple</h1>
                  </div>
                  <div className="center sm:w-1/6 flex items-center flex-col pt-5 sm:pt-0">
                    <div className="w-1 h-full bg-gray-600 relative rounded">
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -top-2 -left-2 sm:left-0"></div>
                    </div>
                  </div>
                  <div className="hidden sm:block w-1/2"></div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
        <div className="hidden lg:block w-1/3 xl:1/2">
          {/* <BrainSVG/> */}
        </div>
      </div>
    </motion.div>
  )
}

export default About;
