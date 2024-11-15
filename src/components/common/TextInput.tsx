import TextField, { TextFieldProps } from '@mui/material/TextField';

const TextInput = ({ onChange, variant, color, label, type }: TextFieldProps) => {
  return (
    <TextField onChange={onChange} variant={variant} label={label} color={color} type={type}></TextField>
  );
};

export { TextInput };
