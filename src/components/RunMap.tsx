import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet";
import type { LatLng } from "../types/run";

function FitRoute({ route }: { route: LatLng[] }) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 1) {
      map.fitBounds(L.latLngBounds(route), { padding: [24, 24], animate: true });
    }
  }, [map, route]);

  return null;
}

export function RunMap({ route }: { route: LatLng[] }) {
  const center = route[0] ?? [55.1599, 61.4026];

  return (
    <div className="h-[320px] overflow-hidden rounded-2xl bg-wind-black shadow-premium">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={route} pathOptions={{ color: "#B7FF00", weight: 6, opacity: 0.95, lineCap: "round" }} />
        <FitRoute route={route} />
      </MapContainer>
    </div>
  );
}
