"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'

const page = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target : ref})
  const x = useTransform(scrollYProgress ,[0,1] ,['0%','-74%'] )

  const projects = [
    {
      id: 1,
      title: "Blogging Plate",
      color: "from-red-300 to-blue-300",
      description: "A platform for creating and sharing blogs.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/blogging-plate"
    },
    {
      id: 2,
      title: "ChatApp MERN",
      color: "from-blue-300 to-violet-300",
      description: "A real-time chat application built with MERN stack.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/chatapp-mern"
    },
    {
      id: 3,
      title: "Marine Vista",
      color: "from-violet-300 to-purple-300",
      description: "A website showcasing marine life and conservation efforts.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/marine-vista"
    },
    {
      id: 4,
      title: "Brain Space",
      color: "from-purple-300 to-zinc-300",
      description: "An interactive platform for brain games and puzzles.",
      img: "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "https://example.com/brain-space"
    }
  ];
  
  
  
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className='h-[600vh] relative' ref={ref}>
        <div className='h-[calc(100vh-6rem)] flex items-center justify-center text-8xl  text-center'>My Works</div>
        <div className='sticky top-0  h-screen flex items-center'>
          <motion.div className='flex' style={{x}}>
            <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300'></div>
            {projects.map(item=>(
                <div key={item.id} className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                  <div className='flex flex-col gap-8 text-white'>
                    <h1>{item.title}</h1>
                    <div className='relative'>
                      <Image src={item.img} alt='' fill/>
                    </div>
                    <p>{item.description}</p>
                    <Link href={item.url}><button>See Demo</button></Link>
                  </div>
                </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default page