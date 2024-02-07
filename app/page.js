"use client";
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import AboutMe from '@/components/AboutMe.jsx'
import Main from '@/components/Main.jsx'
import Nav from '@/components/Nav.jsx'





export default function Home() {
  return (
    <div>
      <div className="h-100vh">
        <Nav />
        <Main />
      </div>
      <div>
        
        <AboutMe />
      </div>
    </div>  
  );
}
