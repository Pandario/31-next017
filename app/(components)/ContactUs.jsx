'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';


function ContactUs() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("")
    setName('');
    setEmail('');
    setText('');
      const dataPay = {

            email: email,
            name: name,
            text: text,
    

      };
      const res = await fetch("/api/Users",{
        method: "POST",
        body: JSON.stringify({ dataPay }),
        "content-type" : "application/json"
      });

      if(!res.ok) {

        const response = await res.json();
        setErrorMessage(response.message);
      }else{
        router.refresh();
        router.push("/");
      }
      
  }
  return (
    <div id='contactus' className="bg-gray-100 pt-10 m-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 md:gap-8 mx-auto">
          
          {/* Contact Information Section */}
          <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">
            <h1 className="text-3xl text-center font-bold mb-8">Contact Information</h1>
            
            <p className="mb-4 text-2xl">You can visit my Github:</p>
            <div className="flex items-center space-x-3 mb-6">
            <a href="https://github.com/Pandario">
                    <FaGithub className=" hover:text-indigo-700 text-xl" />
                  </a>
                  <Link href="https://github.com/Pandario" target="_blank" className=" hover:text-indigo-700 text-xl">Pandario</Link>
            </div>
            <p className="mb-4 text-2xl">You can visit my LinkedIn:</p>
            <div className="flex items-center space-x-3 mb-6">
            <a href="https://www.linkedin.com/in/andrey-chernov-549700242/">
                    <FaLinkedin className=" hover:text-indigo-700 text-xl" />
                  </a>
                  <Link href="https://www.linkedin.com/in/andrey-chernov-549700242/" target="_blank" className=" hover:text-indigo-700 text-xl">Andrey Chernov</Link>
            </div>
            
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col items-center p-4 my-1 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl mb-4">{'(Form is working)'} </p>
            
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit} method='post'>
              <input type="text" placeholder="Your Name" name='name' value={name} onChange={(e) => setName(e.target.value)}
                  className="p-2 border border-gray-300 h-10 rounded-lg" 
              />
           
              <input type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border border-gray-300 h-10 rounded-lg" 
              />
              <textarea placeholder="Your Message" name='message' value={text} onChange={(e) => setText(e.target.value)}
                  className="p-2 border border-gray-300 h-32 rounded-lg resize-none" 
              ></textarea>
              <button type="submit" 
                  className="p-2 bg-blue-500 border border-blue-500 hover:bg-blue-700 text-white h-10 rounded-lg"
              >
                  Send Message
              </button>
            </form>
            <p className="text-red-500">{errorMessage}</p>
          </div>

        </div>
      </div>
      <div className="text-center text-gray-600 mt-2">
        © Pandario 2024
      </div>
    </div>
  )
}

export default ContactUs