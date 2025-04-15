import Link from 'next/link'
import React from 'react'
import { MegaMenuNav } from './MegaMenuNav'


const MegaMenu = () => {
  return (
    <div className="w-full top-0 left-0 absolute flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 text-white z-50">
    <Link href="/">
      <img
        src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
        alt="Logo"
        className="w-[120px] sm:w-[150px] md:w-[180px]"
      />
    </Link>

    <div>
      <MegaMenuNav/>
    </div>

    <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
      
      
      
      <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#E73C5F] border-none rounded-md hidden sm:block">
        <Link href={`/Contact`}>Book a Demo</Link>
      </button>
    
    </div>
  </div>
  )
}

export default MegaMenu