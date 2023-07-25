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
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiAmazonaws,
  SiPrisma
} from "react-icons/si";

type SkillSection = {
  title: string;
  info: {
    title: string;
    icons: { icon: IconType; key: string }[];
  }[];
};

type ExperienceSection = {
  title: string;
  info: {
    title: string;
    stage: string;
  }[]
};

type AboutDataItem = SkillSection | ExperienceSection;

const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [
          { icon: FaHtml5, key: "html" },
          { icon: FaCss3, key: "css" },
          { icon: SiTypescript, key: "ts" },
          { icon: FaReact, key: "react" },
          { icon: SiRedux, key: "redux" },
          { icon: SiNextdotjs, key: "next" },

        ],
      },
      {
        title: "Backend",
        icons: [
          { icon: SiNodedotjs, key: "node" },
          { icon: SiAmazonaws, key: "aws" },
          { icon: SiPostgresql, key: "postgre" },
          { icon: SiMongodb, key: "mongo" },
          { icon: SiPrisma, key: "prisma" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: FaFigma, key: "figma" },
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
import { IconType } from "react-icons/lib";

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
        <div className="flex-1 flex flex-col justify-center">text</div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              if ('stage' in item) {
                return (
                  <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" key={itemIndex}>
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div className="">{item.stage}</div>
                  </div>
                )
              }
              
              return (
                <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" key={itemIndex}>
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="flex gap-x-4">
                    {item.icons.map((iconData, iconIndex) => {
                      const Icon = iconData.icon;
                      return (
                        <div className="text-2xl text-white" key={iconData.key}>
                          {<Icon />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
