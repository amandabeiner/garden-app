/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateApplicationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createApplication
// ====================================================

export interface createApplication_createApplication_application {
  __typename: "Application";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
}

export interface createApplication_createApplication {
  __typename: "CreateApplicationResult";
  application: createApplication_createApplication_application | null;
}

export interface createApplication {
  createApplication: createApplication_createApplication | null;
}

export interface createApplicationVariables {
  application?: CreateApplicationInput | null;
}
