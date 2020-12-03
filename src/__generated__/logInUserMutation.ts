/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LogInViaEmailSessionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: logInUserMutation
// ====================================================

export interface logInUserMutation_logInViaEmailSession_session_user {
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

export interface logInUserMutation_logInViaEmailSession_session {
  __typename: "Session";
  user: logInUserMutation_logInViaEmailSession_session_user | null;
}

export interface logInUserMutation_logInViaEmailSession {
  __typename: "LogInViaEmailSessionResult";
  session: logInUserMutation_logInViaEmailSession_session | null;
}

export interface logInUserMutation {
  logInViaEmailSession: logInUserMutation_logInViaEmailSession | null;
}

export interface logInUserMutationVariables {
  id: any;
  session: LogInViaEmailSessionInput;
}
