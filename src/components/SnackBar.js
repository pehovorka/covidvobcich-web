import React, { useState, useEffect } from "react";
import { Snackbar } from "@material-ui/core/";
import Alert from "@material-ui/lab/Alert";

import { useMunicipalitiesState } from "../providers/MunicipalitiesProvider";

export function SnackBar() {
  const { message } = useMunicipalitiesState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message?.severity}>
          {message?.text}
        </Alert>
      </Snackbar>
    </>
  );
}
