import React from "react";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "FireApp",
          path: "/fireapp.png",
          url: "https://fd-app-eight.vercel.app/",
          github: "https://github.com/baranero/fd-app",
        },
        {
          title: "Portfolio",
          path: "/portfolio.png",
          url: "https://jakubbaran.dev/",
          github: "https://github.com/baranero/portfolio",
        },
        {
          title: "Beauty Salon",
          path: "/beauty-salon.png",
          url: "http://wrobelagnieszka.pl/",
          github: "https://github.com/baranero/beauty-website",
        },
        {
          title: "Colors Filter",
          path: "/colors.png",
          url: "https://baranero.github.io/colors-filter/",
          github: "https://github.com/baranero/colors-filter",
        },

      ],
    },
    {
      images: [
        {
          title: "Space",
          path: "/space-web.png",
          url: "https://baranero.github.io/space-web-react-scss/",
          github: "https://github.com/baranero/space-web-react-scss",
        },
        {
          title: "Netflix Clone",
          path: "/netflix.png",
          url: "https://netflix-clone-baranero.vercel.app/",
          github: "https://github.com/baranero/netflix-clone",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const WorkSlider = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute hover:text-[#b6b6b6] bottom-0 translate-y-full group-hover:-translate-y-16 group-hover:xl:-translate-y-28 group-hover:md:-translate-y-28 group-hover:lg:-translate-y-32  transition-all duration-300">
                        <Link className="" href={image.github}>
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">GITHUB</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              REPO
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="absolute hover:text-[#b6b6b6]  bottom-0 translate-y-full group-hover:-translate-y-4 group-hover:lg:-translate-y-12  group-hover:xl:-translate-y-12 group-hover:md:-translate-y-12 transition-all duration-300">
                        <Link href={image.url}>
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">
                              {t("worksSlider.live")}
                            </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {t("worksSlider.project")}
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
