import Link from 'next/link'
import React from 'react'

import {ArrowUpCircleIcon} from '@heroicons/react/24/outline'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-screen flex relative flex-col justify-center items-center h-screen'>
        {/* <Lottie options={defaultOptions} width={1920} height={400}/> */}
        <div className='bg-[#a5d1d4] sm:p-10 p-5 w-full overflow-hidden sm:mt-36 mt-40'>
            <p className='text-[#242424] font-inconsolata text-xl text-center'>Made with 💙💛 in Eindhoven</p>
            <div className='p-5 z-20 text-center'>
                <Link href="#about">
                <button className='heroButton m-2'>About</button>
                </Link>
                <Link href="#exp">
                <button className='heroButton m-2'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton m-2'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton m-2'>Projects</button>
                </Link>
            </div>
            <Link href="#hero">
            <div className='text-[rgb(1,15,36)] cursor-atom-pointer animate-bounce flex flex-col items-center justify-center mt-5'>
                <ArrowUpCircleIcon className='h-10 w-10 rounded-full mb-3'/>
                <p className='text-center'>Top</p>
                {/* <p className='text-[rgb(1,15,36)] font-inconsolata text-center'>Top</p> */}
            </div>
            </Link>
            {/* <div className='flex flex-col'>
            <Link href='https://getkomfy.net' passHref>
              <a className='flex flex-col px-20' target='_blank' rel='noopener noreferrer'>
            <button className='heroButton mt-5'>My Other Website</button>
            </a>
            </Link>
            </div> */}
        </div>
    </div>
  )
}

export default Footer