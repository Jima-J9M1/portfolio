"use client"
import { motion } from 'framer-motion';
import {  useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const [mount, setMount] = useState(false)

//  if(!mount){
//     return null
//  }
//   useEffect(()=>{
//     setMount(true)
//   },[])

  return (
    <section className="relative  border border-t-r border-gray-600  dark:bg-[#34353A] min-h-screen">
      {/* <motion.div
        className="absolute inset-0  dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 3  }}
        transition={{ duration: 2 }}
      ></motion.div> */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <div className="text-white dark:text-white">
            <h1 className="text-4xl font-bold dark:text-white">I&apos;M <span className='text-6xl text-[#FFC86B]'>JIMA DUBE</span></h1>
            <p className="text-4xl font-bold">PYTHON EXPERT</p>
          </div>
          <div className="relative">
            <img src="/images/hero-image.svg" alt="Profile" className=" w-[800px]  h-[500px]  scale-150" />
            <div className="absolute bottom-[70px] right-[195px] flex flex-col space-y-2">
            <div className="ml-[7px]">
            <div className="w-[2px] h-24 bg-yellow-400"></div>
            </div>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300"><FaLinkedin /></a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;