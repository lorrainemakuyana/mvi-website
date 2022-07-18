import Marquee from "react-fast-marquee";

/* eslint-disable @next/next/no-img-element */
export default function Banner() {
    return (
        <div>
            <div className="w-4/5 mx-auto pt-16 flex flex-col text-rose-500 font-montserrat">
                {/* <div className="mt-24 w-44 h-44">
                    <img src="/images/logos/2.png" alt="logo" />
                </div> */}
                <h1 className=" mt-40 font-extrabold text-8xl">
                    My Vision Initiative.
                </h1>
                <h2 className="mt-10 italic font-bold text-4xl font-sans">
                    Letting the light in teenage girls shine...
                </h2>
            </div>
            <Marquee direction="right" gradient={true} gradientColor={[253, 164, 175]} className=' text-rose-300 flex flex-row mt-20'>
                {facultyImages.map((faculty, index) => (
                    <div key={index} className='h-60 w-60 m-2'>
                        <img src={faculty.src} alt={faculty.alt} />
                    </div>
                ))}  
            </Marquee>
        </div>
    )
}

const facultyImages = [
    {
        src: '/images/faculties/1.png',
        alt:'Sex Education'
    }, 
    {
        src: '/images/faculties/2.png', 
        alt: 'Personal Development'
    },
    {
        src: '/images/faculties/3.png', 
        alt: 'Professional Development'
    },
    {
        src: '/images/faculties/4.png', 
        alt: 'Leadership'
    },
    {
        src: '/images/faculties/5.png', 
        alt: 'Entrepreneurship'
    },
    {
        src: '/images/faculties/6.png', 
        alt: 'Mentorship'
    },
]