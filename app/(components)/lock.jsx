'use client'
import Link from "next/link"
import { useState } from "react"

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-orange-500 to-pink-500 p-4">
        
        <div className="text-white font-bold text-xl">Pandario</div>

        <div className="hidden lg:flex space-x-4">

          <Link href="/" className="text-white hover:text-indigo-700">Main</Link>
          <Link href="/"  className="text-white hover:text-indigo-700">My stack</Link>
          <Link href="/" className="text-white hover:text-indigo-700">My projects</Link>
          <Link href="/" className="text-white hover:text-indigo-700">Contact me</Link>
        </div>

        <div className="lg:hidden">

          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-2">
              <span 
                className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}>

              </span>
              <span 
                className={`block h-0.5 w-8 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}>

              </span>
              <span 
                className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}>

              </span>
          </button>
        </div>
        <div className="top-14 left-0 right-0 bg-gradient-to-r from-indigo-500 via-orange-500 to-pink-500 p-4 flex flex-col items-center lg:hidden">
        {isOpen && (
            <div >
              
              <Link href="/" className="text-white hover:text-indigo-700">Main</Link>
              <Link href="/"  className="text-white hover:text-indigo-700">My stack</Link>
              <Link href="/" className="text-white hover:text-indigo-700">My projects</Link>
              <Link href="/" className="text-white hover:text-indigo-700">Contact me</Link>
            </div>
        )}
        </div>
        
    </nav>
  )
}

export default Nav