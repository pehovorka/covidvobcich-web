import { gql } from "@apollo/client";

export const OBEC_NAZEV_QUERY = gql`
  query Obec($obec_kod: String!, $limit: Int!) {
    obec(obec_kod: $obec_kod, limit: $limit) {
      obec_nazev
    }
  }
`;

export const OBEC_DETAIL_QUERY = gql`
  query Obec($obec_kod: String!, $limit: Int!) {
    obec(obec_kod: $obec_kod, limit: $limit) {
      datum
      aktualne_nemocnych
      nove_pripady
      nove_pripady_65
    }
  }
`;

export const isValidMunicipalityCode = (code) => {
  if (code.length !== 6) {
    return false;
  }
  code = parseInt(code);
  if (Number.isInteger(code)) {
    return true;
  }
  return false;
};

export const convertToGraphData = (stringData, limit) => {
  const graphData = stringData.map((item, index) => {
    const container = {};
    //container.date = new Date(item.datum).toLocaleDateString("cs-CZ", {});
    container.date = item.datum;
    container.activeCases = item.aktualne_nemocnych;
    container.newCases = item.nove_pripady;
    container.newCasesOver65 = item.nove_pripady_65;
    container.newCasesUnder65 = item.nove_pripady - item.nove_pripady_65;

    const newCasesAverage =
      (stringData[index - 3]?.nove_pripady +
        stringData[index - 2]?.nove_pripady +
        stringData[index - 1]?.nove_pripady +
        item.nove_pripady +
        stringData[index + 1]?.nove_pripady +
        stringData[index + 2]?.nove_pripady +
        stringData[index + 3]?.nove_pripady) /
      7;
    container.newCasesAverage = !isNaN(newCasesAverage)
      ? newCasesAverage.toFixed(1)
      : null;
    return container;
  });
  graphData.reverse();
  return graphData.slice(-limit);
};

export const formatNumberToDisplay = (number) => {
  let result = parseInt(number).toLocaleString("cs-CZ");
  return result;
};

export const formatChangeNumberToDisplay = (number) => {
  let result =
    (number > 0 ? "+ " : number === 0 ? "" : "- ") +
    Math.abs(number).toLocaleString("cs-CZ");
  return result;
};

export const isAlreadyAdded = ({ municipalityCodeToCheck, municipalities }) => {
  if (municipalities.some((e) => e.code === municipalityCodeToCheck)) {
    return true;
  }
  return false;
};
