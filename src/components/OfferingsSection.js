// import React from 'react';
// import { motion } from 'framer-motion';
// import auto from "../graphics/auto.png"
// import laptop from "../graphics/laptop.png"
// import charger from "../graphics/charger.png"
// import { GoArrowUpRight } from "react-icons/go";
// import useOnScreen from './useOnScreen';

// const OfferingsSection = () => {
//   const [ref, isIntersecting] = useOnScreen({ threshold: 0.1 });

//   // const [isVisible, setIsVisible] = useState(true)

//   return (
//     <section id="offerings" className="py-20 bg-white text-center">
//       {/* <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       > */}
//         <motion.div
//                 ref={ref}
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : -50 }}
//                 transition={{ duration: 1 }}
//                 className="z-10" // Ensure it has a higher z-index than the additional background image
//             >
//         <h2 className="text-4xl mb-8 text-green-500">Our Offerings</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

//           <div className="grid place-items-center animate-bottom-to-top delay-100" style={{ animationDelay: '0s' }}>
//             <div className="relative inline-block">
//               <img src={auto} className="block relative" />
//               <div className="absolute bottom-0 right-0 w-16 h-16 bg-customGray rounded-full justify-items-center  ">
//                 <div className="circle w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-green-400">
//                   <GoArrowUpRight className=" h-6 w-6" />
//                 </div>
//               </div>

//             </div>

//             <h2 className="text-xl font-semibold mb-2">Logistics</h2>
//             <div className=' w-2/3'>
//               <p className='text-lg text-neutral-400 justify-items-center leading-loose'>Contributing to cleaner air & reduced greenhouse gas emissions in urban areas.</p>
//             </div>
//           </div>
//           <div className="grid place-items-center animate-bottom-to-top delay-100 " style={{ animationDelay: '0.2s' }}>
//             <div className="relative inline-block">
//               <img src={laptop} alt="Your Image" className="block relative" />

//               <div className="absolute bottom-0 right-0 w-16 h-16 bg-customGray rounded-full justify-items-center  ">
//                 <div className="circle w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-green-400">
//                   <GoArrowUpRight className=" h-6 w-6" />
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-xl font-semibold mb-2">Infomatics</h2>
//             <div className=' w-2/3'>
//               <p className='text-lg text-neutral-400 justify-items-center leading-loose'>Data-driven dashboard optimizes end-to-end delivery & fleet management.</p>
//             </div>
//           </div>
//           <div className="grid place-items-center animate-bottom-to-top delay-100" style={{ animationDelay: '0.4s' }}>
//             <div className="relative inline-block">
//               <img src={charger} alt="Your Image" className="block relative" />

//               <div className="absolute bottom-0 right-0 w-16 h-16 bg-customGray rounded-full justify-items-center  ">
//                 <div className="circle w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-green-400">
//                   <GoArrowUpRight className=" h-6 w-6" />
//                 </div>
//               </div>
//             </div>

//             <h2 className="text-xl font-semibold mb-2 py-5">ChargeGrid</h2>
//             <div className='w-2/3'>
//               <p className='text-lg text-neutral-400 justify-items-center leading-loose'>Aligning with global push towards cleaner, greener & sustainable energy practices</p>
//             </div>
//           </div>

//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default OfferingsSection;
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import auto from "../graphics/auto.png";
import laptop from "../graphics/laptop.png";
import charger from "../graphics/charger.png";
import { GoArrowUpRight } from "react-icons/go";
import useOnScreen from './useOnScreen';

const OfferingsSection = () => {
  const [ref, isIntersecting] = useOnScreen({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isIntersecting) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isIntersecting, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="offerings" className="py-20 bg-white text-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="z-10"
      >
        <h2 className="text-4xl mb-8 text-green-500">Our Offerings</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="grid place-items-center" variants={itemVariants}>
            <div className="relative inline-block">
              <img src={auto} className="block relative" alt="Logistics" />
              <div className="flex justify-center items-center absolute bottom-0 right-0 ">
                <div className="outer-circle relative w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex justify-center items-center">
                  <GoArrowUpRight className="relative z-10 h-6 w-6" />
                  <div className="inner-circle absolute w-5 h-5 bg-green-400 rounded-full bottom-2 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              {/* <div className="absolute bottom-0 right-0 w-16 h-16 bg-customGray rounded-full justify-items-center">
                <div className="circle w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-green-400">
                  <GoArrowUpRight className="h-6 w-6" />
                </div>
              </div> */}
            </div>
            <h2 className="text-xl font-semibold mb-2">Logistics</h2>
            <div className='w-2/3'>
              <p className='text-lg text-neutral-400 justify-items-center leading-loose'>
                Contributing to cleaner air & reduced greenhouse gas emissions in urban areas.
              </p>
            </div>
          </motion.div>

          <motion.div className="grid place-items-center" variants={itemVariants}>
            <div className="relative inline-block">
              <img src={laptop} alt="Infomatics" className="block relative" />
              <div className="flex justify-center items-center absolute bottom-0 right-0 ">
                <div className="outer-circle relative w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex justify-center items-center">
                  <GoArrowUpRight className="relative z-10 h-6 w-6" />
                  <div className="inner-circle absolute w-5 h-5 bg-green-400 rounded-full bottom-2 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Infomatics</h2>
            <div className='w-2/3'>
              <p className='text-lg text-neutral-400 justify-items-center leading-loose'>
                Data-driven dashboard optimizes end-to-end delivery & fleet management.
              </p>
            </div>
          </motion.div>

          <motion.div className="grid place-items-center" variants={itemVariants}>
            <div className="relative inline-block">
              <img src={charger} alt="ChargeGrid" className="block relative" />
              <div className="flex justify-center items-center absolute bottom-0 right-0 ">
                <div className="outer-circle relative w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex justify-center items-center">
                  <GoArrowUpRight className="relative z-10 h-6 w-6" />
                  <div className="inner-circle absolute w-6 h-6  bg-green-400 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2 py-5">ChargeGrid</h2>
            <div className='w-2/3'>
              <p className='text-lg text-neutral-400 justify-items-center leading-loose'>
                Aligning with global push towards cleaner, greener & sustainable energy practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OfferingsSection;
