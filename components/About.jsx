import React from 'react'
import aboutImg from '../public/assets/aboutImg.jpg'
import Image from 'next/image';

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className= 'uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Get to know ME</h2>
                    <p className= 'py-2 text-grey-600'>I am a software developer and I am a developer who want to learn new technologies in free time.</p>
                    <p className= 'py-2 text-grey-600'>
                        I have done many projects and hands-on labs with C#, Java, JavaScript, React,
                        Angular, HTML, Node.Js, Python (Not good with it), CSS, Tailwind, and SQL.
                        I volunteered as a full stack developer using React for front-end and I have worked with 4 developers, 2 designers,
                        and 2 product managers to ideate software solutions using Agile. I also had internship experience at a startup company.
                        I was working on the front end with React during my internship. Besides coding, I know how to do software development projects by building software documents (SDD).
                        The fact about me: I am really interested to share my ideas for improving software products in a team.
                    </p>
                    <p className= 'py-2 text-grey-600 underline cursor-pointer'>Check out some of my projects.</p>
                </div>
                <div className= 'w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={aboutImg} alt="profile"/>
                </div>

            </div>

        </div>
    )
}

export default About