import React from 'react'
import Image from 'next/image';
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import JavaScript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import firebase from '../public/assets/skills/firebase.png'
import csharpe from '../public/assets/skills/CSharpe.png'
import java from '../public/assets/skills/java.jpg'
import mongodb from '../public/assets/skills/mongodb.png'
import github from '../public/assets/skills/github.png'
import oracle from '../public/assets/skills/oracle.png'
import python from '../public/assets/skills/python.webp'

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={html} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={css} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={Tailwind} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={JavaScript} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={react} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={csharpe} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C SHARPE</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={firebase} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>FIREBASE</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={java} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVA</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={mongodb} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MONGODB</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={oracle} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>ORACLE</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={python} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PYTHON</h3>
                            </div>                        
                        </div>                            
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={github} alt="profile"  width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GITHUB</h3>
                            </div>                        
                        </div>                            
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Skills