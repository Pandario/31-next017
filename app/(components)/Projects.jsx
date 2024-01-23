import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <div className="m-4 pt-8" id="projects">

        <h1 className="text-3xl font-bold text-center p-4">My projects</h1>
        <h3 className="text-xl text-center mb-4 p-4">Here you can see some of my last projects</h3>

        <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 md:gap-8 mx-auto">

                    <div className="flex flex-col w-64  my-1 shadow-lg rounded-lg">
                        {/* Project 1 */}
                    
                        <Image
                            src="/img/projects/proj.png"
                            width={256}
                            height={100}
                            alt="Picture of the author"
                            className="order-first lg:order-none items-center rounded-lg"
                        />
                        
                        <h3 className="text-xl font-semibold text-center pt-1">Portfolio</h3>

                        <p className="p-4 text-gray-500 font-mono text-start">
                            Yep. This project. Responsive, made with grid and tailwind. 
                            Forms separately connected to two separate MongoDB. 
                        </p>

                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 mt-2 mx-16 py-1  px-4 rounded">
                                <a href="/">See Details</a>
                        </button>
                    </div>

                    <div className="flex flex-col w-64  my-1 shadow-lg rounded-lg">
                        {/* Project 2 */}
                    
                        <Image
                            src="/img/projects/proj1.png"
                            width={256}
                            height={100}
                            alt="Picture of the author"
                            className="order-first lg:order-none items-center rounded-lg"
                        />
                        
                        <h3 className="text-xl font-semibold text-center pt-1">Front-project</h3>

                        <p className="p-4 text-gray-500 font-mono text-start">
                            In this project was playing with background video, mix-blend, custom fonts.
                            Just frontend, pretty one. 
                        </p>

                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 mt-2 mx-16 py-1  px-4 rounded">
                                <a href="https://30-next-18.vercel.app/" target="_blank">See Details</a>
                        </button>
                    </div>
                
                
                    <div className="flex flex-col w-64  my-1 shadow-lg rounded-lg">
                        {/* Project 3 */}
                    
                        <Image
                            src="/img/projects/boat2.jpg"
                            width={256}
                            height={100}
                            alt="Picture of the author"
                            className="order-first lg:order-none items-center rounded-lg"
                        />
                        
                        <h3 className="text-xl font-semibold text-center pt-1">Sanity project</h3>

                        <p className="p-4 text-gray-500 font-mono text-start">
                            This is my library of projects with sort of readme. 
                            All info taken from CMS. Preparation for e-shop project.   
                        </p>

                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 mt-2 mx-16 py-1  px-4 rounded">
                                <a href="https://28-next016.vercel.app/" target="_blank">See Details</a>
                        </button>
                    </div>

                    <div className="flex flex-col w-64  my-1 shadow-lg rounded-lg">
                        {/* Project 4 */}
                    
                        <Image
                            src="/img/projects/proj2.png"
                            width={256}
                            height={100}
                            alt="Picture of the author"
                            className="order-first lg:order-none items-center rounded-lg"
                        />
                        
                        <h3 className="text-xl font-semibold text-center pt-1">Camp Website</h3>

                        <p className="p-4 text-gray-500 font-mono text-start">
                            Backend website! Reusable form-elements connetcted to real separate 
                            databases, mongoose, schemas. Also 404 page, router and etc.
                            NOT responsive one! Just backend.
                        </p>

                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 mt-2 mx-16 py-1  px-4 rounded">
                                <a href="https://27-next011.vercel.app/" target="_blank">See Details</a>
                        </button>
                    </div>

                    <div className="flex flex-col w-64   my-1 shadow-lg rounded-lg">
                        {/* Project 5 */}
                    
                        <Image
                            src="/img/projects/proj3.png"
                            width={256}
                            height={100}
                            alt="Picture of the author"
                            className="order-first lg:order-none items-center rounded-lg"
                        />
                        
                        <h3 className="text-xl font-semibold text-center pt-1">NextAuth</h3>

                        <p className="p-4 text-gray-500 font-mono text-start">
                            NextAuth project. Sign with credentials or git/google
                            and after you have access to pages. Data stored in db and hashed.  
                        </p>

                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 mt-2 mx-16 py-1  px-4 rounded">
                                <a href="https://29-next015.vercel.app/" target="_blank">See Details</a>
                        </button>
                    </div>


                    

                    <div className="flex flex-col w-64   my-1 shadow-lg rounded-lg">
                        {/* Project 6 */}
                    
                        <Image
                            src="/img/projects/boat2.jpg"
                            width={256}
                            height={100}
                            alt="Picture of the author"
                            className="order-first lg:order-none items-center rounded-lg"
                        />
                        
                        <h3 className="text-xl font-semibold text-center pt-1">In progress</h3>

                        <p className="p-4 text-gray-500 font-mono text-start">
                            Webshop with sanity. Working on it. 
                        </p>

                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 mt-2 mx-16 py-1  px-4 rounded">
                                <a>See Details</a>
                        </button>
                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default Projects