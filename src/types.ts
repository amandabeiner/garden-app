export interface City {
  name: string;
  id: number;
  description: string;
  tos: string;
  gardens: Garden[];
}

export interface Garden {
  name: string;
}
