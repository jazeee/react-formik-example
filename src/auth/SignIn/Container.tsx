import React from 'react';
import { useHistory } from 'react-router';
import Form from './Form';

export default function Container() {
  const history = useHistory();
  const handleSubmit = (email: string, password: string) => {
    console.log('sign in with', email, password);
    history.push('/')
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />
    </>
  )
}
