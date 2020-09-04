import { PersonalInfo, HistoryInfo } from './reducer';

export const savePersonalInfo = (payload: PersonalInfo): ApplicationAction => {
  return { type: ActionType.SAVE_PERSONAL_INFO, payload };
};

export const saveHistoryInfo = (payload: HistoryInfo): ApplicationAction => {
  return { type: ActionType.SAVE_HISTORY_INFO, payload };
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
  SAVE_PERSONAL_INFO,
  SAVE_HISTORY_INFO,
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
  | { type: ActionType.SAVE_PERSONAL_INFO; payload: PersonalInfo }
  | { type: ActionType.SAVE_HISTORY_INFO; payload: HistoryInfo }
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
