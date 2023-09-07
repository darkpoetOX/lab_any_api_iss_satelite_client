import Satellite from "./Satellite";


const SatelliteList = ({ satellites }) => {

    const satelliteComponents = satellites.map(satellite => {  
        return <Satellite 
                key={satellite.id} 
                satellite={satellite} />
    })


    return (
        <>
            <h3>List of Satellites</h3>
            <hr />
            {satelliteComponents}
        </>
    );
}

export default SatelliteList;