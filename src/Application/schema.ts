import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const personSchema = yup.object({
  name: yup.string().required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string().nullable(),
  zip: yup
    .string()
    .length(5, 'Invalid')
    .matches(/^\d+$/, 'Invalid')
    .required('Required'),
  email: yup.string().email('Invalid').required('Required'),
  phone: yup.string().matches(phoneRegExp, 'Invalid').required('Required'),
});

type Person = {
  name?: string;
  address1?: string;
  address2?: string;
  zip?: string;
  phone?: string;
  email?: string;
};
export const reducer = (state: Person, action: PersonErrorAction) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.error };
    case 'address1':
      return { ...state, address1: action.error };
    case 'address2':
      return { ...state, address2: action.error };
    case 'zip':
      return { ...state, zip: action.error };
    case 'email':
      return { ...state, email: action.error };
    case 'phone':
      return { ...state, phone: action.error };
  }
};

export const initialState = {
  name: undefined,
  address1: undefined,
  address2: undefined,
  zip: undefined,
  phone: undefined,
};

export type PersonErrorAction = { type: ActionType; error?: string };
export type ActionType =
  | 'name'
  | 'address1'
  | 'address2'
  | 'zip'
  | 'email'
  | 'phone';
