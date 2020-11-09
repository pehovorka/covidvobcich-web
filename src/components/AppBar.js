import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Grid, Toolbar, Typography } from "@material-ui/core/";
import { SearchField } from "./SearchField";
import virus from "../assets/virus.svg";

const useStyles = makeStyles((theme) => ({
  search: {
    color: "#fff",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export function PrimarySearchAppBar({
  setSelectedTowns,
  addNewTown,
  inputRef,
}) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Box width="100%" pt={1} pb={1}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12} sm={5} md={3} lg={2}>
                <Grid container spacing={1}>
                  <Grid item>
                    {" "}
                    <img
                      src={virus}
                      alt="Virus"
                      height="30px"
                      width="30px"
                      style={{ fill: "#fff" }}
                    />{" "}
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.title}
                      variant="h6"
                      component="h1"
                      noWrap
                    >
                      COVID v obcích
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={7} md={9} lg={10}>
                <div className={classes.search}>
                  <SearchField
                    setSelectedTowns={setSelectedTowns}
                    addNewTown={addNewTown}
                    inputRef={inputRef}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
