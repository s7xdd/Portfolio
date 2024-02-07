import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import ScrollButton from "./ScrollButton";

export default function Main(){
    return(
        <div>
            <section className="min-h-screen">
                <div className="text-center flex col-span-1 justify-center py-36">
                    <div>
                        <div>
                        <h1 className="text-white font-thin flex justify-center">Hello world! My name is</h1>
                        <h1 className="text-8xl text-teal-200 mt-2 font-bold">Mohammed Shamil</h1>
                        <h1 
                           className="text-white text-xl hover:text-3xl transition-all duration-500 flex justify-center mt-3"
                           style={{textDecoration: "none"}}
                           >a soon to be software developer
                        </h1>  
                        
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

                        <div>
                            
                        </div>

                        <div className="flex justify-center mt-12">
                            <ScrollButton />
                        </div>

                    </div>
                </div>

                <div className="text-white text-center mt-14">
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