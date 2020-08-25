export const updateName = (payload: string): ApplicationAction => {
  return { type: ActionType.NAME_UPDATE, payload };
};

export const updateAddress1 = (payload: string): ApplicationAction => {
  return { type: ActionType.ADDRESS_1_UPDATE, payload };
};

export const updateAddress2 = (payload: string): ApplicationAction => {
  return { type: ActionType.ADDRESS_2_UPDATE, payload };
};

export const updateZip = (payload: string): ApplicationAction => {
  return { type: ActionType.ZIP_UPDATE, payload };
};

export const updateEmail = (payload: string): ApplicationAction => {
  return { type: ActionType.EMAIL_UPDATE, payload };
};

export const updatePhone = (payload: string): ApplicationAction => {
  return { type: ActionType.PHONE_UPDATE, payload };
};

export const toggleLacksGardenSpace = (): ApplicationAction => {
  return { type: ActionType.LACKS_GARDEN_SPACE_TOGGLE };
};

export const toggleHadCambridgePlot = (): ApplicationAction => {
  return { type: ActionType.HAD_CAMBRIDGE_PLOT_TOGGLE };
};
export const updateCambridgePlotLocation = (
  payload: string,
): ApplicationAction => {
  return { type: ActionType.CAMBRIDGE_PLOT_LOCATION_UPDATE, payload };
};

export const updateCambridgePlotYear = (payload: string): ApplicationAction => {
  return { type: ActionType.CAMBRIDGE_PLOT_YEAR_UPDATE, payload };
};

export const toggleHadNonCambridgePlot = (): ApplicationAction => {
  return { type: ActionType.HAD_NON_CAMBRIDGE_PLOT_TOGGLE };
};

export const updateNonCambridgePlotYear = (
  payload: string,
): ApplicationAction => {
  return { type: ActionType.NON_CAMBRIDGE_PLOT_YEAR_UPDATE, payload };
};

export const updateNonCambridgePlotLocation = (
  payload: string,
): ApplicationAction => {
  return { type: ActionType.NON_CAMBRIDGE_PLOT_LOCATION_UPDATE, payload };
};

export const toggleRequiresAccessiblePlot = (): ApplicationAction => {
  return { type: ActionType.REQUIRES_ACCESSIBLE_PLOT_TOGGLE };
};

export const toggleVolunteersToCoordinate = (): ApplicationAction => {
  return { type: ActionType.VOLUNTEERS_TO_COORDINATE_TOGGLE };
};

export const agreedToTOS = (payload: boolean): ApplicationAction => {
  return { type: ActionType.AGREE_TO_TOS, payload };
};

export const signedAgreement = (payload: boolean): ApplicationAction => {
  return { type: ActionType.SIGN_AGREEMENT, payload };
};

export enum ActionType {
  NAME_UPDATE,
  ADDRESS_1_UPDATE,
  ADDRESS_2_UPDATE,
  ZIP_UPDATE,
  EMAIL_UPDATE,
  PHONE_UPDATE,
  LACKS_GARDEN_SPACE_TOGGLE,
  HAD_CAMBRIDGE_PLOT_TOGGLE,
  CAMBRIDGE_PLOT_LOCATION_UPDATE,
  CAMBRIDGE_PLOT_YEAR_UPDATE,
  HAD_NON_CAMBRIDGE_PLOT_TOGGLE,
  NON_CAMBRIDGE_PLOT_LOCATION_UPDATE,
  NON_CAMBRIDGE_PLOT_YEAR_UPDATE,
  REQUIRES_ACCESSIBLE_PLOT_TOGGLE,
  VOLUNTEERS_TO_COORDINATE_TOGGLE,
  AGREE_TO_TOS,
  SIGN_AGREEMENT,
}

export type ApplicationAction =
  | { type: ActionType.NAME_UPDATE; payload: string }
  | { type: ActionType.ADDRESS_1_UPDATE; payload: string }
  | { type: ActionType.ADDRESS_2_UPDATE; payload: string }
  | { type: ActionType.ZIP_UPDATE; payload: string }
  | { type: ActionType.EMAIL_UPDATE; payload: string }
  | { type: ActionType.PHONE_UPDATE; payload: string }
  | { type: ActionType.LACKS_GARDEN_SPACE_TOGGLE }
  | { type: ActionType.HAD_CAMBRIDGE_PLOT_TOGGLE }
  | { type: ActionType.CAMBRIDGE_PLOT_YEAR_UPDATE; payload: string }
  | { type: ActionType.CAMBRIDGE_PLOT_LOCATION_UPDATE; payload: string }
  | { type: ActionType.HAD_NON_CAMBRIDGE_PLOT_TOGGLE }
  | { type: ActionType.REQUIRES_ACCESSIBLE_PLOT_TOGGLE }
  | { type: ActionType.NON_CAMBRIDGE_PLOT_YEAR_UPDATE; payload: string }
  | { type: ActionType.NON_CAMBRIDGE_PLOT_LOCATION_UPDATE; payload: string }
  | { type: ActionType.VOLUNTEERS_TO_COORDINATE_TOGGLE }
  | { type: ActionType.AGREE_TO_TOS; payload: boolean }
  | { type: ActionType.SIGN_AGREEMENT; payload: boolean };
