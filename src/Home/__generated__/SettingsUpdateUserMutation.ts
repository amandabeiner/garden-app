/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SettingsUpdateUserMutation
// ====================================================

export interface SettingsUpdateUserMutation_updateUser_user {
  __typename: "User";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
  firstName: string | null;
  lastName: string | null;
  street1: string | null;
  street2: string | null;
  zip: string | null;
  email: string | null;
  phone: string | null;
}

export interface SettingsUpdateUserMutation_updateUser {
  __typename: "UpdateUserResult";
  user: SettingsUpdateUserMutation_updateUser_user | null;
}

export interface SettingsUpdateUserMutation {
  updateUser: SettingsUpdateUserMutation_updateUser | null;
}

export interface SettingsUpdateUserMutationVariables {
  id: any;
  user?: UpdateUserInput | null;
}
