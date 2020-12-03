import React, { FunctionComponent, createContext, useContext } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { CurrentUser } from './__generated__/CurrentUser';
import {
  userQuery as UserQueryData,
  userQueryVariables as UserQueryVariables,
} from './__generated__/userQuery';
import { sessionsQuery_sessions_edges as SessionEdge } from './__generated__/sessionsQuery';
import { createUserVariables as CreateUserVariables } from './__generated__/createUser';
import { useIdToken } from './auth/useIdToken';
// import currentUser from './user.json';

type UserState = {
  currentUser: CurrentUser;
  logInUser: () => Promise<CurrentUser>;
  createUser: ({ variables: CreateUserVariables }) => Promise<CurrentUser>;
};

export const UserContext = createContext(null);

export const UserProvider: FunctionComponent = (props) => {
  const userIdToken = useIdToken();

  const { data: userData } = useQuery<UserQueryData, UserQueryVariables>(
    userQuery,
    {
      skip: !userIdToken,
      variables: { id: userIdToken },
    },
  );

  const { data: sessionsData } = useQuery(sessionsQuery);
  const session = sessionsData?.sessions.edges.find((s: SessionEdge) => {
    return s.node.user === null;
  });

  const [logInUser] = useMutation(logInUserMutation, {
    onCompleted: (d) => {
      console.log(d);
    },
  });

  const [createUser] = useMutation<{ variables: CreateUserVariables }>(
    createUserMutation,
    {
      onCompleted: (d) => {
        console.log(d);
      },
    },
  );

  return (
    <UserContext.Provider
      value={{ currentUser: userData?.user, logInUser, createUser }}
      {...props}
    />
  );
};

export const useUser = (): UserState => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useCity must be within an CityProvider');
  }

  const { currentUser, logInUser, createUser } = context;

  return { currentUser, logInUser, createUser };
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

const sessionsQuery = gql`
  query sessionsQuery {
    sessions {
      edges {
        node {
          id
          user {
            id
          }
        }
      }
    }
  }

  ${currentUserFragment}
`;

const logInUserMutation = gql`
  mutation logInUserMutation(
    $id: GadgetID!
    $session: LogInViaEmailSessionInput!
  ) {
    logInViaEmailSession(id: $id, session: $session) {
      session {
        user {
          id
          ...CurrentUser
        }
      }
    }
  }
  ${currentUserFragment}
`;

const createUserMutation = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      user {
        id
        firstName
        lastName
        email
        street1
        street2
        zip
        phone
      }
    }
  }
`;
