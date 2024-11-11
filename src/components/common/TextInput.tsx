import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

const TextInput = ({ variant }: BaseTextFieldProps)  => {

  return (
    <TextField variant={variant}></TextField>
  )
}

export default TextInput;
