import React from "react";
import Image from "next/image";

const Bulb = () => {
  return <div className="absolute hidden xl:block -left-32 -bottom-8 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[300px] xl:w-[460px]">
    <Image src={'/flame.png'} width={460} height={300} alt="Bulb" className="w-full h-full" />
  </div>;
};

export default Bulb;
