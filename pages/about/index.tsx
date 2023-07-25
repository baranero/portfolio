import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { Icon: FaHtml5, key: "html" },
          { Icon: FaCss3, key: "css" },
          { Icon: FaJs, key: "js" },
          { Icon: FaReact, key: "react" },
          { Icon: SiNextdotjs, key: "next" },
          { Icon: SiFramer, key: "framer" },
          { Icon: FaWordpress, key: "wordpress" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { Icon: FaFigma, key: "figma" },
          { Icon: SiAdobexd, key: "adobexd" },
          { Icon: SiAdobephotoshop, key: "photoshop" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Fire Safety Systems Designer",
        stage: "2019 - present",
      },
      {
        title: "My own GitHub",
        stage: "2022 - present"
      }
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row mt-10 gap-x-6">
        <div>text</div>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
