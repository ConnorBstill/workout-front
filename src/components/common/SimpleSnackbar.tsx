import Snackbar, { SnackbarCloseReason, SnackbarProps } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Button } from './Button';

interface Props extends SnackbarProps {
  handleClose: (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
}

const SimpleSnackbar = ({ open, message, autoHideDuration, handleClose }: Props) => {
  // const handleClose = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: SnackbarCloseReason,
  // ) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export { SimpleSnackbar };
