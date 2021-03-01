import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, Link, IconButton, Typography } from "@material-ui/core/";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="zavřít"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export function CookieDialog({ open, setOpen, handleClose }) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Prohlášení o použití cookies
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Tento web ukládá na vaše zařízení soubory, obecně nazvané cookies.
        </Typography>
        <Typography gutterBottom>
          Do vašeho prohlížeče ukládáme seznam obcí které jste si přidali,
          abyste je nemuseli při příští návštěvě hledat znovu.
        </Typography>
        <Typography gutterBottom>
          Dále používáme cookies třetích stran, konkrétně Google Analytics pro
          analýzu návštěvnosti. Více informací naleznete{" "}
          <Link
            href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
            target="_blank"
            rel="noreferrer"
          >
            zde
          </Link>
          . Tyto cookies jsou řízeny třetími stranami a nemáme přístup ke čtení
          nebo zápisu těchto dat.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
