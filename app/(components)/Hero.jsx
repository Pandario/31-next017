'use client'
import Image from "next/image";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function Hero() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setEmail('');

  
        const dataPayOpt = {
  
          email: email,

        };
        const res = await fetch("/api/UserOpt",{
          method: "POST",
          body: JSON.stringify({ dataPayOpt }),
          "content-type" : "application/json"
        });
  
        if(!res.ok) {
  
          const response = await res.json();
          setErrorMessage(response.message);
        }else{
          router.refresh();
          router.push("/");
        }
        /*console.log(dataPayOpt)*/
      }

  return (
    <div className="bg-gray-100 pt-10 m-4">

        <div className="flex justify-center ">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 md:gap-8  mx-auto">

                <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">

                    <h1 className="text-3xl font-bold mb-4 text-center">I&apos;m Andrew {':)'}</h1>
                    <h3 className="text-xl mb-2">I make some websites, working as frontend and fulstack developer.</h3>
                    <h5 className="text-xl mb-2">So. What we have here? Quick-built projects to show technologies I&apos;m working with. Responsive nextjs website, tailwind, grid, nice navbar  
                    {' (especially in mobile version)'}, amazing return-up button and etc.</h5>
                    <h5 className="text-xl mb-2">Projects section - all real. 
                        You can find ReadMe in my github or! in &apos;Sanity project&apos;.</h5>
                        <h5 className="text-xl mb-4"> Btw! Both email forms are working.  </h5>
                    <form className="w-full flex flex-col sm:flex-row gap-4 items-center" onSubmit={handleSubmit} method='post'>

                        <input 
                            type="email"
                            name='email' 
                            placeholder="Enter your email" 
                            className="w-full sm:w-3/4 p-2 border border-gray-300 h-10 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />

                        <button type="submit" 
                            className="w-full sm:w-1/4 p-2 bg-blue-500 border border-blue-500 hover:bg-blue-700 text-white h-10 rounded-lg"
                        >
                            Send
                        </button>
                    </form>
                    <p className="text-red-500">{errorMessage}</p>
                </div>
                <div className="items-center order-first lg:order-none justify-center flex flex-col">
                <Image
                    src="/img/hero/Pilot.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-lg"
                    priority={true}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero