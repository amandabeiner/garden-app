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

export const applicationReducer = (
  state: Application,
  action: ApplicationAction,
) => {
  switch (action.type) {
    case ActionType.NAME_UPDATE:
      return { ...state, name: action.payload };
    case ActionType.ADDRESS_1_UPDATE:
      return { ...state, address1: action.payload };
    case ActionType.ADDRESS_2_UPDATE:
      return { ...state, address2: action.payload };
    case ActionType.ZIP_UPDATE:
      return { ...state, zip: action.payload };
    case ActionType.EMAIL_UPDATE:
      return { ...state, email: action.payload };
    case ActionType.PHONE_UPDATE:
      return { ...state, phone: action.payload };
    case ActionType.LACKS_GARDEN_SPACE_TOGGLE:
      return { ...state, lacksGardenSpace: !state.lacksGardenSpace };
    case ActionType.HAD_CAMBRIDGE_PLOT_TOGGLE:
      const {
        hadPlotInCambridge,
        cambridgePlotLocation,
        cambridgePlotYear,
      } = state;
      const nextCambridgePlotState = !hadPlotInCambridge;

      return {
        ...state,
        hadPlotInCambridge: nextCambridgePlotState,
        cambridgePlotYear: nextCambridgePlotState ? cambridgePlotYear : null,
        cambridgePlotLocation: nextCambridgePlotState
          ? cambridgePlotLocation
          : null,
      };
    case ActionType.CAMBRIDGE_PLOT_LOCATION_UPDATE:
      return { ...state, cambridgePlotLocation: action.payload };
    case ActionType.CAMBRIDGE_PLOT_YEAR_UPDATE:
      return { ...state, cambridgePlotYear: action.payload };
    case ActionType.HAD_NON_CAMBRIDGE_PLOT_TOGGLE:
      const {
        hadNonCambridgePlot,
        nonCambridgePlotLocation,
        nonCambridgePlotYear,
      } = state;
      const nextNonCambridgePlotState = !hadNonCambridgePlot;
      return {
        ...state,
        hadNonCambridgePlot: nextNonCambridgePlotState,
        nonCambridgePlotLocation: nextNonCambridgePlotState
          ? nonCambridgePlotLocation
          : null,
        nonCambridgePlotYear: nextNonCambridgePlotState
          ? nonCambridgePlotYear
          : null,
      };
    case ActionType.NON_CAMBRIDGE_PLOT_LOCATION_UPDATE:
      return { ...state, nonCambridgePlotLocation: action.payload };
    case ActionType.NON_CAMBRIDGE_PLOT_YEAR_UPDATE:
      return { ...state, nonCambridgePlotYear: action.payload };
    case ActionType.REQUIRES_ACCESSIBLE_PLOT_TOGGLE:
      return {
        ...state,
        requiresAccessiblePlot: !state.requiresAccessiblePlot,
      };
    case ActionType.VOLUNTEERS_TO_COORDINATE_TOGGLE:
      return {
        ...state,
        volunteersToCoordinate: !state.volunteersToCoordinate,
      };
    case ActionType.AGREE_TO_TOS:
      return { ...state, agreedToTOS: true };
    case ActionType.SIGN_AGREEMENT:
      return { ...state, signedAgreement: true };
  }
};

export const initialState: Application = {
  name: '',
  address1: '',
  address2: null,
  zip: '',
  email: '',
  phone: '',
  lacksGardenSpace: false,
  hadPlotInCambridge: false,
  cambridgePlotLocation: null,
  cambridgePlotYear: null,
  hadNonCambridgePlot: false,
  nonCambridgePlotLocation: null,
  nonCambridgePlotYear: null,
  requiresAccessiblePlot: false,
  volunteersToCoordinate: false,
  agreedToTOS: false,
  signedAgreement: false,
};
