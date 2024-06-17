import React from 'react';
import { motion } from 'framer-motion';
import bg from "../bgTruck.gif"
const HeroSection = () => {
  return (
    <div >

      <section id="hero" style={{ backgroundImage: `url('${bg}')`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height:"100vh",
       width:"100vw"}}  className="flex items-center justify-start p-10 h-screen">
      <div className="w-1/4 ">

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-4xl font mb-4 leading-relaxed">Empowering Sustainable Transportation</h1>
        <button className="px-6 py-2 bg-transparent border border-green-600 text-black rounded-full">Enquire Now</button>
      </motion.div>
      </div>

    </section>
    </div>
    
  );
};

export default HeroSection;
