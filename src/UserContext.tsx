import React, {
  FunctionComponent,
  createContext,
  useState,
  useContext,
} from 'react';
import { User } from './types';
import user from './user.json';

type UserState = {
  currentUser: User;
  updateCurrentUser: (user: Partial<User>) => void;
};

export const UserContext = createContext(null);

export const UserProvider: FunctionComponent = (props) => {
  const [currentUser, setCurrentUser] = useState(user);

  const updateCurrentUser = (newUser: Partial<User>) => {
    setCurrentUser({ ...currentUser, ...newUser });
  };

  return (
    <UserContext.Provider
      value={{ currentUser, updateCurrentUser }}
      {...props}
    />
  );
};

export const useUser = (): UserState => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useCity must be within an CityProvider');
  }

  const { currentUser, updateCurrentUser } = context;

  return { currentUser, updateCurrentUser };
};
