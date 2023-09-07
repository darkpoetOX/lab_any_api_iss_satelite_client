import { useEffect, useState } from "react";
import SatelliteForm from "../components/SatelliteForm";
import SatelliteList from "../components/SatelliteList";

const SatelliteContainer = () => {

    const [satellites, setSatellites] = useState([]);

    useEffect(() => {                  
        const fetchSatellites = async () => {
            const response = await fetch("https://api.wheretheiss.at/v1/satellites");
            const data = await response.json();
            setSatellites(data);
        }
        fetchSatellites();
    }, [])
    
    return (
        <>
            <h1>ISS Satellite Tracker</h1>
            <p>a resource for tracking satellites</p>
            <SatelliteForm satellites={satellites}/>
            <SatelliteList satellites={satellites}/>
        </>
    );
 }

 export default SatelliteContainer;