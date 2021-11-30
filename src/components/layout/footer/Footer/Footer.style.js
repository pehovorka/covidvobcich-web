import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    borderTop: "5px solid #efefef",
  },
  content: {
    padding: "2rem",
    margin: "0 auto",
    width: "70%",
    fontSize: "1rem",
  },
  link: {
    fontWeight: 500,
  },
  icon: {
    color: "rgba(0, 0, 0, 0.87)",
  },
}));
