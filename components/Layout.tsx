import React, { ReactNode } from "react";
import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repea ${sora.variable} font-sora relative`}
    >

      <Nav />
      <Header />
      <div className="hidden md:block lg:block xl:block">
        <TopLeftImg />
      </div>
      {children}
    </div>
  );
};

export default Layout;
