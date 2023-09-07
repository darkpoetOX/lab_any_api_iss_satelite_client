import { useEffect, useState } from "react";
import SatelliteForm from "../components/SatelliteForm";
import SatelliteList from "../components/SatelliteList";

const SatelliteContainer = () => {
    const [satellites, setSatellites] = useState([]);
    const [selectedSatellite, setSelectedSatellite] = useState('');
    const [satellitePositions, setSatellitePositions] = useState({});
    const [timestamps, setTimestamps] = useState([]);
    const [units, setUnits] = useState('');
  
    const fetchSatellites = async () => {
      const response = await fetch("https://api.wheretheiss.at/v1/satellites");
      const data = await response.json();
      setSatellites(data);
    };
  
    const fetchSelectedSatellite = async (satelliteId) => {
      const response = await fetch("https://api.wheretheiss.at/v1/satellites/" + satelliteId);
      const data = await response.json();
      setSelectedSatellite(data);
    };
  
    const fetchSatellitePositions = async (satelliteId, timestamps, units) => {
        if (timestamps && timestamps.length > 0 && units) {
          const timestampString = timestamps.join(",");
          const response = await fetch(`https://api.wheretheiss.at/v1/satellites/${satelliteId}/positions?timestamps=${timestampString}&units=${units}`);
          const data = await response.json();
          setSatellitePositions(data);
        } else {
          console.error("Timestamps or units are empty.");
        }
    };

    const onShowPositionClick = async (satelliteId) => {
      if (timestamps.length > 0 && units) {
        await fetchSatellitePositions(satelliteId, timestamps, units);
      } else {
        console.error("Timestamps or units are empty.");
      }
    };
  
    useEffect(() => {                  
      fetchSatellites();
      fetchSelectedSatellite();
      fetchSatellitePositions();
    }, []);
  
    const handleSatelliteFormSubmit = (selectedSatelliteId) => {
      setSelectedSatellite(selectedSatelliteId);
    };
  
    return (
      <>
        <h1>ISS Satellite Tracker</h1>
        <p>A resource for tracking satellites</p>
        <SatelliteForm satellites={satellites} onFormSubmit={handleSatelliteFormSubmit} />
        {satellites ? (
          <SatelliteList 
            satellites={satellites} 
            selectedSatellite={selectedSatellite}
            satellitePositions={satellitePositions}
            onShowPositionClick={onShowPositionClick}
          />
        ) : (
          <p>Loading satellite positions...</p>
        )}
      </>
    );
  };
  
  export default SatelliteContainer;