import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="title"
        aria-describedby="desc"
        open={open}
      >
        <DialogTitle id="title">The dialog test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="desc">
            Are you sure to send this data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button onClick={() => setOpen(false)} autoFocus variant="contained">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
