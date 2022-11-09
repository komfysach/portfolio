import React from 'react'
import {motion} from 'framer-motion'
import { Experiences } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experiences
}

function ExpCard({experience}: Props) {
  return (
    <article className='mt-10 flex flex-col sm:rounded-xl rounded-3xl items-center space-y-7 sm:space-y-3 flex-shrink-0 h-[600px] md:h-[380px] w-[400px] md:w-[400px] xl:w-[400px] xl:h-[600px] snap-center bg-[#8cf9ff]/10 sm:opacity-20 p-10 opacity-100 sm:hover:opacity-100 text-[#8cf9ff] cursor-atom-pointer transition-opacity duration-200'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full sm:rounded-3xl xl:w-[150px] md:h-[100px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt="Company Image"
        />
        <div className='rounded-full'>
            <h4 className='px-0 md:px-10 text-center xl:text-lg'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 text-center xl:text-2xl xl:py-5'>{experience?.company}</p>
            <p className='uppercase py-5 sm:py-2 text-gray text-center xl:text-md xl:py-5'>
                {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
            </p>
            <ul className='sm:flex-row space-y-4 sm:space-y-2 text-lg sm:text-sm xl:text-xl text-center xl:space-y-7'>
                {experience?.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExpCard