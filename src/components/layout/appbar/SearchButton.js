import { React } from "react";
import { Link as RouterLink } from "react-router-dom";
import { route } from "../../../Routes";
import { Button } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchButton({ text }) {
  return (
    <Button
      startIcon={<SearchIcon />}
      variant="contained"
      color="secondary"
      disableElevation={true}
      component={RouterLink}
      to={{ pathname: route.home(), state: { searchAutoFocus: true } }}
    >
      {text ? text : "Hledat obec"}
    </Button>
  );
}
