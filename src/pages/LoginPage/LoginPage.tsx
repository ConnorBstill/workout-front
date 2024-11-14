import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { Button, TextInput } from '../../components/common';
import { Typography } from '@mui/material';

import classes from './LoginPageStyles.module.css';

import { logInUser } from '../../api-services/AuthService';

const LoginPage = () => {
  const mutation = useMutation({
    mutationFn: logInUser,
    onSuccess: (res) => {
      console.log('res', res)
    }
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginClick = () => {
    mutation.mutate({ email, password });
  }

  return (
    <div className={classes.container}>
      <Typography variant="h3" color="primary">Login</Typography>

      <form className={classes['form-container']}>
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

        <Button onClick={handleLoginClick} variant="contained" className="mb-4">Login</Button>

        <Typography 
          variant="body2" 
          color="textPrimary">
            Don't have an account yet? Click <Link to="register">here</Link> to register
        </Typography>
      </form>
    </div>
  );
};

export default LoginPage;
