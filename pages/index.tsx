import React from "react";

import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import AvatarGorilla from "../components/AvatarGorilla";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mt-10 z-10"
          >
            {t("home.welcomeFirst")} <br />
            {t("home.welcomeSecond")}{" "}
            <span className="text-accent">{t("home.welcomeThird")}</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm z-10 xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            {t("home.description")}
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:opacity-70 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0"></div>
        <ParticleContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[537px] bottom-0 absolute lg:right-[12%]"
        >
          <AvatarGorilla />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
};
