import { FormikErrors, FormikTouched } from 'formik';

export function fieldHasError<T>(
  field: keyof T,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
) {
  return Boolean(Boolean(errors[field] && touched[field]));
}
