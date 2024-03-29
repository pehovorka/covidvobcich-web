import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";

import { numberToString } from "../../utils/general";
import { getMunicipality } from "./utils/filterMunicipality";
import { getColor } from "./utils/mapColors";

function TopoJSON(props) {
  const layerRef = useRef();
  const { data, ...otherProps } = props;

  function addData(layer, jsonData) {
    if (jsonData.type === "Topology") {
      for (let key in jsonData.objects) {
        let geojson = topojson.feature(jsonData, jsonData.objects[key]);
        layer.addData(geojson);
      }
    } else {
      layer.addData(jsonData);
    }
  }

  function onEachFeature(feature, layer) {
    const { id } = feature;
    const municipalityProps = getMunicipality(
      id,
      props.municipalityCasesOverview
    );
    feature.properties = {
      ...municipalityProps,
      color: getColor(municipalityProps.rc),
    };
    layer.options.fillColor = feature.properties.color;
    layer.bindPopup(
      `<h3>${feature.properties.mn}</h3>
      <ul style="padding-left: 0; list-style: none">
      <li>
        Aktivní případy na 1000 obyvatel: ${
          feature.properties.rc !== null
            ? numberToString(feature.properties.rc, 1)
            : "není k dispozici"
        }</li>
      <li>
        Aktivní případy:  ${numberToString(feature.properties.ac, 1)}
      </li>
      </ul>
      <i>Data aktuální k ${new Date(feature.properties.d).toLocaleDateString(
        "cs-CZ"
      )}</i>
      `
    );
  }

  useEffect(() => {
    const layer = layerRef.current;
    addData(layer, props.data);
  }, [props.data]);

  const style = (feature) => {
    return {
      color: "#fff",
      weight: 1,
      opacity: 0.2,
      fillOpacity: 0.8,
    };
  };

  return (
    <GeoJSON
      ref={layerRef}
      {...otherProps}
      style={style}
      onEachFeature={onEachFeature}
    />
  );
}

TopoJSON.propTypes = { props: PropTypes.object };

export default TopoJSON;
