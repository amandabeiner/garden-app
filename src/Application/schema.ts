import * as yup from 'yup';
const PHONE_NUMBER = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const NUMERIC_STRING = /^\d+$/;

export const personSchema = yup.object({
  name: yup.string().required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string().nullable(),
  zip: yup
    .string()
    .length(5, 'Invalid')
    .matches(NUMERIC_STRING, 'Invalid')
    .required('Required'),
  email: yup.string().email('Invalid').required('Required'),
  phone: yup.string().matches(PHONE_NUMBER, 'Invalid').required('Required'),
});

export const historySchema = yup.object({
  lacksGardenSpace: yup.bool(),
  hadPlotInCambridge: yup.bool(),
  cambridgePlotLocation: yup.string().when('hadPlotInCambridge', {
    is: true,
    then: yup.string().nullable().required('Required'),
    otherwise: yup.string().nullable(),
  }),
  cambridgePlotYear: yup.string().when('hadPlotInCambridge', {
    is: true,
    then: yup
      .string()
      .matches(NUMERIC_STRING, 'Invalid')
      .min(4, 'Invalid')
      .max(4, 'Invalid')
      .nullable()
      .required('Required'),
    otherwise: yup.string().nullable(),
  }),
  hadNonCambridgePlot: yup.bool(),
  nonCambridgePlotLocation: yup.string().when('hadNonCambridgePlot', {
    is: true,
    then: yup.string().nullable().required('Required'),
    otherwise: yup.string().nullable(),
  }),
  nonCambridgePlotYear: yup.string().when('hadNonCambridgePlot', {
    is: true,
    then: yup
      .string()
      .matches(NUMERIC_STRING, 'Invalid')
      .min(4, 'Invalid')
      .max(4, 'Invalid')
      .nullable()
      .required('Required'),
    otherwise: yup.string().nullable(),
  }),
  requiresAccessiblePlot: yup.bool(),
  volunteersToCoordinate: yup.bool(),
});
