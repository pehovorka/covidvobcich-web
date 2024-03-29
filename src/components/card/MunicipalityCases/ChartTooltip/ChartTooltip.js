import React from "react";
import { Box, Paper, Grid, Typography, Divider } from "@mui/material/";
import { useStyles } from "./ChartTooltip.style";

export default function ChartTooltip({ active, payload, label }) {
  const styles = useStyles();
  const date = new Date(label);
  const stringDate = date.toLocaleDateString("cs-CZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  if (active && payload && payload.length) {
    return (
      <Paper
        className="custom-tooltip"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <Box p={1} minWidth="15rem">
          {/* Date */}
          <Typography className={styles.title}>{stringDate}</Typography>
          <Divider />
          {/* Main content */}
          <Box pt={1}>
            {/* Active cases */}
            <Box className={styles.bigger} color={payload[0].color}>
              <Grid container justifyContent="space-between">
                <Grid item>{payload[0].name} </Grid>
                <Grid item>
                  {parseInt(payload[0].value).toLocaleString("cs-CZ")}
                </Grid>
              </Grid>
            </Box>
            {/* New cases */}
            <Box className={styles.bigger} color={payload[2].color}>
              Nové případy
            </Box>
            {/* New cases details */}
            <Box>
              {/* Total new cases */}
              <Grid
                container
                justifyContent="flex-start"
                direction="row"
                className={styles.bold}
              >
                <Grid item>
                  <Box
                    width="2rem"
                    height="100%"
                    style={{
                      background:
                        "linear-gradient(148deg, " +
                        payload[2]?.color +
                        ", " +
                        payload[2]?.color +
                        " 50%, " +
                        payload[1].color +
                        " 50%, " +
                        payload[1].color +
                        ")",
                    }}
                  />
                </Grid>
                <Grid item className={styles.marginLeft}>
                  Celkem{" "}
                </Grid>
                <Grid item className={styles.alignRight}>
                  {(
                    parseInt(payload[1].value) + parseInt(payload[2]?.value)
                  ).toLocaleString("cs-CZ")}
                </Grid>
              </Grid>
              {/* New cases under 65 */}
              <Grid container justifyContent="flex-start" direction="row">
                <Grid item>
                  <Box
                    width="2rem"
                    height="100%"
                    style={{ backgroundColor: payload[2]?.color }}
                  />
                </Grid>
                <Grid item className={styles.marginLeft}>
                  {payload[2]?.name}
                </Grid>
                <Grid item className={styles.alignRight}>
                  {parseInt(payload[2]?.value).toLocaleString("cs-CZ")}
                </Grid>
              </Grid>
              {/* New cases above 65 */}
              <Grid container justifyContent="flex-start" direction="row">
                <Grid item>
                  <Box
                    width="2rem"
                    height="100%"
                    style={{ backgroundColor: payload[1].color }}
                  />
                </Grid>
                <Grid item className={styles.marginLeft}>
                  {payload[1].name}
                </Grid>
                <Grid item className={styles.alignRight}>
                  {parseInt(payload[1].value).toLocaleString("cs-CZ")}
                </Grid>
              </Grid>
              {/* New cases average */}
              {payload[3].value && (
                <Grid container justifyContent="flex-start" direction="row">
                  <Grid item>
                    <Box
                      width="2rem"
                      height="100%"
                      style={{ backgroundColor: payload[3].color }}
                    />
                  </Grid>
                  <Grid item className={styles.marginLeft}>
                    {payload[3].name}
                  </Grid>
                  <Grid item className={styles.alignRight}>
                    {parseFloat(payload[3].value).toLocaleString("cs-CZ")}
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  }

  return null;
}
