import React from 'react';
import { HiArrowCircleDown } from "react-icons/hi";
import scrollToBottom from "./ScrollToBottom";

const ScrollButton = () => {
  return (
    <div>
      <HiArrowCircleDown  
        className="animate-bounce w-16 h-16 cursor-pointer" 
        style={{color: "white", textDecoration: "none"}}
         onClick={() => {
            scrollToBottom();
        }}
        />
    </div>
  );
};

export default ScrollButton;
