import TextField, { TextFieldProps } from '@mui/material/TextField';

const TextInput = ({ 
  variant,
  color,
  label,
  onChange
}: TextFieldProps)  => {

  return (
    <TextField
      onChange={onChange} 
      variant={variant}
      label={label}
      color={color}></TextField>
  )
}

export { TextInput };
