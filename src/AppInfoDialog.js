import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export default function AppInfoDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: "absolute", right: "10px", top: "10px" }}>
      <Button
        variant="outlined"
        style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        onClick={handleClickOpen}
      >
        How it works?
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"How this app works?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The app saves your diary entries to your internet browser's "memory"
            (localStorage), where they stay even if you close the app.
            <br />
            <br />
            <span style={{ color: "red", fontWeight: "bold" }}>NOTE!</span> You
            can't access your diary entries any other browser than where they
            were posted!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK, awesome!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
