import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import profile from "../assets/profile.png"

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center px-6 lg:px-8 pt-24   ">

            <div className="max-w-7xl mx-auto w-full">

                <div className="grid md:grid-cols-2 gap-10 items-center"> 

                    {/* left */}
                    <div>
                        <p className="font-semibold text-blue-500">
                            Hello, I'm
                        </p>            
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
                            Arpit Gupta
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-gray-400 mt-4">
                            Full Stack MERN Developer
                        </p>

                        <p className="mt-5 text-gray-400 max-w-xl leading-8 text-lg">
                            Passionate MERN Stack Developer focused on building
                            fast, responsive and scalable web applications.
                        </p>

                        <div className="flex gap-4 mt-8">
                            <button 
                                className="bg-blue-600 
                                hover:bg-blue-700 
                                text-white 
                                px-6 
                                py-3 
                                rounded-lg 
                                transition-all
                                duration-300
                                hover:scale-105"
                            >Download Resume
                            </button>

                            <button className="
                                border 
                                border-gray-400 
                                px-6 
                                py-3 
                                rounded-lg 
                                hover:bg-gray-100 
                                dark:hover:bg-gray-400
                                transition-all
                                duration-300
                                hover:scale-105"
                            >Contact Me
                            </button>
                        </div>

                        <div className="flex gap-5 mt-8 text-2xl">
                            <a href="https://github.com/imaxprit">
                                <FaGithub />
                            </a>

                            <a href="https://www.linkedin.com/in/arpitgupta71/">
                                <FaLinkedin />
                            </a>

                            <a href="mailto:arpitgupta4562@gmail.com"
                                className="hover:text-blue-500 transition">
                                <MdEmail />
                            </a>
                        </div>

                    </div>

                    {/* right */}
                    <div className="flex justify-center">

                        {/* <div className="
                            w-80 
                            h-80 
                            rounded-full 
                            bg-slate-800 
                            shadow-2xl 
                            border 
                            border-blue-500/20">    
                        </div> */}

                        <img 
                            src={profile}
                            alt="Arpit Gupta"
                            className="w-80 h-80 rounded-full object-cover"
                        />

                    </div>

                </div>

            </div>
            
        </section>
    );
};

export default Hero;