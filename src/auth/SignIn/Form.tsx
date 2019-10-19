import * as React from 'react';

interface Props {
  handleSubmit: (email: string, password: string) => void
}

export default function Form(props: Props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleSubmit(email, password);
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='text'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type='submit'>Sign In!</button>
    </form>
  )
}
