import React from 'react'
import Spline from '@splinetool/react-spline';
import { Typewriter } from 'react-simple-typewriter';
import './header.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../AnimatedPage';


const Header = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return (
       
            <header >
                <span className='container lg:h-screen sm:h-100 flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
                    <div className='justify-center p-6 text-center rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left sm:max-w-2xl'>


                        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='relative text-5xl max-w-none font-medium leading-none sm:text-6xl'> Hi, I'm

                        </h1>
                        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='content text-4xl max-w-none font-bold leading-none sm:text-6xl'>
                            <span >
                                <Typewriter
                                    words={['Meriç', 'a Developer', 'a Designer']}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <motion.div
                            className='cursor'
                            variants={variants}
                            animate={cursorVariant}
                        />
                    </div>
                    <div className='spline flex items-center justify-end p-6 mt-8 lg:mt-0 h-72 sm:h-80 :h-9 lg:h-96 xl:h-112 2xl:h-128'><Spline scene="https://prod.spline.design/pV9PdePPiTDdG3E8/scene.splinecode" /></div>
                </span>

            </header>
       
    )
}
export default Header