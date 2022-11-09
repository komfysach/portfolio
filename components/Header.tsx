import React, { useState } from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

function Header({socials}: Props) {
   
  return (
    <header className='sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.25,
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            {socials?.map((social) => (
                <SocialIcon key={social?._id} url={social?.url} fgColor='gray' bgColor='transparent' className='cursor-atom-pointer hover:scale-110'/>
            ))}
        </motion.div>
        <Link href='#contact'>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.25,
        }}
        className ='flex flex-row items-center text-gray-300 cursor-atom-pointer hover:scale-110'>
        <SocialIcon className='cursor-atom-pointer' network='email' fgColor='gray' bgColor='transparent'/>
        </motion.div>
        </Link>
    </header>
  )
}

export default Header