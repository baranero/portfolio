import Image from "next/image";
import React from "react";

const AvatarGorilla = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/gorilla.png"
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default AvatarGorilla;
