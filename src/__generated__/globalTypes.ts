/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateApplicationInput {
  lacksGardenSpace?: boolean | null;
  hadNonCambridgePlot?: boolean | null;
  nonCambridgePlotYear?: string | null;
  requiresAccessiblePlot?: boolean | null;
  user?: OneUserRelationshipInput | null;
  nonCambridgePlotLocation?: string | null;
  hadPlotInCambridge?: boolean | null;
  cambridgePlotLocation?: string | null;
  cambridgePlotYear?: string | null;
  volunteersToCoordinate?: boolean | null;
}

export interface CreateUserInput {
  lastName?: string | null;
  street2?: string | null;
  phone?: string | null;
  plot?: OnePlotRelationshipInput | null;
  applications?: ManyApplicationRelationshipInput | null;
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  street1?: string | null;
  zip?: string | null;
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

/**
 * Input object supporting setting or updating related Plot record.
 */
export interface OnePlotRelationshipInput {
  link?: any | null;
}

/**
 * Input object supporting setting or updating related User record.
 */
export interface OneUserRelationshipInput {
  link?: any | null;
}

export interface UpdateUserInput {
  lastName?: string | null;
  street2?: string | null;
  phone?: string | null;
  plot?: OnePlotRelationshipInput | null;
  applications?: ManyApplicationRelationshipInput | null;
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  street1?: string | null;
  zip?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
