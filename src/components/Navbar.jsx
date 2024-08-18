"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, stagger } from 'framer-motion';
import Navlink from './Navlink'; // Import Navlink component
import { list } from 'postcss';

const Navbar = () => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Contact', url: '/contact' },
  ];

  const [open, setOpen] = useState(false);

  const variants = {
    top: {
      closed: { rotate: 0,},
      opened: { rotate: 45, backgroundColor: `rgb(255,255,255)` },
    },
    center: {
      closed: { opacity: 1 },
      opened: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0 },
      opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
    },
  };

  const listVariant = {
    closed : { x : "100vw"},
    opened : { x : "0" ,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const listItemVariant = {
    closed : { opacity: 0 , x: "10vw" },
    opened : { opacity: 1 , x: "0" },
  }

  return (
    <div className="flex justify-between pt-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex md:gap-4">
        {links.map((link, index) => (
          <Link key={index} href={link.url} className="text-2xl text-black hover:text-gray-400">
            <Navlink link={link} />
          </Link>
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex">
        <Link href="/" className="flex items-center bg-black rounded text-white">
          <span className="p-1">Arjit</span>
          <span className="bg-white text-black rounded-md border-[5px] flex items-center border-black p-1">
            Jain
          </span>
        </Link>
      </div>
      <div className="md:flex gap-4 hidden">
        <Link href="">
          <Image src="/github.png" width={24} height={24} alt="GitHub logo" />
        </Link>
        <Link href="">
          <Image src="/instagram.png" width={24} height={24} alt="Instagram logo" />
        </Link>
        <Link href="">
          <Image src="/linkedin.png" width={24} height={24} alt="LinkedIn logo" />
        </Link>
        <Link href="">
          <Image src="/facebook.png" width={24} height={24} alt="Facebook logo" />
        </Link>
      </div>
      {/* button */}
      <button
        type="button"
        className="w-1/3 flex flex-col items-center justify-center gap-2 z-50 relative md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={variants.top}
          animate={open ? 'opened' : 'closed'}
          className="bg-black h-1 w-12 rounded origin-center"
        />
        <motion.div
          variants={variants.center}
          animate={open ? 'opened' : 'closed'}
          className="bg-black h-1 w-12 rounded"
        />
        <motion.div
          variants={variants.bottom}
          animate={open ? 'opened' : 'closed'}
          className="bg-black h-1 w-12 rounded origin-left"
        />
      </button>
      {open && (
        <motion.div variants={listVariant} initial="closed" animate="opened" className="h-screen w-screen bg-black absolute top-0 left-0 flex flex-col items-center justify-center text-4xl gap-8 z-40">
          {links.map((link, index) => (
            <motion.div key={index} variants={listItemVariant}>
              <Link  href={link.url} className="text-white hover:text-gray-400">
              {link.title}
            </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;