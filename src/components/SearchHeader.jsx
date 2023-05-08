import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';

// Components
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className="flex items-center w-full p-6 justify-between">
        <Link href={'/'}>
          <Image 
            src={'https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png'}
            width={120}
            height={40}
            alt='google'
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex md:items-center space-x-2">
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
