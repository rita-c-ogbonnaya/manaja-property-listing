'use client';

import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export function useLocationState() {
  return useContext(StateContext);
}

export function StateProvider({ children }) {
  const [selectedState, setSelectedState] = useState('all');
  const [listingType, setListingType] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [locationStateId, setLocationStateId] = useState('all');

  return (
    <StateContext.Provider value={{ 
      selectedState, 
      setSelectedState, 
      listingType, 
      setListingType,
      propertyType,
      setPropertyType,
      locationFilter,
      setLocationFilter,
      locationStateId,
      setLocationStateId
    }}>
      {children}
    </StateContext.Provider>
  );
}
