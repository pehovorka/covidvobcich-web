import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@material-ui/core";
import { DateLimitSelect } from "../..";
import DoseOrderNewDosesChart from "./DoseOrderNewDosesChart";
import { convertToDoseOrderNewDosesData } from "../orpVaccinationsUtils";

export default function DoseOrderNewDosesChartContainer({ data }) {
  const [limit, setLimit] = useState(90);
  const handleDateLimitChange = ({ select }) => {
    setLimit(select.target.value);
  };

  return (
    <>
      <Box pb={4}>
        <Grid container spacing={4} justify="space-between">
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Nově vykázaná očkování dle pořadí dávky
            </Typography>
          </Grid>
          <Grid item>
            <DateLimitSelect
              limit={limit}
              handleDateLimitChange={handleDateLimitChange}
            />
          </Grid>
        </Grid>
      </Box>
      <DoseOrderNewDosesChart
        data={convertToDoseOrderNewDosesData(data, limit)}
      />
    </>
  );
}

DoseOrderNewDosesChartContainer.propTypes = {
  data: PropTypes.array,
};