'use client';

import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');
  const router = useRouter();

  // Handlers
  function handleSubmit(e) {
    e.preventDefault();

    if (!term.trim()) return;

    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-5 sm:ml-10 mr-5 max-w-3xl'>
      <input 
        type="text" 
        value={term}
        onChange={e => setTerm(e.target.value)}
        className='w-full focus:outline-none' 
      />
      <RxCross2 onClick={() => setTerm('')} className='text-2xl text-gray-500 cursor-pointer sm:mr-2' />
      <BsFillMicFill  className='hidden sm:inline-block text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 cursor-pointer mr-3' />
      <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline-block text-blue-500 cursor-pointer' />
    </form>
  )
}
