"use client";
import { useRef } from "react";
import { HiArrowCircleDown } from "react-icons/hi";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import 'bootstrap/dist/css/bootstrap.css'
import Aboutme from '@/components/Aboutme.jsx'




export default function Home() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <section className="min-h-screen">
        <nav className="py-3 flex justify-between px-10">
          <h1 className="text-white hover:text-red-400 cursor-none text-xl" style={{fontFamily: "SingleDay"}}>little did u know</h1>
          <ul className="flex items-center">

            <li className="px-4">
              <IoMoonOutline 
                className=" hover:text-white cursor-pointer" 
                style={{color: "white"}}
              />
            </li>

            <li>
              <a
                className="text-black hover:text-gold p-2 px-3 text-xs rounded-xl bg-white"
                style={{ textDecoration: "none" }}
                href="/ResumeNew.pdf">Resume</a>
            </li>
          </ul>
        </nav>

        <div className=" flex col-span-1">
          {/* <h1 className="text-2xl text-white">Hello world</h1> */}
        </div>

        <div className="text-center flex col-span-1 justify-center py-36">
          <div>
            <div>
              <h1 className="text-white font-thin flex justify-center">Hello world! My name is</h1>
              <h1 className="text-8xl text-teal-200 mt-2 font-bold">Mohammed Shamil</h1>
              <h1 className="text-white hover:text-3xl transition-all duration-500 flex justify-center text-xl mt-3">a soon to be software developer</h1>  
            </div>

            <div>
              <div className="flex col-span-2 justify-center space-x-4 mt-6 ">
                  <a href="https://github.com/s7xdd">
                      <SlSocialGithub 
                        className="w-6 h-6 hover:size-7 transition-all duration-300" 
                        style={{color: "goldenrod"}}
                      />   
                  </a>

                  <a href="https://www.linkedin.com/in/kmshamil/">
                      <SlSocialLinkedin 
                        className="w-6 h-6 hover:size-7 transition-all duration-300"
                        style={{color: "goldenrod"}}
                      />   
                  </a>
                
              </div>
            </div>

            <div className="flex justify-center mt-12">
                <HiArrowCircleDown  
                  className="animate-bounce w-16 h-16 cursor-pointer" 
                  style={{color: "white", textDecoration: "none"}}
                  onClick={() => {
                    scrollToBottom();
                  }}
                  />
            </div>

          </div>
        </div>

        <div>
          <div className="mb-3 text-white flex justify-center">
            <h1>Class of 2024</h1>
          </div>

          <section>
            <div className="mt-5 mb-3">
              <h1 className="text-center text-white flex justify-center text-2xl ">I am currently a Computer Science student doing my final year</h1>
            </div>
          </section>
        </div>

        <div>
            <div className="flex justify-center mt-10">
              <Aboutme />
            </div>

            {/* <div className="mx-8 mt-16 bg-white rounded-3xl h-80 sm:mx-12">
                <div className="text-center">
                  <div>
                      <h1 className="font-bold p-8 text-teal-600">ABOUT ME</h1>
                      <p></p>
                  </div>
                </div>
            </div> */}

        </div>


        
        
        
        
        



        
        
        {/* <div className=" flex col-span-1 flex-shrink justify-center">
          <h1 className="text-8xl text-white pt-28">Shaaammeeee</h1>
        </div>

        <div className="flex justify-center">
          <p className="text-8xl py-9">&#x2764;</p>
        </div>

        <div className="flex justify-center">
          <p className="text-8xl text-white">Faaaafeee</p>
        </div> */}

      </section>
    </div>
  );
}
