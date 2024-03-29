import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  useMediaQuery,
} from "@mui/material";

import { getDoseOrderData } from "../orpVaccinationsUtils";
import { numberToString } from "../../../../utils/general";

export default function OrpVaccinationsBasicStats({
  lastDay,
  orpPopulation,
  orpName,
  municipalityName,
  municipalityPopulation,
}) {
  const getPopulationPercentage = (number) => {
    const share = number / orpPopulation;

    return `${numberToString(share * 100, 1)} %`;
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const doses = {
    first: getDoseOrderData(lastDay, 1),
    second: getDoseOrderData(lastDay, 2),
    firstBooster: getDoseOrderData(lastDay, 3),
    secondBooster: getDoseOrderData(lastDay, 4),
  };

  return (
    <>
      <Box my={2}>
        <Table padding={isSmallScreen ? "checkbox" : "normal"}>
          <TableHead>
            <TableRow>
              <TableCell>dávka</TableCell>
              <TableCell align="right">% obyvatel</TableCell>
              <TableCell align="right">celkem dávek</TableCell>
              <TableCell align="right">nových dávek</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1.</TableCell>
              <TableCell align="right">
                {getPopulationPercentage(doses.first.td)}
              </TableCell>
              <TableCell align="right">
                {numberToString(doses.first.td)}
              </TableCell>
              <TableCell align="right">
                {numberToString(doses.first.nd)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2.</TableCell>
              <TableCell align="right">
                {getPopulationPercentage(doses.second.td)}
              </TableCell>
              <TableCell align="right">
                {numberToString(doses.second.td)}
              </TableCell>
              <TableCell align="right">
                {numberToString(doses.second.nd)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1. posilující</TableCell>
              <TableCell align="right">
                {getPopulationPercentage(doses.firstBooster.td)}
              </TableCell>
              <TableCell align="right">
                {numberToString(doses.firstBooster.td)}
              </TableCell>
              <TableCell align="right">
                {numberToString(doses.firstBooster.nd)}
              </TableCell>
            </TableRow>
            {doses.secondBooster && (
              <TableRow>
                <TableCell>2. posilující</TableCell>
                <TableCell align="right">
                  {getPopulationPercentage(doses.secondBooster.td)}
                </TableCell>
                <TableCell align="right">
                  {numberToString(doses.secondBooster.td)}
                </TableCell>
                <TableCell align="right">
                  {numberToString(doses.secondBooster.nd)}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
      <Typography variant="caption" component="p">
        Počet obyvatel ve správním obvodu obce s rozšířenou působností {orpName}{" "}
        je {numberToString(orpPopulation)}. Obec {municipalityName} tvoří{" "}
        {numberToString((municipalityPopulation / orpPopulation) * 100, 1)}
        &nbsp;% z celkového počtu obyvatel v tomto správním obvodu.
      </Typography>
    </>
  );
}

OrpVaccinationsBasicStats.propTypes = {
  lastDay: PropTypes.object,
  orpPopulation: PropTypes.number,
  orpName: PropTypes.string,
  municipalityName: PropTypes.string,
  municipalityPopulation: PropTypes.number,
};
