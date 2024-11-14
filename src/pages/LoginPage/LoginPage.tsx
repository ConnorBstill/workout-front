import { useState } from 'react';

import { Button, TextInput } from '../../components/common';
import { Typography } from '@mui/material';

import classes from './LoginPageStyles.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onLogin(username, password);
  // };

  return (
    <div className={classes.container}>
      <Typography variant="h3" color="primary">Login</Typography>

      <form className={classes.container}>
        <div className={classes['input-container']}>
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            color="primary"
            id="email"
            variant="filled"
            label="Email"
            value={username}
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

        <Button variant="contained">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
