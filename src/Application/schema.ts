import * as yup from 'yup';
import { ApplicationFields } from './reducer';
import { regex } from '../utils';

export const personSchema = yup.object({
  [ApplicationFields.NAME]: yup.string().required('Required'),
  [ApplicationFields.ADDRESS_1]: yup.string().required('Required'),
  [ApplicationFields.ADDRESS_2]: yup.string().nullable(),
  [ApplicationFields.ZIP]: yup
    .string()
    .length(5, 'Invalid')
    .matches(regex.NUMERIC_STRING, 'Invalid')
    .required('Required'),
  [ApplicationFields.EMAIL]: yup.string().email('Invalid').required('Required'),
  [ApplicationFields.PHONE]: yup
    .string()
    .matches(regex.PHONE_NUMBER, 'Invalid')
    .required('Required'),
});

export const historySchema = yup.object({
  [ApplicationFields.LACKS_GARDEN_SPACE]: yup.bool(),
  [ApplicationFields.HAD_PLOT_IN_CAMBRIDGE]: yup.bool(),
  [ApplicationFields.CAMBRIDGE_PLOT_LOCATION]: yup
    .string()
    .when(ApplicationFields.HAD_PLOT_IN_CAMBRIDGE, {
      is: true,
      then: yup.string().nullable().required('Required'),
      otherwise: yup.string().nullable(),
    }),
  [ApplicationFields.CAMBRIDGE_PLOT_YEAR]: yup
    .string()
    .when(ApplicationFields.HAD_PLOT_IN_CAMBRIDGE, {
      is: true,
      then: yup
        .string()
        .matches(regex.NUMERIC_STRING, 'Invalid')
        .min(4, 'Invalid')
        .max(4, 'Invalid')
        .nullable()
        .required('Required'),
      otherwise: yup.string().nullable(),
    }),
  [ApplicationFields.HAD_NON_CAMBRIDGE_PLOT]: yup.bool(),
  [ApplicationFields.NON_CAMBRIDGE_PLOT_LOCATION]: yup
    .string()
    .when(ApplicationFields.HAD_NON_CAMBRIDGE_PLOT, {
      is: true,
      then: yup.string().nullable().required('Required'),
      otherwise: yup.string().nullable(),
    }),
  [ApplicationFields.NON_CAMBRIDGE_PLOT_YEAR]: yup
    .string()
    .when(ApplicationFields.HAD_NON_CAMBRIDGE_PLOT, {
      is: true,
      then: yup
        .string()
        .matches(regex.NUMERIC_STRING, 'Invalid')
        .min(4, 'Invalid')
        .max(4, 'Invalid')
        .nullable()
        .required('Required'),
      otherwise: yup.string().nullable(),
    }),
  [ApplicationFields.REQUIRES_ACCESSIBLE_PLOT]: yup.bool(),
  [ApplicationFields.VOLUNTEERS_TO_COORDINATE]: yup.bool(),
});
