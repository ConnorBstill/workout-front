import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { Button, TextInput } from '../../components/common';
import { Typography } from '@mui/material';

import classes from './RegisterPageStyles.module.css';

import { registerUser } from '../../api-services/AuthService';

const LoginPage = () => {
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      console.log('res', res)
    }
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegisterClick = () => {
    mutation.mutate({ email, password });
  }

  return (
    <div className={classes.container}>
      <Typography variant="h3" color="primary">Register</Typography>

      <form className={classes.container}>
        <div className={classes['input-container']}>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            color="primary"
            id="email"
            variant="filled"
            label="Email"
            value={email}
            required
          />
        </div>

        <div className={classes['input-container']}>
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            color="primary"
            variant="filled"
            label="Password"
            id="password"
            value={password}
            required
          />
        </div>

        <Button onClick={handleRegisterClick} variant="contained">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
