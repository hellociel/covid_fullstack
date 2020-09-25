import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Bubble, MapWrapper } from "../styledComponents/AppStyle.jsx";

const Map = (props) => {
  //   let latitudeData = props.data.latitude || 35.9078;
  //   let longitudeData = props.data.longitude || 127.767;
  console.log("LINE 8", props.data);
  let currLatitude = props.data.latitude || 14.0583;
  let currLongitude = props.data.longitude || 108.277;

  const [viewport, setViewport] = useState({
    latitude: 35.9078,
    longitude: 127.767,
    width: 1400,
    height: 450,
    zoom: 3,
  });
  //   console.log("MAP DATA", viewport);
  if (viewport.latitude !== props.data.latitude) {
    // let latitudeData;
    // let longitudeData;

    // if (typeof props.data.longitude === Number) {
    //   longitudeData = props.data.longitude;
    // }
    // if (typeof props.data.latitude === Number) {
    //   latitudeData = props.data.latitude;
    // }

    setViewport({
      latitude: props.data.latitude,
      longitude: props.data.longitude,
      width: 1430,
      height: 400,
      zoom: 4,
    });
    console.log("CHANGED!", viewport.latitude, props.data.latitude);
  }

  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1Ijoic3dlY2llbCIsImEiOiJja2ZocDl4OG0wMWw3MnVuenZ5MHZ4eWpjIn0.nQbz2bgGwEi-FSPr_XCG7w";
  return (
    <div>
      <MapWrapper>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          <Marker
            latitude={currLatitude}
            longitude={currLongitude}
            offsetLeft={40}
            offsetTop={-120}
          >
            <Bubble>
              <div>{props.data.name}</div>
              <div>{props.data.totalcases}</div>
            </Bubble>
          </Marker>
        </ReactMapGL>
      </MapWrapper>
    </div>
  );
};

export default Map;
