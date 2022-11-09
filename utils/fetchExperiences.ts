import {Experiences} from '../typings'

export const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

    const data = await res.json()
    const experience: Experiences[] = data.experience   

    // console.log('fetching', experience)

    return experience
}