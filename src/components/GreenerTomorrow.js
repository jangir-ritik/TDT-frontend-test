import React, { useState, useEffect } from 'react';
import carbackground from '../graphics/hundaiCar.png';
import roof from "../graphics/roofSVG.svg";
import useOnScreen from './useOnScreen';
import { motion } from 'framer-motion';
function GreenerTomorrow() {
    const [isVisible, setIsVisible] = useState(true)

    const [ref, isIntersecting] = useOnScreen({ threshold: 0.1 });
    useEffect(() => {
        if (window.innerWidth < window.innerHeight) {
            setIsVisible(false)
        }
        else {
            setIsVisible(true)

        }
    }, [])
    return (
        <section
            id="hero"
            style={{
                backgroundImage: `url('${carbackground}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh",
                width: "100vw",
                position: "relative", // Ensure the section is positioned relatively
                overflow: "hidden", // To prevent overflow issues from the wider roof image
            }}
            className="flex justify-center align-middle"
        >
            {isVisible === false ? <></> :
                <img
                    src={roof}
                    alt="Roof"
                    style={{
                        position: "absolute",
                        top: 40,
                        left: "49%",
                        transform: "translateX(-50%)",
                        height: "80%",
                        width: "36.1%",
                        zIndex: 100,
                    }}
                />
            }


            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : -50 }}
                transition={{ duration: 1 }}
                className="z-10" // Ensure it has a higher z-index than the additional background image
            >
                <h1 className="flex text-6xl text-white leading-relaxed pt-64 mt-4 justify-center">
                    Intelligent Logistics for a Greener Tomorrow
                </h1>
                {/* <img src={roof} className="flex relative -top-14 left-60 w-7/12" /> */}
            </motion.div>
        </section>


    )
}

export default GreenerTomorrow