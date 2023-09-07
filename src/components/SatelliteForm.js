import React, { useState } from "react";

const SatelliteForm = ({ satellites, onFormSubmit }) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const selectedSatelliteId = event.target.satellite.value;
      onFormSubmit(selectedSatelliteId);
    };
  
    const satelliteOptions = satellites.map((satellite) => (
      <option key={satellite.id} value={satellite.id}>
        {satellite.name}
      </option>
    ));
  
    return (
      <form onSubmit={handleFormSubmit}>
        <h3>Choose a satellite!</h3>
        <label htmlFor="satellite">Satellite</label>
        <select id="satellite" name="satellite">
          <option value="select-satellite" disabled>
            Select a satellite
          </option>
          {satelliteOptions}
        </select>
        <input type="submit" value="Add Satellite" />
      </form>
    );
  };
  
  export default SatelliteForm;
  
  