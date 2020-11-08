import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Card,
  CardContent,
  makeStyles,
  Button,
  ButtonGroup,
  CardHeader,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Grid,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";

import { Chart } from "./Chart";

const OBEC_DETAIL_QUERY = gql`
  query Obec($obec_kod: String!, $limit: Int!) {
    obec(obec_kod: $obec_kod, limit: $limit) {
      obec_nazev
      datum
      aktualne_nemocnych
      nove_pripady
    }
  }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
});

export function TownCard({ obec_nazev, obec_kod, handleClose, index }) {
  const [limit, setLimit] = useState(90);
  const [queryLimit, setQueryLimit] = useState(90);
  const obec = useQuery(OBEC_DETAIL_QUERY, {
    variables: { obec_kod, limit: queryLimit },
    fetchPolicy: "cache-first",
  });

  const convertToGraphData = (stringData) => {
    const graphData = stringData.map((item) => {
      const container = {};
      container.datum = new Date(item.datum).toLocaleDateString("cs-CZ", {});
      container.aktualne_nemocnych = parseInt(item.aktualne_nemocnych);
      container.nove_pripady = parseInt(item.nove_pripady);
      return container;
    });
    graphData.reverse();
    return graphData.slice(-limit);
  };

  const handleChange = (result) => {
    console.log(result.target.value);
    setLimit(result.target.value);
    if (result.target.value === 0) {
      setQueryLimit(0);
    }
  };

  //console.log(obecData[obecData.length - 1].aktualne_nemocnych);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Box>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={limit}
                    onChange={handleChange}
                  >
                    <MenuItem value={7}>7 dní</MenuItem>
                    <MenuItem value={30}>30 dní</MenuItem>
                    <MenuItem value={90}>90 dní</MenuItem>
                    <MenuItem value={0}>Vše</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleClose(index)}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        }
        title={obec_nazev}
      />
      <CardContent>
        {obec.loading ? (
          <Box>
            <CircularProgress text-align="center" color="primary" size={50} />
          </Box>
        ) : (
          <>
            <Box mb={2}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      Aktuálně nemocných (
                      {new Date(obec.data.obec[0].datum).toLocaleDateString(
                        "cs-CZ",
                        {
                          day: "numeric",
                          month: "numeric",
                        }
                      )}
                      )
                    </TableCell>
                    <TableCell align="center">
                      Nové případy (
                      {new Date(obec.data.obec[1].datum).toLocaleDateString(
                        "cs-CZ",
                        {
                          day: "numeric",
                          month: "numeric",
                        }
                      )}
                      )
                    </TableCell>
                    <TableCell align="center">Změna za 7 dní</TableCell>
                    <TableCell align="center">Změna za 30 dní</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="center">
                      {obec.data.obec[0].aktualne_nemocnych}
                    </TableCell>
                    <TableCell align="center">
                      {obec.data.obec[1].nove_pripady}
                    </TableCell>
                    <TableCell align="center">
                      {obec.data.obec[0].aktualne_nemocnych -
                        obec.data.obec[6].aktualne_nemocnych}
                    </TableCell>
                    <TableCell align="center">
                      {obec.data.obec[0].aktualne_nemocnych -
                        obec.data.obec[29].aktualne_nemocnych}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Chart data={convertToGraphData(obec.data.obec)} />
          </>
        )}
      </CardContent>
    </Card>
  );
}