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
  id: string;
  firstName: string;
  lastName: string;
};
