export interface City {
  name: string;
  id: number;
  description: string;
  gardens: Garden[];
}

export interface Garden {
  name: string;
}

export type StackParamList = {
  Welcome: undefined;
  CityDetails: { city: string } | undefined;
  Application: undefined;
};
