import withStyles from "@mui/styles/withStyles";
import { Divider, Typography, Link } from "@mui/material";

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
});

export const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h3",
        component: "h2",
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
        component: "h3",
        style: { paddingTop: "1rem", fontWeight: 500 },
      },
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: false,
        variant: "h6",
        component: "h4",
        style: { fontWeight: 400 },
      },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true, variant: "body1" } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
    hr: {
      component: withStyles(styles)(({ classes }) => (
        <Divider className={classes.divider} light={true} variant="fullWidth" />
      )),
    },
  },
};
