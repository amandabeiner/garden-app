import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';
import { gql, useQuery } from '@apollo/client';
import { CurrentUser } from './__generated__/CurrentUser';
import {
  userQuery as UserQueryData,
  userQueryVariables as UserQueryVariables,
} from './__generated__/userQuery';
import { useIdToken } from './auth/useIdToken';

type UserState = {
  currentUser: CurrentUser;
  setCurrentUser: (user: CurrentUser) => void;
};

export const UserContext = createContext(null);

export const UserProvider: FunctionComponent = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const userIdToken = useIdToken();

  useQuery<UserQueryData, UserQueryVariables>(userQuery, {
    skip: !userIdToken,
    variables: { id: userIdToken },
    onCompleted: (data) => {
      setCurrentUser(data.user);
    },
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }} {...props} />
  );
};

export const useUser = (): UserState => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useCity must be within an CityProvider');
  }

  const { currentUser, setCurrentUser } = context;

  return { currentUser, setCurrentUser };
};

const currentUserFragment = gql`
  fragment CurrentUser on User {
    id
    firstName
    lastName
    street1
    street2
    zip
    email
    phone
  }
`;

const userQuery = gql`
  query userQuery($id: GadgetID!) {
    user(id: $id) {
      id
      ...CurrentUser
      firstName
      lastName
    }
  }
  ${currentUserFragment}
`;
