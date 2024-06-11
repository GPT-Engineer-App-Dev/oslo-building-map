import { Box, Text } from "@chakra-ui/react";

const BuildingInfoCard = ({ building }) => {
  if (!building) return null;

  return (
    <Box
      position="absolute"
      top="10px"
      left="10px"
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      zIndex={1000}
    >
      <Text fontSize="lg" fontWeight="bold">
        Building {building.id}
      </Text>
      <Text>Temperature: {building.sensorData.temperature}°C</Text>
      <Text>Humidity: {building.sensorData.humidity}%</Text>
      <Text>CO2 Levels: {building.sensorData.co2} ppm</Text>
    </Box>
  );
};

export default BuildingInfoCard;