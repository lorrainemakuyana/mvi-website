import React from 'react'
import ButtonLink from '../links/ButtonLink'

export default function Programs() {
  return (
    <section id='programs'>
        <div className=' w-full md:w-4/5 mx-auto pb-16'>
            <h1 className=' text-4xl md:text-6xl text-rose-600 title-font font-bold mb-10 pl-10 md:pl-0'>Our Programs</h1>
            <div className='flex flex-col font-montserrat lg:flex-row'>
                <div className='flex w-full bg-rose-700 flex-col justify-center p-10 md:px-20 md:pt-20 md:pb-14 text-white lg:rounded-bl-xl lg:rounded-tl-xl' >
                    <h1 className='text-3xl pb-5 font-bold'>{programs[0].title}</h1>
                    <p className='font-medium text-lg'>{programs[0].description}</p>  
                    <ButtonLink href='/contact' target='_self' className='border w-fit my-5 border-white'>{programs[0].button}</ButtonLink>
                </div>
                <div className='flex w-full bg-white text-rose-700 flex-col justify-center p-10 md:px-20 md:pt-20 md:pb-14 border-b md:border-2 border-rose-700 lg:rounded-br-xl lg:rounded-tr-xl'>
                    <h1 className='text-3xl pb-5 font-bold'>{programs[1].title}</h1>
                    <p className='font-medium text-lg'>{programs[1].description}</p>  
                    <ButtonLink href='/contact' target='_self' className='border w-fit my-5 border-rose-700'>{programs[1].button}</ButtonLink>
                </div>
            </div>
        </div>
    </section>
  )
}

const programs = [
    {
        title: 'MVI Fellows Network', 
        description: 'The Fellows Network is a five-week program for young girls during which the MVI team and experts from chosen fields interact with the selected Fellows in our areas of discipline. These fellows graduate into our esteemed MVI Fellows Alumni.',
        button: 'Join the Network',
    }, 
    {
        title: 'MVI ROAR Program', 
        description: 'The ROAR Program is a high school-based program which runs at the specific school and managed by a club patron in partnership with MVI. This program is designed to provide remote access to MVI to all girls. Reach out to us to enrol your school.', 
        button: 'Enrol my school',
    }
]