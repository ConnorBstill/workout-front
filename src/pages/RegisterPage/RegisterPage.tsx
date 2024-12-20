import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

import { Button, TextInput } from '../../components/common';
import { Typography } from '@mui/material';

import { registerUser } from '../../api-services/auth-service';
import { setJwt, setRefresh } from '../../api-services/jwt-service';

const LoginPage = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      const {
        err,
        data: { jwt, refreshToken },
      } = res;

      if (!err) {
        setJwt(jwt);
        setRefresh(refreshToken);
        navigate('/main/explore');
      }
    },
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegisterClick = () => {
    mutation.mutate({ email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Typography variant="h3" color="primary" className="mb-6">
        Register
      </Typography>

      <form className="flex flex-col items-center">
        <div className="mb-2">
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

        <div className="mb-5">
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

        <Button onClick={handleRegisterClick} variant="contained" className="mb-3">
          Register
        </Button>

        <Typography variant="body2" color="textPrimary">
          Already have an account? Click{' '}
          <Link to="/login" className="link">
            here
          </Link>{' '}
          to log in
        </Typography>
      </form>
    </div>
  );
};

export default LoginPage;
