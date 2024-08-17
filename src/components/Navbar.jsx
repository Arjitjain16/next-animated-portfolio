"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navlink from './Navlink'

const Navbar = () => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Contact', url: '/contact' },
  ]

  const [open, setopen] = useState(false)

  return (
    <div className='flex justify-between items-center py-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      <div className='hidden md:flex md:gap-4'>
        {links.map((l, idx) => (
          <Link key={idx} href={l.url} passHref className='text-2xl text-black hover:text-gray-400'>
            <Navlink link={l}/>
          </Link>
        ))}

      </div>
      {/* logo */}
      <div className='md:hidden '>
        <Link href={"/"} className='flex items-center bg-black rounded text-white'>
          <span className='p-2'>Arjit</span>
          <span className='bg-white text-black rounded-md border-[5px]  flex items-center border-black p-2'>Jain</span>
        </Link>
      </div>
      <div className=' md:flex gap-4  hidden '>
        <Link href={""}>
          <Image src="/github.png" width={24} height={24} alt="GitHub logo" />
        </Link>
        <Link href={""}>
          <Image src="/instagram.png" width={24} height={24} alt="GitHub logo" />
        </Link>
        <Link href={""}>
          <Image src="/linkedin.png" width={24} height={24} alt="GitHub logo" />
        </Link>
        <Link href={""}>
          <Image src="/facebook.png" width={24} height={24} alt="GitHub logo" />
        </Link>
      </div>
      {/* button */}
      <button type="button" className='w-1/3 flex flex-col items-center justify-center gap-2 z-50 relative md:hidden' onClick={() => setopen(!open)}>
        <div className='bg-white h-1 w-9 rounded'></div>
        <div className='bg-white h-1 w-9 rounded'></div>
        <div className='bg-white h-1 w-9 rounded'></div>
      </button>
      {open && (
        <div className='h-screen w-screen bg-black absolute top-0 left-0 flex flex-col items-center justify-center text-4xl gap-8'>
          {links.map((l, idx) => (
            <Link key={idx} href={l.href} passHref className='text-white hover:text-gray-400'>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar