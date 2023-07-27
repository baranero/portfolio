import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials'
import TopLeftImg from './TopLeftImg';

const Header = () => {
  return <header className="backdrop-blur-md md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <TopLeftImg/>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 py-2'>
        <Link className='hover:cursor-pointer' href={'/'}>
          <Image src={'/download.svg'} width={220} height={48} alt='Logo' priority={true}/>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
