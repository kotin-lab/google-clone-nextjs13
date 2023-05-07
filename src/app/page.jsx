import React from 'react';
import Image from 'next/image';

// Components
import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image 
          src={'https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png'}
          width={300}
          height={100}
          alt='google'
        />
        <HomeSearch />
      </div>
    </>
  )
}
