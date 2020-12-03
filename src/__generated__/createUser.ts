/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser_user {
  __typename: 'User';
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  street1: string | null;
  street2: string | null;
  zip: string | null;
  phone: string | null;
}

export interface createUser_createUser {
  __typename: 'CreateUserResult';
  user: createUser_createUser_user | null;
}

export interface createUser {
  createUser: createUser_createUser | null;
}

export interface createUserVariables {
  user?: CreateUserInput | null;
}
