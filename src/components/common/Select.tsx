import { SelectProps } from '@mui/material';
import { MenuItem, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';

import { TEXT_PRIMARY_LIGHT_COLOR, TEXT_PRIMARY_DIM_COLOR } from '../../colors';

const SelectInput = ({ onChange, variant, value, label, labelId, children, id }: SelectProps) => {
  return (
    <Select
      onChange={onChange}
      variant={variant}
      value={value}
      label={label}
      labelId={labelId}
      id={id}
      sx={{
        '.MuiSelect-icon': { color: TEXT_PRIMARY_LIGHT_COLOR },
        '.MuiOutlinedInput-notchedOutline': { borderColor: TEXT_PRIMARY_DIM_COLOR },
      }}
    >
      {children}
    </Select>
  );
};

export { SelectInput };
