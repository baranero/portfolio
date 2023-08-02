import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { useTranslation } from "next-i18next";

const ServiceSlider = () => {
  const { t } = useTranslation();

  const serviceData = [
    {
      icon: <RxPencil2 />,
      title: t("servicesSlider.design"),
      description: t("servicesSlider.designDescription"),
    },
    {
      icon: <RxDesktop />,
      title: t("servicesSlider.development"),
      description: t("servicesSlider.developmentDescription"),
    },
    {
      icon: <RxReader />,
      title: t("servicesSlider.copywriting"),
      description: t("servicesSlider.copywritingDescription"),
    },
    {
      icon: <RxRocket />,
      title: t("servicesSlider.seo"),
      description: t("servicesSlider.seoDescription"),
    },
  ];

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] pb-10"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="msx-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div>
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 mb-20 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
