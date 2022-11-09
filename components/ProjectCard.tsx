import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  project: Project
}

function ProjectCard({project}: Props) {
  return (
    <article className='flex mt-12 flex-col overflow-hidden rounded-3xl items-center justify-center text-center space-y-7 sm:space-y-2 flex-shrink-0 sm:h-[600px] w-[400px] md:w-[300px] xl:w-[400px] snap-center bg-[#8cf9ff]/10 opacity-100 sm:opacity-20 p-10 sm:hover:opacity-100 text-[#8cf9ff] transition-opacity duration-200'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-72 h-56 rounded-xl xl:w-[300px] object-cover object-center overflow-hidden'
        src={urlFor(project.image).url()}
        alt="Project Image"
        />
        <div className='flex space-x-2 mt-5'>
          {project?.technologies.map((technology, i) => (
                <img key={i} className='h-10 w-10 mt-5 mb-5 object-cover rounded-full' src={urlFor(technology.image).url()} alt='technologies'/>
          ))}
        </div>
        <div className='ml-5 mr-5 mb-5 mt-2'>
            <p className='font-vercetti text-2xl'>{project?.title}</p>
            <p className='text-sm mt-2 mb-2 font-inconsolata'>{project?.summary}</p>
              <Link href={project?.linkToGithub} passHref>
                <a target='_blank'>
                <button className='heroButton m-3'>Github</button>
                </a>
               </Link>
               <Link href={project?.linkToBuild} passHref>
                <a target='_blank'>
               <button className='primaryButton m-3'>Demo</button>
               </a>
               </Link>
        </div>
    </article>
  )
}

export default ProjectCard