'use client';

import React, { useEffect, useState } from 'react';
import Apiip from 'apiip.net';

const API_KEY = process.env.NEXT_PUBLIC_IP_API_KEY;
const apiip = Apiip(API_KEY);

export default function CountryLookUp() {
  const [country, setCountry] = useState('');
  
  // Effects
  useEffect(() => {
    apiip.getLocation()
      .then(data => setCountry(data.countryName))
      .catch(err => console.log(err));
  }, []);

  return country && <div>{country}</div>;
}
