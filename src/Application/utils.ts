import { Application } from './reducer';
import { FormikErrors, FormikTouched } from 'formik';

export function fieldHasError<T>(
  field: keyof Application,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
) {
  return Boolean(Boolean(errors[field] && touched[field]));
}
