import React from 'react'
import portfolio from '../public/assets/projects/portfolio.png';
import ProjectsDemo from './ProjectsDemo';
import survey from '../public/assets/projects/survey.png';

const Projects = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>Look What I Have Built</h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    <ProjectsDemo title='Portfolio Website'
                        backgroundImg={portfolio}
                        languages='Next JS'                      
                        projectUrl='/'
                    />
                    
                    <ProjectsDemo title='Survey Website'
                        backgroundImg={survey}
                        languages= 'Angular JS' 
                    projectUrl='/'/>
                    
                    <ProjectsDemo title='Survey Website'
                        backgroundImg={survey}
                        languages= 'Angular JS' 
                        projectUrl='/' />
                    
                    <ProjectsDemo title='Portfolio Website'
                        backgroundImg={portfolio}
                        languages='Next JS'                      
                        projectUrl='/'
                    />

                    <ProjectsDemo title='Portfolio Website'
                        backgroundImg={portfolio}
                        languages='Next JS'                      
                        projectUrl='/'
                    />

                    <ProjectsDemo title='Portfolio Website'
                        backgroundImg={portfolio}
                        languages='Next JS'                      
                        projectUrl='/'
                    />
                    
                </div>

            </div>

        </div>

    )
} 

export default Projects