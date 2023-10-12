import React from 'react'
import {motion} from 'framer-motion'
import { Experiences } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experiences
}

function ExpCard({experience}: Props) {
  return (
    <article className='mt-10 flex flex-col overflow-hidden sm:rounded-xl rounded-3xl items-center space-y-7 sm:space-y-3 flex-shrink-0 h-[500px] md:h-[300px] w-[350px] md:w-[350px] xl:w-[350px] xl:h-[450px] snap-center bg-[#8cf9ff]/10 sm:opacity-20 p-10 opacity-100 sm:hover:opacity-100 text-[#8cf9ff] cursor-atom-pointer transition-opacity duration-200'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='rounded-3xl sm:rounded-3xl xl:w-[150px] md:h-[100px] md:object-cover object-contain object-center'
        src={urlFor(experience?.companyImage).url()}
        alt="Company Image"
        />
        <div className='rounded-full'>
            <h4 className='px-0 md:px-10 text-center xl:text-lg'>{experience?.jobTitle}</h4>
            <p className='font-bold text-xl mt-1 text-center xl:text-2xl xl:py-5'>{experience?.company}</p>
            <p className='uppercase py-2 text-gray text-xs tracking-wider text-center xl:text-md'>
                {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
            </p>
            <ul className='sm:flex-row space-y-2 text-sm sm:text-sm xl:text-xl text-center'>
                {experience?.points.map((point, i) => (
                    <li key={i}>· {point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExpCard