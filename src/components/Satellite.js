const Satellite = ( { satellite }) => {

    return (
        <>      
            <h4>{satellite.name}</h4>
            <p>latitude: {satellite.latitude} degrees</p>
            <p>longitude: {satellite.longitude} degrees</p>
            <p>altitude: {satellite.altitude} miles</p>
            <p>visibility: {satellite.visibility}</p>
            <p>footprint: {satellite.footprint} miles</p>
            <p>timestamp: {satellite.timestamp} seconds</p>
            <p>solar latitude: {satellite.solar_lat} degrees</p>
            <p>solar longitude: {satellite.solar_lon} degrees</p>
            <button> Show Position </button>
            <hr />
        </>
    );
}

export default Satellite;