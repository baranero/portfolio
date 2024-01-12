import React from "react";
import {
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
} from "react-icons/tb";
import { BiLogoPostgresql, BiLogoNodejs, BiLogoMongodb, BiLogoFirebase } from "react-icons/bi";
import { FaStripe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// Full data structure
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "FireApp",
          path: "/fireapp.png",
          url: "https://fd-app-eight.vercel.app/",
          github: "https://github.com/baranero/fd-app",
          stack: [
            { icon: <TbBrandNextjs />, name: "Next.js" },
            { icon: <TbBrandTypescript />, name: "Typescript" },
            { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
            { icon: <TbBrandPrisma />, name: "Prisma" },
            { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
          ],
        },
        {
          title: "Portfolio",
          path: "/portfolio.png",
          url: "https://jakubbaran.dev/",
          github: "https://github.com/baranero/portfolio",
          stack: [
            { icon: <TbBrandNextjs />, name: "Next.js" },
            { icon: <TbBrandTypescript />, name: "Typescript" },
            { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
          ],
        },
        {
          title: "Admin Dashboard E-commerce",
          path: "/e-com-admin.png",
          url: "https://fullstack-e-commerce-beta.vercel.app/",
          github: "https://github.com/baranero/admin-dashboard-e-commerce",
          stack: [
            { icon: <TbBrandNextjs />, name: "Next.js" },
            { icon: <TbBrandTypescript />, name: "Typescript" },
            { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
            { icon: <TbBrandPrisma />, name: "Prisma" },
            { icon: <TbBrandMysql />, name: "MySQL" },
            { icon: <FaStripe />, name: "Stripe" },
          ],
        },
        {
          title: "Frontend E-commerce",
          path: "/e-com-front.png",
          url: "https://frontend-e-commerce-sigma.vercel.app/",
          github: "https://github.com/baranero/frontend-e-commerce",
          stack: [
            { icon: <TbBrandNextjs />, name: "Next.js" },
            { icon: <TbBrandTypescript />, name: "Typescript" },
            { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
            { icon: <TbBrandPrisma />, name: "Prisma" },
            { icon: <TbBrandMysql />, name: "MySQL" },
            { icon: <FaStripe />, name: "Stripe" },
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Real Estate",
          path: "/real-estate.png",
          url: "https://estate-app-kghi.onrender.com/",
          github: "https://github.com/baranero/estate-app",
          stack: [
            { icon: <TbBrandReact />, name: "React" },
            { icon: <TbBrandTypescript />, name: "Typescript" },
            { icon: <TbBrandRedux />, name: "Redux" },
            { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
            { icon: <BiLogoNodejs />, name: "Node.js" },
            { icon: <BiLogoMongodb />, name: "MongoDB" },
            { icon: <BiLogoFirebase />, name: "Firebase" },
            { icon: <TbBrandVite />, name: "Vite" },
          ],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=""
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="h-full mb-10 grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center flex-col justify-center"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:sm:-translate-y-24 group-hover:-translate-y-10 transition-all duration-300">
                    <Link href={image.github}>
                      <span className="flex items-center gap-x-2 sm:text-[13px] text-xs tracking-[0.2em] cursor-pointer">
                        GITHUB REPO <BsArrowRight />
                      </span>
                    </Link>
                  </div>
                  <div className="absolute bottom-0 translate-y-full group-hover:sm:-translate-y-12 group-hover:-translate-y-4 transition-all duration-300">
                    <Link href={image.url}>
                      <span className="flex items-center gap-x-2 sm:text-[13px] text-xs tracking-[0.2em] cursor-pointer">
                        {t("worksSlider.live")} {t("worksSlider.project")} <BsArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="my-2">{t("worksSlider.stack")}</p>
                <div className="flex flex-wrap justify-center gap-x-3 text-white/60">
                  {image.stack.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center group gap-x-2">
                      <div className="absolute pr-14 hidden -translate-y-10 xl:group-hover:flex">
                        <div className="bg-white relative flex text-primary items-center p-[10px] rounded-[3px]">
                          <div className="text-[12px] leading-none font-semibold whitespace-nowrap">
                            {tech.name}
                          </div>
                          <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -bottom-2 rotate-90 "></div>
                        </div>
                      </div>
                      <div className="sm:text-2xl">{tech.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
