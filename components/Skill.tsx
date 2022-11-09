import React from 'react'
import {motion} from 'framer-motion'
import { Skills } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skills,
    directionLeft?: boolean;
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-atom-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{ duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-[#c7fcff]/10 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:bg-[#c7fcff]/90 group-hover:grayscale transition
        duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#c7fcff] h-24 w-24
        md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-[rgb(9,19,34)] opacity-100'>{skill?.progress}%</p>
            </div>
        </div>
    </div>
    
  )
}

export default Skill