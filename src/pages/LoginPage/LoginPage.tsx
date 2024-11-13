import { useState } from 'react';

import { Button, TextInput } from '../../components/common';

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
      <h2>Login</h2>
      <form className={classes.container}>
        <div className={classes['input-container']}>
          {/* <label htmlFor="username">Username</label> */}
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            color="primary"
            id="username"
            variant="filled"
            label="Filled"
            value={username}
            required
          />
        </div>
        <div className={classes['input-container']}>
          {/* <label htmlFor="password">Password</label> */}
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            color="primary"
            variant="filled"
            label="Filled"
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
