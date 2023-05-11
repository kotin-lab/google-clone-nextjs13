'use client';

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const [randomSearchloading, setRandomSearchloading] = useState(false);

  // Handlers
  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomSearchloading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then(res => res.json())
      .then(data => data[0])
      .catch(err => setRandomSearchloading(false));

    if (!response) return;

    setRandomSearchloading(false);
    router.push(`/search/web?searchTerm=${response}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input 
          type="text" 
          className='flex-grow outline-none focus:outline-none' 
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <BsFillMicFill className='text-lg' />
      </form>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-8">
        <button onClick={handleSubmit} className='btn'>
          Google Search
        </button>
        <button 
          onClick={randomSearch} 
          disabled={randomSearchloading}
          className='btn flex justify-center items-center disabled:opacity-80'
        >
          {randomSearchloading
            ? <Image src='/spinner.svg' alt='loading...' width={24} height={24} style={{height: 'auto'}} />
            : "I am Feeling Lucky"
          }
        </button>
      </div>
    </>
  )
}
