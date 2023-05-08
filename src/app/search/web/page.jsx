import Link from 'next/link';
import React from 'react';

export default async function WebSearchPage({searchParams}) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const searchTerm = searchParams.searchTerm;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`);
  
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  const data = await await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found</h1>
        <p className='text-xl'>Try searching for something else or go back to the homepage</p>
        <Link href="/" className='text-blue-500'>
          Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {results && results.map(item => <h1 key={item.title}>{item.title}</h1>)}
    </>
  )
}
