import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import L from "leaflet";
import BuildingInfoCard from "../components/BuildingInfoCard";

const buildings = Array.from({ length: 10 }, (_, id) => ({
  id: id + 1,
  position: [
    59.91 + Math.random() * 0.1 - 0.05,
    10.75 + Math.random() * 0.1 - 0.05,
  ],
  sensorData: {
    temperature: (20 + Math.random() * 5).toFixed(1),
    humidity: (30 + Math.random() * 20).toFixed(1),
    co2: (400 + Math.random() * 100).toFixed(1),
  },
}));

const pinIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.91, 10.75]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            icon={pinIcon}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>
              <span>Building {building.id}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Box>
  );
};

export default Index;