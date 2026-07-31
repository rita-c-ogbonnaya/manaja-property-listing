'use client';

import { useState } from 'react';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const [selectedState, setSelectedState] = useState('all');

  return (
    <Navbar 
      onStateChange={setSelectedState} 
      selectedState={selectedState}
    />
  );
}
