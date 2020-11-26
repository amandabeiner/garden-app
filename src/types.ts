export type City = {
  name: string;
  id: number;
  description: string;
  tos: string;
  gardens: Garden[];
};

export type Garden = {
  name: string;
};

export type User = {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string | null;
  zip: string;
  email: string;
  phone: string;
  placeOnList: number;
  listTotal: number;
};
