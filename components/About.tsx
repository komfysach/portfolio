import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../lotties/komfy-kar.json'

type Props = {}

function About({}: Props) {
    
    const [language, setlanguage] = useState(false)

    const handleNederlands = () => {
        setlanguage(false)
    }

    const handleEnglish = () => {
        setlanguage(true)
    }

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute sm:flex hidden top-24 uppercase tracking-[20px] text-[#c7fcff] text-2xl'>
            About
        </h3>
        <motion.div
        initial={{
            y: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        className='cursor-atom-pointer lg:w-[4000px] sm:w-[4000px] w-[400px]'
        >
            <Lottie animationData={animationData}
           />
        </motion.div>
        <div className='flex flex-col'>
            {language ? (
                <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#c7fcff]/50'>little</span> background</h4>
                <p className='text-sm font-inconsolata'>
                    I am A Capetonian🌞 now living in Eindhoven💡
                    Experienced Multimedia UX/UI Designer🧙🏾‍♂️ and Fullstack Developer with a passion for coding👨🏾‍💻
                    I have been pixel pushing for both small and large companies across the globe for the past 6 years. Along this journey I realised my love for coding.
                    My coding adventure has taken me through the foundations of HTML🖐🏾 CSS🎨 and JavaScript with the ReactJS⚛️ framework for front-end, to full-stack builds with Node🟩, Python🐍 and Golang🐹
                    Being a life long learner, I enjoy exploring new tech and keeping up-to-date with innovations in the industry. Currently I am adding NextJS🔼 - which this site is built with, BunJS🥟 and QwikJS⚡ to my repotoire. Overall, I love adding REAL value✨ wherever I am able to.
                </p>
            </div>
            ) : (
                <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Hier is een <span className='underline decoration-[#c7fcff]/50'>beetje</span> over mij</h4>
            <p className='text-sm font-inconsolata'>
            Ik kom uit Kaapstad🌞 en nu woon ik in Eindhoven💡
            Ik ben een ervaren multimedia UX/UI designer🧙🏾‍♂️ en fullstack ontwikkelaar met een passie voor coderen👨🏾‍💻 Ik heb de afgelopen 6 jaar voor zowel kleine als grote bedrijven gewerkt. 
            Door mijn ervaringen de afgelopen jaren en de projecten waaraan ik heb gewerkt, ontdekte ik mijn passie voor coderen. 
            Dit heeft mij door de basis geleid van HTML🖐🏾 CSS🎨 en JavaScript met ReactJS⚛️ framework voor front-end tot full-stack builds met Node🟩, Python🐍 en Golang🐹 
            Ik ben een levenslange leerling, waardoor ik graag nieuwe tech ontdek en op de hoogte blijf van innovaties in de branche. 
            Op dit moment voeg ik NextJS🔼 - waarmee ik deze site heb gebouwd - BunJS🥟 en QwikJS⚡toe aan mijn skill set. Kortom, voeg ik graag ECHTE waarde toe ✨waar ik kan.
            </p>
        </div>
            )}
        <div className="flex space-x-5 mt-10 ml-7 items-start justify-center md:justify-start">
            <button onClick={handleEnglish} className={`${language ? 'primaryButton' : 'heroButton'}`}>{`${language ? 'English' : 'Engels'}`}</button>
            <button onClick={handleNederlands} className={`${language ? 'heroButton' : 'primaryButton'}`}>{`${language ? 'Dutch' : 'Nederlands'}`}</button>
        </div>
        </div>
    </div>
  )
}

export default About