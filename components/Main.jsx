import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>                                          
                    <p className='uppercase text-sm tracking-widest text-gray-600 pt-3'>LET'S HAVE A GREAT IMPACT TOGETHER</p> 
                    <h2 className='py-4 text-gray-700'>
                        Hey, I'm <span className='text-[#5651e5]'>Reach</span>
                    </h2>
                    <h2 className='py-2 text-gray-700'>Web Developer And Designer</h2>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I am a web developer and designer with a mix of technical and creative skills.
                        I constantly improve and stay ahead of industry trends.
                        My coding skills bring designs to life with a focus on accessibility and user-friendliness.
                        I deliver high-quality, impactful solutions for businesses of all sizes.
                        My eye for detail and problem-solving abilities earn me a reputation for reliability.                      
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href='/' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='/' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                            </div>
                        </a>
                        <Link href='/'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-2 overflow-hidden'>
                        <Image src="/../public/assets/profile.png" alt="profile" layout='fill'  objectFir='cover'/>
                    </div>
                    

                </div>            
            </div>
        </div>
    )
}
 export default Main