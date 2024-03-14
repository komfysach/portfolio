import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../lotties/komfy-kar.json";

type Props = {};

function About({}: Props) {
  const [language, setlanguage] = useState(false);

  const handleNederlands = () => {
    setlanguage(false);
  };

  const handleEnglish = () => {
    setlanguage(true);
  };

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute sm:flex hidden top-9 uppercase tracking-[20px] text-[#c7fcff] text-xl">
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
        className="cursor-atom-pointer lg:w-[4000px] sm:w-[4000px] w-[200px]"
      >
        <Lottie animationData={animationData} />
      </motion.div>
      <div className="flex flex-col">
        {language ? (
          <div className="md:space-y-10 space-y-3 px-0 md:px-10">
            <h4 className="md:text-4xl text-sm font-semibold">
              Here is a{" "}
              <span className="underline decoration-[#c7fcff]/50">little</span>{" "}
              background
            </h4>
            <p className="md:text-sm text-xs font-inconsolata">
              I am a Capetonian🌞 now living in Eindhoven💡Experienced Developer
              with a passion for coding and tech👨🏾‍💻 I have been pushing code for
              both small and large companies across the globe for the past 8
              years. My coding adventure has taken me through the foundations of
              HTML🖐🏾 CSS🎨 and JavaScript with the ReactJS⚛️ framework for
              front-end, to full-stack builds with Node🟩, Python🐍 and Golang🐹
              Being a life long learner, I enjoy exploring new tech and keeping
              up-to-date with innovations in the industry.
            </p>
          </div>
        ) : (
          <div className="md:space-y-10 space-y-3 px-0 md:px-10">
            <h4 className="md:text-4xl text-sm font-semibold">
              Here is a{" "}
              <span className="underline decoration-[#c7fcff]/50">little</span>{" "}
              background
            </h4>
            <p className="md:text-sm text-xs font-inconsolata">
              Ik kom uit Kaapstad🌞 en nu woon ik in Eindhoven💡 Ik ben een
              ervaren ontwikkelaar met een passie voor coderen en tech👨🏾‍💻 Ik heb
              de afgelopen 8 jaar voor zowel kleine als grote bedrijven gewerkt.
              Dit heeft mij door de basis geleid van HTML🖐🏾 CSS🎨 en JavaScript
              met ReactJS⚛️ framework voor front-end tot full-stack builds met
              Node🟩, Python🐍 en Golang🐹 Ik ben een levenslange leerling,
              waardoor ik graag nieuwe tech ontdek en op de hoogte blijf van
              innovaties in de branche.
            </p>
          </div>
        )}
        <div className="flex space-x-5 mt-3 sm:mt-10 md:ml-7 md:items-start items-center justify-center md:justify-start">
          <button
            onClick={handleEnglish}
            className={`${language ? "primaryButton" : "heroButton"}`}
          >{`${language ? "English" : "Engels"}`}</button>
          <button
            onClick={handleNederlands}
            className={`${language ? "heroButton" : "primaryButton"}`}
          >{`${language ? "Dutch" : "Nederlands"}`}</button>
        </div>
      </div>
    </div>
  );
}

export default About;
