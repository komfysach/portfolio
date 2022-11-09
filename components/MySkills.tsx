import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { Skills } from '../typings'

type Props = {
  skills: Skills[]
}

function MySkills({skills}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='hidden h-screen sm:flex relative flex-col text-center md:text-left xl:flex-row max-w-[-2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 sm:top-16 uppercase tracking-[20px] text-[#c7fcff] text-2xl'>Skills</h3>

        <h3 className='absolute top-36 sm:top-28 uppercase tracking-[3px] text-[#c7fcff]/50 text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
          {skills?.slice(0, skills?.length / 2).map((skill) => (
            <Skill key={skill?._id} skill={skill}/>
          ))}
          {skills?.slice(skills?.length / 2, skills.length).map((skill) => (
            <Skill key={skill?._id} skill={skill} directionLeft/>
          ))}
        </div>
    </motion.div>
  )
}

export default MySkills