import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

import { Button, TextInput } from '../../components/common';
import { Typography } from '@mui/material';

import classes from './LoginPageStyles.module.css';

import { logInUser } from '../../api-services/AuthService';
import { setJwt } from '../../api-services/JwtService';

const LoginPage = () => {
  const mutation = useMutation({
    mutationFn: logInUser,
    onSuccess: (res) => {
      console.log('handleLoginClick')
      setJwt(res.data.jwt);
      navigate('/main/explore');
    },
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleLoginClick = () => {
    mutation.mutate({ email, password });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" color="primary" className="mb-6">
        Login
      </Typography>

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

        <div className={`${classes['input-container']} mb-6`}>
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

        <Button onClick={handleLoginClick} variant="contained" className="mb-2">
          Login
        </Button>

        <Typography variant="body2" color="textPrimary">
          Don't have an account yet? Click{' '}
          <Link to="/" id={classes['register-link']}>
            here
          </Link>
          to register
        </Typography>
      </form>
    </div>
  );
};

export default LoginPage;
