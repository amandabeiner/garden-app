/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LogInViaEmailSessionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: logInUserMutation
// ====================================================

export interface logInUserMutation_currentSession_logInViaEmail_session {
  __typename: "Session";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
}

export interface logInUserMutation_currentSession_logInViaEmail {
  __typename: "LogInViaEmailSessionResult";
  session: logInUserMutation_currentSession_logInViaEmail_session | null;
  success: boolean;
}

export interface logInUserMutation_currentSession {
  __typename: "CurrentSessionMutations";
  logInViaEmail: logInUserMutation_currentSession_logInViaEmail | null;
}

export interface logInUserMutation {
  currentSession: logInUserMutation_currentSession | null;
}

export interface logInUserMutationVariables {
  session: LogInViaEmailSessionInput;
}
