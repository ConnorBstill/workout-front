import { SelectProps } from '@mui/material';
import { Select as MuiSelect, MenuItem, InputLabel } from '@mui/material';

const Select = ({ onChange, variant, label, children, value }: SelectProps) => {
  return (
    <MuiSelect
        variant={variant}
        value={value}
        label={label}
        onChange={onChange}
      >
        {children}
      </MuiSelect>
  );
};

export { Select };
