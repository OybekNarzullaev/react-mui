import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>submit</Button>
      <Button onClick={() => setOpen2(true)}>submit2</Button>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
      <Snackbar
        autoHideDuration={4000}
        open={open2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <SnackbarAlert
          onClose={handleClose2}
          severity="success"
          variant="filled"
        >
          Form submitted Successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
