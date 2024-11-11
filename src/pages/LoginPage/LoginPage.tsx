import { useState } from 'react';

import Button from '../../components/common/Button';

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
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <Button variant="contained">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
