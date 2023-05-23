"use client"
import {GiHamburgerMenu} from 'react-icons/gi'
import { Montserrat } from 'next/font/google'
import { FaMoon, FaSun } from 'react-icons/fa'
import React from 'react'
import { useTheme } from "next-themes";

const montserrat = Montserrat({
  weight: ['400','600', '700'],
  subsets: ['latin'],
})



const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <header className={montserrat.className}>
      <nav className=' mr-5 ml-5 md:mr-40 md:ml-40 mt-5 mb-10 flex items-center justify-between'>
        <h1 className=' font-bold text-sky-500 cursor-pointer text-lg dark:text-white'>Zeus Rentals</h1>
        <div className=' flex items-center'>
            <div className=' text-sky-500 dark:text-white mr-6 text-xl h-8 w-8 flex items-center justify-center rounded-full cursor-pointer'> <GiHamburgerMenu /> 
            </div>
            <div onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} className=' text-sky-500 border-2 border-gray-200 text-xl h-8 w-8 flex items-center justify-center rounded-full cursor-pointer'> 
            {
              theme=="dark" ? <FaSun color='yellow'/> : <FaMoon /> 
            }
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header