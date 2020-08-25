import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
} from 'react';
import { City } from './types';

type CityState = [City, (city: City) => void];
export const CityContext = createContext(null);

export const CityProvider: FunctionComponent = (props) => {
  const [city, setCity] = useState(null);
  return <CityContext.Provider value={[city, setCity]} {...props} />;
};

export const useCity = (): CityState => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error('useCity must be within an CityProvider');
  }

  const [city, setCity] = context;

  return [city, setCity];
};
