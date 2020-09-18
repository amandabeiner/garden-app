import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
} from 'react';
import { City } from './types';

type CityState = {
  city: City;
  updateCity: (city: City) => void;
};

export const CityContext = createContext(null);

export const CityProvider: FunctionComponent = (props) => {
  const [city, setCity] = useState(null);

  const updateCity = (newCity: City) => {
    setCity(newCity);
  };

  return <CityContext.Provider value={{ city, updateCity }} {...props} />;
};

export const useCity = (): CityState => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error('useCity must be within an CityProvider');
  }

  const { city, updateCity } = context;

  return { city, updateCity };
};
