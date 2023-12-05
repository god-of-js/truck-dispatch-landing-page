import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string().email('This field requires a valid email').required('This field is required'),
  message: Yup.string().required('This field is required'),
});