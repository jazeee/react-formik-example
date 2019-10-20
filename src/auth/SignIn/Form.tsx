import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

interface Props {
  handleSubmit: (email: string, password: string) => void
}

export default function SignInForm(props: Props) {
  return (
    <>
      <Formik
        initialValues={{
          email: '', password: '',
        }}
        validationSchema={schema}
        onSubmit={( values ) => {
          props.handleSubmit(values.email, values.password);
        }}
      >
        {() => (
          <Form>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />
            <button type='submit'>Sign In!</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
