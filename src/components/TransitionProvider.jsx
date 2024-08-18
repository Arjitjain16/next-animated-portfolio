"use client"
import React from 'react';
import { AnimatePresence} from 'framer-motion';
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';

function TransitionProvider({ children }) {
  const pathName = usePathname()
  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className="w-full h-[100vh] bg-gradient-to-b from-blue-50 to-red-100">
        <motion.div
          className='w-screen h-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease : "easeOut" }}
        />
        <motion.div
          className='fixed m-auto  top-0 right-0 bottom-0 left-0 text-white bg-red-500 text-8xl  cursor-default z-50 h-fit w-fit'
          initial={{opacity : 1}}
          animate={{ opacity : 0 }}
          exit={{ opacity : 0 }}
          transition={{ duration: 0.9, ease : "easeOut" }}
        > {pathName}
        </motion.div>
        <motion.div
          className='w-screen h-screen fixed bg-black rounded-b-[100px] z-40'
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" , transition : {delay:0.7}}}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-96px)] w-full lg:">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider