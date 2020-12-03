/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateUserInput {
  email: string;
  firstName: string;
  lastName: string;
  street1: string;
  street2?: string | null;
  zip: string;
  phone: string;
  applications?: ManyApplicationRelationshipInput | null;
}

export interface LogInViaEmailSessionInput {
  email?: string | null;
  password?: string | null;
}

/**
 * Input object supporting setting or updating related Application records.
 */
export interface ManyApplicationRelationshipInput {
  link?: (any | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
