import { ActionType, ApplicationAction } from './actions';

export type Application = {
  name: string;
  address1: string;
  address2: string | null;
  zip: string;
  email: string;
  phone: string;
  lacksGardenSpace: boolean;
  hadPlotInCambridge: boolean;
  cambridgePlotLocation: string | null;
  cambridgePlotYear: string | null;
  hadNonCambridgePlot: boolean;
  nonCambridgePlotLocation: string | null;
  nonCambridgePlotYear: string | null;
  requiresAccessiblePlot: boolean;
  volunteersToCoordinate: boolean;
  agreedToTOS: boolean;
  signedAgreement: boolean;
};

export const initialPersonValues = {
  name: '',
  address1: '',
  address2: null,
  zip: '',
  email: '',
  phone: '',
};

export const initialHistoryValues = {
  lacksGardenSpace: false,
  hadPlotInCambridge: false,
  cambridgePlotLocation: null,
  cambridgePlotYear: null,
  hadNonCambridgePlot: false,
  nonCambridgePlotLocation: null,
  nonCambridgePlotYear: null,
  requiresAccessiblePlot: false,
  volunteersToCoordinate: false,
};

export type PersonalInfo = {
  name: string;
  address1: string;
  address2: string | null;
  zip: string;
  email: string;
  phone: string;
};

export type HistoryInfo = {
  lacksGardenSpace: boolean;
  hadPlotInCambridge: boolean;
  cambridgePlotLocation: string | null;
  cambridgePlotYear: string | null;
  hadNonCambridgePlot: boolean;
  nonCambridgePlotLocation: string | null;
  nonCambridgePlotYear: string | null;
  requiresAccessiblePlot: boolean;
  volunteersToCoordinate: boolean;
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
  agreedToTOS: false,
  signedAgreement: false,
};

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
