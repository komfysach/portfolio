import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Lottie from 'lottie-react'
import animationData from '../lotties/yes-indeed.json'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo,
}

function Hero({pageInfo}: Props) {
    
    const [text, count] = useTypewriter({
        words: [
            "Hi! I'm Sachin Lendis🌞", 
            "Designer-who-loves-coding.tsx", 
            "<lifeLongLearner />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    
  return (
    <div className='h-screen flex flex-col space-y-8 mt-5 items-center justify-center'>
        <BackgroundCircles/>
        {/* <Image className='relative rounded-full mx-auto object-cover' layout='fill' src="https://getkomfy.net/wp-content/uploads/2021/10/sach.jpg"/> */}
        <img className='relative rounded-full h-36 w-36 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt=""/>
        <div className='object-fit-contain h-22 w-64'>
            <Lottie
                animationData={animationData}
                loop={true}
            />
        </div>
        {/* <h2 className='text-sm uppercase text-[#c7fcff] tracking-[15px]'>Full-Stack Dev</h2> */}
        {/* <h3 className='text-sm opacity-80 text-[#a5d1d4] tracking-[1px]'>Experienced designer and business developer, who loves to code</h3> */}
        <h1 className='text-3xl lg:text-6xl font-semibold px-5'>
        <span className='font-sans'>{text}</span>
        <Cursor cursorColor='#8cf9ff'/>
        </h1>

        <div className='pt-5 z-20'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#exp">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero