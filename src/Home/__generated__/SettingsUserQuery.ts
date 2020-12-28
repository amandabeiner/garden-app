/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SettingsUserQuery
// ====================================================

export interface SettingsUserQuery_currentSession_user {
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

export interface SettingsUserQuery_currentSession {
  __typename: "Session";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
  user: SettingsUserQuery_currentSession_user | null;
}

export interface SettingsUserQuery {
  currentSession: SettingsUserQuery_currentSession | null;
}
