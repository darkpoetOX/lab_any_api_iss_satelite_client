const SatelliteForm = () => {

    const [stateSatellite, setStateSatellite] = useState(   
        {
            name: "",
            latitude: 0,
            longitude: 0,
            altitude: 0,
            visibility: "",
            footprint: 0,
            timestamp: 0,
            solar_lat: 0,
            solar_lon: 0,
        }
    )

    const handleChange = (event) => {      
        let propertyName = event.target.name;
        let copiedSatellite = {...stateSatellite};
        copiedSatellite[propertyName] = event.target.value;
        setStateSatellite(copiedSatellite)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const satelliteOptions = satellites.map((satellite) => {
        return <option key={satellite.id} value={satellite.id}> {satellite.name} </option>
    })

    return (
        <form onSubmit={handleFormSubmit}>
            <h3>Choose a satellite!</h3>
            
            <label htmlFor="satellite">Satellite</label>
            <select 
                id="satellite" 
                name="id"
                defaultValue="select-satellite"
                onChange={handleChange}
            >
                <option disabled-value="select-satellite">Select a satellite</option>
                {satelliteOptions}
            </select>
            
            <input type="submit" value="Add Satellite"/>    
        </form>
    );

}

export default SatelliteForm;