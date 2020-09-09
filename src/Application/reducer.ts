import { ActionType, ApplicationAction } from './actions';

export enum ApplicationFields {
  NAME = 'name',
  ADDRESS_1 = 'address1',
  ADDRESS_2 = 'address2',
  ZIP = 'zip',
  EMAIL = 'email',
  PHONE = 'phone',
  LACKS_GARDEN_SPACE = 'lacksGardenSpace',
  HAD_PLOT_IN_CAMBRIDGE = 'hadPlotInCambridge',
  CAMBRIDGE_PLOT_LOCATION = 'cambridgePlotLocation',
  CAMBRIDGE_PLOT_YEAR = 'cambridgePlotYear',
  HAD_NON_CAMBRIDGE_PLOT = 'hadNonCambridgePlot',
  NON_CAMBRIDGE_PLOT_LOCATION = 'nonCambridgePlotLocation',
  NON_CAMBRIDGE_PLOT_YEAR = 'nonCambridgePlotYear',
  REQUIRES_ACCESSIBLE_PLOT = 'requiresAccessiblePlot',
  VOLUNTEERS_TO_COORDINATE = 'volunteersToCoordinate',
  AGREED_TO_TOS = 'agreedToTOS',
  SIGNED_AGREEMENT = 'signedAgreement',
}

export type Application = {
  [ApplicationFields.NAME]: string;
  [ApplicationFields.ADDRESS_1]: string;
  [ApplicationFields.ADDRESS_2]: string | null;
  [ApplicationFields.ZIP]: string;
  [ApplicationFields.EMAIL]: string;
  [ApplicationFields.PHONE]: string;
  [ApplicationFields.LACKS_GARDEN_SPACE]: boolean;
  [ApplicationFields.HAD_PLOT_IN_CAMBRIDGE]: boolean;
  [ApplicationFields.CAMBRIDGE_PLOT_LOCATION]: string | null;
  [ApplicationFields.CAMBRIDGE_PLOT_YEAR]: string | null;
  [ApplicationFields.HAD_NON_CAMBRIDGE_PLOT]: boolean;
  [ApplicationFields.NON_CAMBRIDGE_PLOT_LOCATION]: string | null;
  [ApplicationFields.NON_CAMBRIDGE_PLOT_YEAR]: string | null;
  [ApplicationFields.REQUIRES_ACCESSIBLE_PLOT]: boolean;
  [ApplicationFields.VOLUNTEERS_TO_COORDINATE]: boolean;
  [ApplicationFields.AGREED_TO_TOS]: boolean;
  [ApplicationFields.SIGNED_AGREEMENT]: boolean;
};

export const initialPersonValues = {
  [ApplicationFields.NAME]: '',
  [ApplicationFields.ADDRESS_1]: '',
  [ApplicationFields.ADDRESS_2]: null,
  [ApplicationFields.ZIP]: '',
  [ApplicationFields.EMAIL]: '',
  [ApplicationFields.PHONE]: '',
};

export const initialHistoryValues = {
  [ApplicationFields.LACKS_GARDEN_SPACE]: false,
  [ApplicationFields.HAD_PLOT_IN_CAMBRIDGE]: false,
  [ApplicationFields.CAMBRIDGE_PLOT_LOCATION]: null,
  [ApplicationFields.CAMBRIDGE_PLOT_YEAR]: null,
  [ApplicationFields.HAD_NON_CAMBRIDGE_PLOT]: false,
  [ApplicationFields.NON_CAMBRIDGE_PLOT_LOCATION]: null,
  [ApplicationFields.NON_CAMBRIDGE_PLOT_YEAR]: null,
  [ApplicationFields.REQUIRES_ACCESSIBLE_PLOT]: false,
  [ApplicationFields.VOLUNTEERS_TO_COORDINATE]: false,
};

export type PersonalInfo = {
  [ApplicationFields.NAME]: string;
  [ApplicationFields.ADDRESS_1]: string;
  [ApplicationFields.ADDRESS_2]: string | null;
  [ApplicationFields.ZIP]: string;
  [ApplicationFields.EMAIL]: string;
  [ApplicationFields.PHONE]: string;
};

export type HistoryInfo = {
  [ApplicationFields.LACKS_GARDEN_SPACE]: boolean;
  [ApplicationFields.HAD_PLOT_IN_CAMBRIDGE]: boolean;
  [ApplicationFields.CAMBRIDGE_PLOT_LOCATION]: string | null;
  [ApplicationFields.CAMBRIDGE_PLOT_YEAR]: string | null;
  [ApplicationFields.HAD_NON_CAMBRIDGE_PLOT]: boolean;
  [ApplicationFields.NON_CAMBRIDGE_PLOT_LOCATION]: string | null;
  [ApplicationFields.NON_CAMBRIDGE_PLOT_YEAR]: string | null;
  [ApplicationFields.REQUIRES_ACCESSIBLE_PLOT]: boolean;
  [ApplicationFields.VOLUNTEERS_TO_COORDINATE]: boolean;
};

export const applicationReducer = (
  state: Application,
  action: ApplicationAction,
) => {
  switch (action.type) {
    case ActionType.SAVE_PERSONAL_INFO:
      return { ...state, ...action.payload };
    case ActionType.SAVE_HISTORY_INFO:
      return { ...state, ...action.payload };
    case ActionType.TOS_TOGGLE:
      return { ...state, agreedToTOS: !state.agreedToTOS };
    case ActionType.SIGN_AGREEMENT_TOGGLE:
      return { ...state, signedAgreement: !state.signedAgreement };
  }
};

export const initialState: Application = {
  ...initialPersonValues,
  ...initialHistoryValues,
  [ApplicationFields.AGREED_TO_TOS]: false,
  [ApplicationFields.SIGNED_AGREEMENT]: false,
};
