import React from "react";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-24 lg:flex xl:flex lg:items-center xl:items-center overflow-y-scroll md:overflow-hidden lg:overflow-hidden xl:overflow-hidden">
      <div className="hidden lg:flex xl:flex">
        <Circles />
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
            className="h2 xl:mt-8">
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden' className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              I offer a range of web development solutions tailored to your needs, including responsive website design, user-friendly interfaces, SEO optimization, persuasive copywriting, and distinctive branding. Together, we can bring your ideas to life, engage your target audience, and boost your online presence for long-term success.
            </motion.p>
          </div>

          <motion.div variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden' className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
