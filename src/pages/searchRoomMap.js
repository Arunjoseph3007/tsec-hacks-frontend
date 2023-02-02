import GoogleMapReact from "google-map-react";

export default function SearchRoomMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {typeof window !== "undefined" && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyApKjvP4mVHWhSm20u0wAjDwku-c4Hvwi4" }}
          defaultCenter={defaultProps.center}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      )}
    </div>
  );
}
