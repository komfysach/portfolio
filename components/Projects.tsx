import React from 'react'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'
import { Project } from '../typings'

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
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
            Projects
        </h3>
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-hidden scrollbar-track-[#a5d1d4]/10 scrollbar-thumb-[#a5d1d4]/80'>
        {projects?.map((project) => (
            <ProjectCard key={project._id} project={project}/>
        ))}
    </div>
    </motion.div>
  )
}

export default Projects