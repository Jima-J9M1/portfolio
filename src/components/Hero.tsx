"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
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
        <div className="flex items-center justify-between flex-col sm:flex-row">
          <div className="text-white dark:text-white">
            <h1 className="lg:text-4xl md:text-2xl text-4xl  font-bold dark:text-white text-black">I&apos;M <span className='lg:text-6xl text-4xl text-[#FFC86B]'>JIMA DUBE</span></h1>
            <p className="lg:text-4xl font-bold text-black dark:text-white">PYTHON EXPERT</p>
          </div>
          <div className="relative">
            <Image 
            src="/images/hero-image.svg" 
            alt="Profile" 
            className=" w-[800px]  h-[500px]"
            width={500}
            height={500}
            />
            <div className="absolute sm:bottom-[70px] bottom-[130px] sm:right-[25px]  md:right-[70px] max-sm:right-[40px] max-sm:bottom-[150px] flex flex-col space-y-2">
            <div className="ml-[7px]">
            <div className="w-[2px] h-24 bg-yellow-400"></div>
            </div>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300 dark:text-black"><FaInstagram className='text-yellow-500 dark:text-white' /></a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300 dark:text-black"><FaTwitter className='text-yellow-500 dark:text-white' /></a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300 dark:text-black"><FaLinkedin className='text-yellow-500 dark:text-white' /></a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300 dark:text-black"><FaGithub className='text-yellow-500 dark:text-white' /></a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;