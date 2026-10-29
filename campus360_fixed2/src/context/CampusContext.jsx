import React, { createContext, useContext, useMemo, useState } from 'react';
import { building, floor, floorMap, viewpoints, rooms } from '../data/campus';

const CampusContext = createContext(null);

export function CampusProvider({ children }) {
  const [currentViewpoint, setCurrentViewpoint] = useState('P1');
  const [returnViewpoint, setReturnViewpoint] = useState('P4');

  const data = useMemo(() => ({ building, floor, floorMap, viewpoints, rooms }), []);

  const value = useMemo(() => ({
    data,
    currentViewpoint,
    setCurrentViewpoint,
    returnViewpoint,
    setReturnViewpoint
  }), [data, currentViewpoint, returnViewpoint]);

  return <CampusContext.Provider value={value}>{children}</CampusContext.Provider>;
}

export function useCampus() {
  const value = useContext(CampusContext);
  if (!value) throw new Error('useCampus must be used inside CampusProvider');
  return value;
}
