import React from 'react'
import Link from 'next/link';
import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-2xl'>
    <Link href={'https://github.com/baranero'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/jakub-baran-42a00522b/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine/>
    </Link>
  </div>;
};

export default Socials;
