import { IoMoonOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import React from 'react';

const Nav = () => {
  return (
    <div>
        <nav className="flex justify-between px-10">
                <h1 className="text-white hover:text-red-400 cursor-none text-xl" 
                style={{fontFamily: "SingleDay", textDecoration: "none"}}
                >little did u know</h1>

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
    </div>
  );
};

export default Nav;
