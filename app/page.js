"use client";
import { HiArrowCircleDown } from "react-icons/hi";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";



export default function Home() {
  return (
    <div>
      <section className="min-h-screen">
        <nav className="py-5 flex justify-between px-10">
          <h1 className="text-white hover:text-red-400 cursor-none" style={{fontFamily: "SingleDay"}}>little did u know</h1>
          <ul className="flex items-center">

            <li className="px-4">
              <IoMoonOutline 
                className=" hover:text-white cursor-pointer" 
                style={{color: "white"}}
              />
            </li>

            <li>
              <a
                className="text-white hover:text-gray-400"
                href="/Resume">Resume</a>
            </li>
          </ul>
        </nav>

        <div className=" flex col-span-1">
          {/* <h1 className="text-2xl text-white">Hello world</h1> */}
        </div>

        <div className="text-center flex col-span-1 justify-center py-44">
          <div>
            <div>
              <h1 className="text-white font-thin flex justify-center">Hello world! My name is</h1>
              <h1 className="text-8xl text-white mt-2 font-bold">Mohammed Shamil</h1>
              <h1 className="text-white hover:text-4xl transition-all duration-300 flex justify-center text-2xl mt-3">a passionate future software developer</h1>  
            </div>

            <div className="flex justify-center mt-12">
                <HiArrowCircleDown  
                  className="animate-bounce w-16 h-16 cursor-pointer" 
                  style={{color: "white"}}
                  onClick={() => {
                    console.log("I was clicked");
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
