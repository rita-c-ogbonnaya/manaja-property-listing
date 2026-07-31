'use client';

import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export function useLocationState() {
  return useContext(StateContext);
}

export function StateProvider({ children }) {
  const [selectedState, setSelectedState] = useState('all');

  return (
    <StateContext.Provider value={{ selectedState, setSelectedState }}>
      {children}
    </StateContext.Provider>
  );
}
