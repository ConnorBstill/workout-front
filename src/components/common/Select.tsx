import { SelectProps } from '@mui/material';
import { Select as MuiSelect, MenuItem, InputLabel } from '@mui/material';

import { TEXT_PRIMARY_LIGHT_COLOR, TEXT_PRIMARY_DIM_COLOR } from '../../colors';

const Select = ({ onChange, variant, label, children, value }: SelectProps) => {
  return (
    <MuiSelect
      variant={variant}
      value={value}
      label={label}
      onChange={onChange}
      sx={{
        '.MuiSelect-icon': { color: TEXT_PRIMARY_LIGHT_COLOR },
        '.MuiOutlinedInput-notchedOutline': { borderColor: TEXT_PRIMARY_DIM_COLOR },
      }}
    >
      {children}
    </MuiSelect>
  );
};

export { Select };
