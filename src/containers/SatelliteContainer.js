import { useEffect, useState } from "react";

const SatelliteContainer = () => {
  const [satellites, setSatellites] = useState([]);
  const [satellitesById, setSatellitesById] = useState({});
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSatellites = async () => {
    try {
      const response = await fetch("https://api.wheretheiss.at/v1/satellites");
      const data = await response.json();

      setSatellites(data);
      setLoading(false);
    } catch (error) {
      console.error("Network error occurred", error);
      setLoading(false);
    }
  };

  const fetchSatellitesById = async (id) => {
    try {
      const response = await fetch(
        `https://api.wheretheiss.at/v1/satellites/${id}`
      );
      const data = await response.json();

      // for some reason, setSatellitesById(data) just returns just the placeholders in the return function and no values; had to use the below
      setSatellitesById((prevSatellitesById) => ({
        ...prevSatellitesById,
        [id]: data,
      }));
    } catch (error) {
      console.error("Network error occurred", error);
    }
  };

  const fetchPositionData = async (id, timestamps) => {
    try {
      const response = await fetch(
        `https://api.wheretheiss.at/v1/satellites/${id}/positions?timestamps=${timestamps.join(
          ","
        )}&units=miles`
      );
      const data = await response.json();

      setPositions(data);
    } catch (error) {
      console.error("Network error occurred", error);
    }
  };

  useEffect(() => {
    fetchSatellites();
  }, []);

  useEffect(() => {
    // Define the satellite ID(s) you want to fetch
    const satelliteIds = [25544]; // Replace with desired satellite IDs

    // Fetch data for each satellite by ID
    satelliteIds.forEach((id) => {
      fetchSatellitesById(id);
    });

    // Fetch position data for a specific satellite and timestamps
    const specificSatelliteId = 25544; // Replace with the desired satellite ID
    const specificTimestamps = [1436029893, 1436029907]; // Replace with the desired timestamps
    fetchPositionData(specificSatelliteId, specificTimestamps);
  }, []);

  return (
    <>
      <h1>Satellite Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {satellites.map((satellite) => (
            <li key={satellite.id}>
              Name: {satellite.name}, ID: {satellite.id}
            </li>
          ))}
        </ul>
      )}

      <h1>Satellite by ID</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.keys(satellitesById).map((id) => (
            <li key={id}>
              ID: {satellitesById[id].id}
              <br />
              Name: {satellitesById[id].name}
              <br />
              Latitude: {satellitesById[id].latitude}
              <br />
              Longitude: {satellitesById[id].longitude}
              <br />
              Altitude: {satellitesById[id].altitude}
              <br />
              Velocity: {satellitesById[id].velocity}
              <br />
              Visibility: {satellitesById[id].visibility}
              <br />
              Footprint: {satellitesById[id].footprint}
              <br />
              Solar Latitude: {satellitesById[id].solar_lat}
              <br />
              Solar Longitude: {satellitesById[id].solar_lon}
              <br />
              Units: {satellitesById[id].units}
              <br />
            </li>
          ))}
        </ul>
      )}

      <h1>Position Data</h1>
      <ul>
        {positions.map((position, index) => (
          <li key={index}>
            Timestamp: {position.timestamp}
            <br />
            Latitude: {position.latitude}
            <br />
            Longitude: {position.longitude}
            <br />
            Solar Latitude: {position.solar_lat}
            <br />
            Solar Longitude:: {position.solar_lon}
            <br />
            Units: {position.units}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SatelliteContainer;
