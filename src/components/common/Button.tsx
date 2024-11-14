import MuiButton, { ButtonProps } from '@mui/material/Button';

const Button = ({ 
  onClick, 
  children, 
  variant,
  className
}: ButtonProps) => {
  return (
    <MuiButton 
      onClick={onClick} 
      variant={variant}
      className={className}>
        {children}
    </MuiButton>
  );
}

export { Button };
