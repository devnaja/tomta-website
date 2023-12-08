import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  // height: '100vh',
};

const Maps = () => {
  const YOUR_API_KEY = "AIzaSyCQHhWtgCKf1He4veUPNfiFcp4gszNijIg";
  const coords = { lat: 3.1371933537985446, lng: 101.6224789688114 };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: YOUR_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="flex z-0">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={coords}
      >
        <Marker position={coords} />
      </GoogleMap>
    </div>
  );

  // const { isLoaded } = useJsApiLoader({
  //   id: 'tomta-website',
  //   googleMapsApiKey: {YOUR_API_KEY}
  // })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  // return isLoaded ? (
  //     <GoogleMap
  //       mapContainerStyle={containerStyle}
  //       center={center}
  //       zoom={10}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >
  //       <></>
  //     </GoogleMap>
  // ) : <></>
};

export default Maps;
