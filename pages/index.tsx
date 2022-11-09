import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import MySkills from '../components/MySkills'
import Text from '../components/Text'

import {Experiences, PageInfo, Project, Skills, Social} from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experience: Experiences[];
  skills: Skills[];
  projects: Project[];
  socials: Social[];

}

const Home = ({pageInfo, experience, skills, socials, projects}: Props) => {
  return (
    <div className='bg-[rgb(1,15,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden -z-10 font-vercetti cursor-atom-default scrollbar-thin scrollbar-hidden scrollbar-track-[#a5d1d4]/10 scrollbar-thumb-[#a5d1d4]/80'>
      <Head>
        <title>Sachin Lendis | Full-stack Dev</title>
        <meta name="description" content="Sachin Lendis | Full-stack Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header socials={socials}/>
      <main>
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>

      </section>

      {/* About */}
      <section id='about' className='snap-center'>

        <About/>
      </section>

      {/* Experience */}
      <section id='exp' className='snap-center'>
        <Experience experiences={experience}/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
      <MySkills skills={skills}/>
      </section>
      

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact pageInfo={pageInfo}/>
      </section>
      </main>
      <footer>
        <section className='snap-end'>
          <Footer/>
          <Text/>
        </section>
      </footer>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experiences[] = await fetchExperience();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request is made
    // - At most once every 100 seconds

    revalidate: 30,
  };
};
