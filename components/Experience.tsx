import React from 'react'
import {motion} from 'framer-motion'
import ExpCard from './ExpCard';
import { Experiences } from '../typings';

type Props = {
    experiences: Experiences[]
}

function Experience({experiences}: Props) {
  return (
    <motion.div 
    initial={{
        x: -200,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{
        x: 0,
        opacity: 1,
    }}
    viewport={{ once: true }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 sm:top-16 uppercase tracking-[20px] text-[#c7fcff] text-2xl'>
            Experience
        </h3>
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-hidden scrollbar-track-[#a5d1d4]/10 scrollbar-thumb-[#a5d1d4]/80'>
        {experiences?.map((experience) => (
        <ExpCard key={experience?._id} experience={experience}/>
        ))}
    </div>
    </motion.div>
  );
}

export default Experience