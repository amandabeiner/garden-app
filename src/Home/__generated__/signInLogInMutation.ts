/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LogInViaEmailSessionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: signInLogInMutation
// ====================================================

export interface signInLogInMutation_currentSession_logInViaEmail_session {
  __typename: "Session";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
}

export interface signInLogInMutation_currentSession_logInViaEmail {
  __typename: "LogInViaEmailSessionResult";
  session: signInLogInMutation_currentSession_logInViaEmail_session | null;
  success: boolean;
}

export interface signInLogInMutation_currentSession {
  __typename: "CurrentSessionMutations";
  logInViaEmail: signInLogInMutation_currentSession_logInViaEmail | null;
}

export interface signInLogInMutation {
  currentSession: signInLogInMutation_currentSession | null;
}

export interface signInLogInMutationVariables {
  session: LogInViaEmailSessionInput;
}
