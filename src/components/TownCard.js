// React
import React, { useEffect, useReducer } from "react";

// Apollo
import { useQuery } from "@apollo/client";

// Material UI
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Grid,
  Tooltip,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";

// Sub-components
import { Chart } from "./Chart";
import {
  OBEC_DETAIL_QUERY,
  convertToGraphData,
} from "../utils/municipalityUtils";
import { DateLimitSelect } from "./DateLimitSelect";
import { MunicipalityStats } from "./MunicipalityStats";
import { LoadingIndicator } from "./LoadingIndicator";
import { ShareIconAndDialog } from "./ShareIconAndDialog";
import {
  CHANGE_LIMIT,
  REMOVE_MUNICIPALITY,
} from "../utils/municipalitiesReducer";
import {
  useMunicipalitiesDispatch,
  useMunicipalitiesState,
} from "../contexts/MunicipalitiesProvider";

export function TownCard({ obec_nazev, obec_kod, limit, index, provided }) {
  /*   const [state, dispatch] = useReducer(municipalitiesReducer, {
    displayLimit: limit,
    queryLimit: limit,
  }); */
  const dispatch = useMunicipalitiesDispatch();
  const state = useMunicipalitiesState();

  const obec = useQuery(OBEC_DETAIL_QUERY, {
    variables: { obec_kod, limit: 90 }, //TODO: State
    fetchPolicy: "cache-first",
  });

  const handleDateLimitChange = (select) => {
    dispatch({ type: CHANGE_LIMIT, selectedLimit: select.target.value });
  };

  useEffect(() => {
    if (obec_nazev && obec_kod) {
      const item = {};
      item.item_id = obec_kod;
      item.item_name = obec_nazev;
      window.gtag("event", "view_item", {
        items: [item],
      });
    }
  }, [obec_kod, obec_nazev]);

  return (
    <Card>
      <CardHeader
        {...provided?.dragHandleProps}
        titleTypographyProps={{ variant: "h5", component: "h2" }}
        action={
          <Box ml={1}>
            <Grid
              container
              alignItems="center"
              justify="flex-end"
              spacing={1}
              direction="row"
              wrap="nowrap"
            >
              <Grid item xs>
                <DateLimitSelect
                  limit={state.displayLimit}
                  handleDateLimitChange={handleDateLimitChange}
                />
              </Grid>
              <Grid item xs>
                <ShareIconAndDialog
                  obec_kod={obec_kod}
                  obec_nazev={obec_nazev}
                />
              </Grid>

              <Grid item xs>
                <Tooltip title="Zavřít kartu">
                  <IconButton
                    aria-label="zavřít kartu obce"
                    onClick={() =>
                      dispatch({
                        type: REMOVE_MUNICIPALITY,
                        code: obec_kod,
                      })
                    }
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        }
        title={obec_nazev}
      />
      <CardContent>
        {obec.loading || obec.error ? (
          <LoadingIndicator />
        ) : (
          <>
            <MunicipalityStats obec={obec} obec_kod={obec_kod} />
            <Chart
              data={convertToGraphData(obec.data.obec, state.displayLimit)}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
}

TownCard.defaultProps = {
  limit: 90,
};
