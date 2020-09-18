import { FormikErrors, FormikTouched } from 'formik';
import * as regex from './regex';

function fieldHasError<T>(
  field: keyof T,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
) {
  return Boolean(Boolean(errors[field] && touched[field]));
}

export { regex, fieldHasError };
