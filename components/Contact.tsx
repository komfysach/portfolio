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
        <div className='object-contain sm:h-7 sm:w-96 w-64'>
            <Lottie 
            className='cursor-atom-pointer' 
            animationData={animationData}
            loop={true}
            />
        </div>
        <div className='flex flex-col sm:mt-7 mt-20 space-y-5'>
            <div className='mt-16'>
            <h4 className='hidden sm:text-2xl underline text-xl font-vercetti text-center'>
                Like what you see
            </h4>
            </div>
            <div className="hidden sm:flex w-96">
                <Eyes/>
            </div>
                {/* <span className='underline text-2xl decoration-[#c7fcff]/50'>Get in touch.</span> */}
            <div className='space-y-5'>
                <div className='flex items-center sm:space-x-5 space-x-2 justify-center'>
                <PhoneIcon className='text-[#c7fcff] h-7 w-7 animate-pulse'/>
                <p className='font-vercetti tracking-wider'>{pageInfo?.phoneNumber}</p>
                </div>

                <div className='flex items-center sm:space-x-5 space-x-2 justify-center'>
                <EnvelopeIcon className='text-[#c7fcff] h-7 w-7 animate-pulse'/>
                <p className='font-vercetti tracking-wider'>{pageInfo?.email}</p>
                </div>

                <div className='flex items-center sm:space-x-5 space-x-2 justify-center'>
                <MapPinIcon className='text-[#c7fcff] h-7 w-7 animate-pulse'/>
                <p className='font-vercetti tracking-wider'>{pageInfo?.address}</p>
                </div>
            </div>

            {/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit sm:mx-auto sm:max-w-7xl max-w-4xl'>
                <div className='sm:flex sm:flex-row flex-col items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput w-72' type='text'/>
                    <input {...register('email')} placeholder='Email' className='contactInput w-72' type='email'/>
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button className='primaryButton'>Submit</button>

            </form> */}
        </div>
    </div>
  )
}

export default Contact