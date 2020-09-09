import { PersonalInfo, HistoryInfo } from './reducer';

export const savePersonalInfo = (payload: PersonalInfo): ApplicationAction => {
  return { type: ActionType.SAVE_PERSONAL_INFO, payload };
};

export const saveHistoryInfo = (payload: HistoryInfo): ApplicationAction => {
  return { type: ActionType.SAVE_HISTORY_INFO, payload };
};

export const toggleAgreeToTermsAccepted = (): ApplicationAction => {
  return { type: ActionType.TOS_TOGGLE };
};

export const toggleSignAgreement = (): ApplicationAction => {
  return { type: ActionType.SIGN_AGREEMENT_TOGGLE };
};

export enum ActionType {
  SAVE_PERSONAL_INFO,
  SAVE_HISTORY_INFO,
  TOS_TOGGLE,
  SIGN_AGREEMENT_TOGGLE,
}

export type ApplicationAction =
  | { type: ActionType.SAVE_PERSONAL_INFO; payload: PersonalInfo }
  | { type: ActionType.SAVE_HISTORY_INFO; payload: HistoryInfo }
  | { type: ActionType.TOS_TOGGLE }
  | { type: ActionType.SIGN_AGREEMENT_TOGGLE };
