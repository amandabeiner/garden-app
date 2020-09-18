import * as yup from 'yup';
import { UserFields } from './formFields';
import { regex } from '../utils';

export const schema = yup.object({
  [UserFields.NAME]: yup.string().required('Required'),
  [UserFields.ADDRESS_1]: yup.string().required('Required'),
  [UserFields.ADDRESS_2]: yup.string().nullable(),
  [UserFields.ZIP]: yup
    .string()
    .length(5, 'Invalid')
    .matches(regex.NUMERIC_STRING, 'Invalid')
    .required('Required'),
  [UserFields.EMAIL]: yup.string().email('Invalid').required('Required'),
  [UserFields.PHONE]: yup
    .string()
    .matches(regex.PHONE_NUMBER, 'Invalid')
    .required('Required'),
});
