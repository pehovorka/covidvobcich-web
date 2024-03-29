import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import townImage from "../../../assets/czechTown.svg";
import { useStyles } from "./LandingScreen.style";

export default function LandingScreen({ inputRef }) {
  const classes = useStyles();
  return (
    <Box className={classes.container} component="main">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box className={classes.textContainer}>
              <Typography variant="h4" component="h2" className={classes.title}>
                Kolik pozitivně testovaných osob na{" "}
                <span className={classes.noWrap}>COVID-19</span> je ve vaší
                obci? Kolik lidí je naočkovaných?
              </Typography>

              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitle}
              >
                V celém Česku byly od začátku pandemie potvrzeny již více než
                dva miliony případů. Podívejte se, jak se koronavirová nákaza
                šíří ve vaší obci a kolik lidí již dostalo vakcínu. Přehledné
                grafy vám ukážou historický vývoj i aktuální situaci, stačí
                vyhledat název obce v záhlaví stránky.
              </Typography>

              <Button
                className={classes.button}
                variant="contained"
                size="large"
                color="secondary"
                disableElevation={true}
                startIcon={<SearchIcon />}
                onClick={() => {
                  inputRef.current.focus();
                }}
              >
                Vyhledat obec
              </Button>
            </Box>
          </Grid>
          <Grid item xs={10} md={6}>
            <img
              src={townImage}
              className={classes.image}
              alt="Obec"
              width="616"
              height="616"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
