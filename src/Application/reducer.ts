import { ActionType, ApplicationAction } from './actions';

export enum ApplicationFields {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  ADDRESS_1 = 'street1',
  ADDRESS_2 = 'street2',
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
  GARDEN_PREFERENCES = 'gardenPreferences',
  AGREED_TO_TOS = 'agreedToTOS',
  SIGNED_AGREEMENT = 'signedAgreement',
}

export type Application = {
  personalInfo: {
    [ApplicationFields.FIRST_NAME]: string;
    [ApplicationFields.LAST_NAME]: string;
    [ApplicationFields.ADDRESS_1]: string;
    [ApplicationFields.ADDRESS_2]: string | null;
    [ApplicationFields.ZIP]: string;
    [ApplicationFields.EMAIL]: string;
    [ApplicationFields.PHONE]: string;
  };
  backgroundInfo: {
    [ApplicationFields.LACKS_GARDEN_SPACE]: boolean;
    [ApplicationFields.HAD_PLOT_IN_CAMBRIDGE]: boolean;
    [ApplicationFields.CAMBRIDGE_PLOT_LOCATION]: string | null;
    [ApplicationFields.CAMBRIDGE_PLOT_YEAR]: string | null;
    [ApplicationFields.HAD_NON_CAMBRIDGE_PLOT]: boolean;
    [ApplicationFields.NON_CAMBRIDGE_PLOT_LOCATION]: string | null;
    [ApplicationFields.NON_CAMBRIDGE_PLOT_YEAR]: string | null;
    [ApplicationFields.REQUIRES_ACCESSIBLE_PLOT]: boolean;
    [ApplicationFields.VOLUNTEERS_TO_COORDINATE]: boolean;
    [ApplicationFields.GARDEN_PREFERENCES]: string[];
    [ApplicationFields.AGREED_TO_TOS]: boolean;
    [ApplicationFields.SIGNED_AGREEMENT]: boolean;
  };
};

export const initialPersonValues = {
  [ApplicationFields.FIRST_NAME]: '',
  [ApplicationFields.LAST_NAME]: '',
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

export const initialGardenPreferencesValues = {
  [ApplicationFields.GARDEN_PREFERENCES]: [],
};

export type PersonalInfo = {
  [ApplicationFields.FIRST_NAME]: string;
  [ApplicationFields.LAST_NAME]: string;
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

export type GardenPreferences = {
  [ApplicationFields.GARDEN_PREFERENCES]: string[];
};

export const applicationReducer = (
  state: Application,
  action: ApplicationAction,
) => {
  switch (action.type) {
    case ActionType.SAVE_PERSONAL_INFO:
      return { ...state, personalInfo: { ...action.payload } };
    case ActionType.SAVE_HISTORY_INFO:
      return {
        ...state,
        backgroundInfo: { ...state.backgroundInfo, ...action.payload },
      };
    case ActionType.SAVE_GARDEN_PREFERENCES:
      return {
        ...state,
        backgroundInfo: { ...state.backgroundInfo, ...action.payload },
      };
    case ActionType.TOS_TOGGLE:
      return {
        ...state,
        backgroundInfo: {
          ...state.backgroundInfo,
          agreedToTOS: !state.backgroundInfo.agreedToTOS,
        },
      };
    case ActionType.SIGN_AGREEMENT_TOGGLE:
      return {
        ...state,
        backgroundInfo: {
          ...state.backgroundInfo,
          signedAgreement: !state.backgroundInfo.signedAgreement,
        },
      };
  }
};

export const initialState: Application = {
  personalInfo: {
    ...initialPersonValues,
  },
  backgroundInfo: {
    ...initialHistoryValues,
    ...initialGardenPreferencesValues,
    [ApplicationFields.AGREED_TO_TOS]: false,
    [ApplicationFields.SIGNED_AGREEMENT]: false,
  },
};
