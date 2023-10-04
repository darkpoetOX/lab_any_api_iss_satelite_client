// import React from "react";
// import Satellite from "./Satellite";

// const SatelliteList = ({
//   satellites,
//   onShowPositionClick,
//   selectedSatelliteId,
//   satellitePositions,
// }) => {
//   const satelliteComponents = satellites.map((satellite) => (
//     <Satellite
//       key={satellite.id}
//       satellite={satellite}
//       onShowPositionClick={onShowPositionClick}
//     />
//   ));

//   return (
//     <>
//       <h3>List of Satellites</h3>
//       <hr />
//       {satelliteComponents}
//       {selectedSatelliteId && (
//         <button onClick={() => onShowPositionClick(selectedSatelliteId)}>
//           Show Position for Selected Satellite
//         </button>
//       )}
//     </>
//   );
// };

// export default SatelliteList;
