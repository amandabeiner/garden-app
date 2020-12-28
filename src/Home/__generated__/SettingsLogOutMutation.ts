/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SettingsLogOutMutation
// ====================================================

export interface SettingsLogOutMutation_currentSession_logOut_session_user {
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

export interface SettingsLogOutMutation_currentSession_logOut_session {
  __typename: "Session";
  user: SettingsLogOutMutation_currentSession_logOut_session_user | null;
}

export interface SettingsLogOutMutation_currentSession_logOut {
  __typename: "LogOutSessionResult";
  session: SettingsLogOutMutation_currentSession_logOut_session | null;
}

export interface SettingsLogOutMutation_currentSession {
  __typename: "CurrentSessionMutations";
  logOut: SettingsLogOutMutation_currentSession_logOut | null;
}

export interface SettingsLogOutMutation {
  currentSession: SettingsLogOutMutation_currentSession | null;
}
