import React, {
  createContext,
  useReducer,
  Dispatch,
  FunctionComponent,
  useContext,
  useMemo,
} from 'react';
import { ApplicationAction } from './actions';
import { applicationReducer, Application, initialState } from './reducer';

type ApplicationState = [Application, Dispatch<ApplicationAction>];

export const ApplicationContext = createContext(null);

export const useApplication = (): ApplicationState => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error('useApplication must be within an ApplicationProvider');
  }

  const [state, dispatch] = context;

  return [state, dispatch];
};

export const ApplicationProvider: FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(applicationReducer, initialState);
  const value = useMemo<ApplicationState>(() => [state, dispatch], [state]);

  console.log({ state });
  return <ApplicationContext.Provider value={value} {...props} />;
};
