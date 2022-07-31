import Marquee from "react-fast-marquee";

/* eslint-disable @next/next/no-img-element */
export default function Banner() {
    return (
        <div>
            <div className="w-4/5 mx-auto pt-16 flex flex-col text-rose-600">
                <h1 className="text-7xl mt-40 title-font font-bold md:text-8xl">
                    My Vision Initiative.
                </h1>
                <h2 className="mt-10 font-bold text-4xl font-montserrat">
                    Letting the light in teenage girls shine.
                </h2>
            </div>
            <div className="w-full">
                <Marquee direction="right" gradient={false} className='w-full flex flex-row mt-20'>
                    {facultyImages.map((faculty, index) => (
                        <div key={index} className='h-60 w-60'>
                            <img src={faculty.src} alt={faculty.alt} />
                        </div>
                    ))}  
                </Marquee>
            </div>
        </div>
    )
}

const facultyImages = [
    {
        src: '/images/faculties/1.webp',
        alt:'Sex Education'
    }, 
    {
        src: '/images/faculties/2.webp', 
        alt: 'Personal Development'
    },
    {
        src: '/images/faculties/3.webp', 
        alt: 'Professional Development'
    },
    {
        src: '/images/faculties/4.webp', 
        alt: 'Leadership'
    },
    {
        src: '/images/faculties/5.webp', 
        alt: 'Entrepreneurship'
    },
    {
        src: '/images/faculties/6.webp', 
        alt: 'Mentorship'
    },
]