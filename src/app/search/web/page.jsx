import React from 'react';

export default async function WebSearchPage({searchParams}) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const searchTerm = searchParams.searchTerm;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`);
  const data = await await response.json();
  const results = data.items;
  
  return (
    <>
      {results && results.map(item => <h1 key={item.title}>{item.title}</h1>)}
    </>
  )
}
