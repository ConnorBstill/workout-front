import MuiButton, { ButtonProps } from '@mui/material/Button';

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <MuiButton variant={variant}>{children}</MuiButton>
  );
}

export { Button };
