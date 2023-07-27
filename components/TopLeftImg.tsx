import React from 'react'
import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 mix-blend-color-dodge z-40 w-[200px] xl:w-[200px] opacity-50">
    <Image src='/top-left-img.png' width={200} height={200} alt="Top left"/>
  </div>;
};

export default TopLeftImg;
