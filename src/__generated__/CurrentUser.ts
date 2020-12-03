/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CurrentUser
// ====================================================

export interface CurrentUser {
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
