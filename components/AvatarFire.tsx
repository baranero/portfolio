import Image from "next/image";
import React from "react";

const AvatarFire = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/fire.png"
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default AvatarFire;
