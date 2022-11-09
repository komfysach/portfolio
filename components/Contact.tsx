import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import Lottie from 'lottie-react'
import animationData from '../lotties/lets-connect.json'
import { SubmitHandler, useForm } from 'react-hook-form'
import Eyes from './Eyes'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo
}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

function Contact({pageInfo}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:sachinlendis@gmail?subject=${formData.subject}&body=${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen flex relative flex-col text-center px-10 justify-center items-center'>
        <div className='absolute top-4 mt-28 sm:mt-12 object-contain h-7 w-96'>
            <Lottie 
            className='cursor-atom-pointer' 
            animationData={animationData}
            loop={true}
            />
        </div>
        <div className='flex flex-col mt-28 space-y-10 sm:space-y-5'>
            <h4 className='text-2xl font-vercetti text-center'>
                Like what you see
            </h4>
            <div className="hidden sm:flex h-56 ml-7 w-96">
                <Eyes/>
            </div>
                <span className='underline text-2xl decoration-[#c7fcff]/50'>Get in touch.</span>
            <div className='space-y-10 sm:space-y-2'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#c7fcff] h-7 w-7 animate-pulse'/>
                <p className='font-vercetti tracking-wider'>{pageInfo?.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#c7fcff] h-7 w-7 animate-pulse'/>
                <p className='font-vercetti tracking-wider'>{pageInfo?.email}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#c7fcff] h-7 w-7 animate-pulse'/>
                <p className='font-vercetti tracking-wider'>{pageInfo?.address}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type='text'/>
                    <input {...register('email')} placeholder='Email' className='contactInput' type='email'/>
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button className='primaryButton'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Contact