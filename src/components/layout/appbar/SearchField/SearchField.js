import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress, TextField, Autocomplete } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

import { useMunicipalitiesDispatch } from "../../../../providers/MunicipalitiesProvider";
import {
  ADD_MUNICIPALITY,
  SET_SNACKBAR_MESSAGE,
} from "../../../../utils/municipalitiesReducer";
import { MUNICIPALITIES_SEARCH_QUERY } from "../../../../utils/queries";
import { useSearchFieldStyles, useOptionsStyles } from "./SearchField.style";

export default function SearchField({ inputRef }) {
  const dispatch = useMunicipalitiesDispatch();
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const municipalities = useQuery(MUNICIPALITIES_SEARCH_QUERY, {
    variables: { name: inputValue },
    skip: inputValue.length < 2 ? true : false,
  });

  useEffect(() => {
    if (!municipalities.loading && !municipalities.error) {
      setOptions(municipalities?.data?.municipalitySearch || []);
    } else if (municipalities.error) {
      dispatch({
        type: SET_SNACKBAR_MESSAGE,
        text: "Nepodařilo se připojit k serveru. Zkuste to prosím později.",
        severity: "error",
      });
    }
  }, [
    municipalities.data,
    municipalities.loading,
    municipalities.error,
    inputValue,
    dispatch,
  ]);

  const searchFieldStyles = useSearchFieldStyles();
  const optionsStyles = useOptionsStyles();

  return (
    <Autocomplete
      id="municipalities-search"
      classes={searchFieldStyles}
      openOnFocus
      noOptionsText={"Žádné výsledky"}
      loadingText={"Načítám..."}
      clearText={"Vymazat"}
      open={autoCompleteOpen}
      onOpen={() => {
        setAutoCompleteOpen(true);
      }}
      onClose={() => {
        setAutoCompleteOpen(false);
      }}
      onChange={(event, newValue) => {
        if (newValue !== null) {
          dispatch({
            type: ADD_MUNICIPALITY,
            code: newValue.municipalityId,
            name: newValue.municipalityName,
          });
          window.gtag("event", "select_item", {
            items: [
              {
                item_id: newValue.municipalityCode,
                item_name: newValue.municipalityName,
              },
            ],
          });
          // Clears input if typed name is exactly the same as autocomplete item
          setInputValue("");
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        if (event?.type === "change") {
          setInputValue(newInputValue);
        } else {
          // Clears input if autocomplete item is selected on click or if enter key is pressed
          setInputValue("");
        }
      }}
      options={options}
      isOptionEqualToValue={(option, value) =>
        option.municipalityName === value.municipalityName
      }
      getOptionLabel={(option) => option.municipalityName}
      loading={municipalities.loading}
      clearOnBlur={false}
      autoHighlight={true}
      filterOptions={(options) => options}
      renderOption={(props, option) => (
        <li {...props} key={option.municipalityId}>
          <span>{option.municipalityName}</span>
          <span className={optionsStyles.districtText}>
            (okres {option.districtName})
          </span>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Začněte vyhledávat obec..."
          variant="outlined"
          inputRef={inputRef}
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon style={{ color: "#fff" }} />,
            endAdornment: (
              <>
                {municipalities.loading || municipalities.error ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
