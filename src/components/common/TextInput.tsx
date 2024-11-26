import TextField, { TextFieldProps } from '@mui/material/TextField';

import { TEXT_PRIMARY_DIM_COLOR } from '../../colors';

const TextInput = ({ onChange, className, variant, color, label, id, type, multiline, minRows }: TextFieldProps) => {
  return (
    <TextField 
      onChange={onChange} 
      className={className}
      variant={variant} 
      multiline={multiline}
      minRows={minRows}
      label={label}
      // labelId={labelId}
      id={id}
      color={color} 
      type={type}
      sx={{
        '.MuiOutlinedInput-notchedOutline': { borderColor: TEXT_PRIMARY_DIM_COLOR },
      }}
       />
  );
};

export { TextInput };
