import { HiArrowCircleDown } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import scrollToBottom from "./ScrollToBottom";

export default function Main(){
    return(
        <div>
            <section className="min-h-screen">
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

                <div className="text-white text-center mt-36">
                    <h5>Class of 2024</h5>
                </div>

                <div>

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
    )
}