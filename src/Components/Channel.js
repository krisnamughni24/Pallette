import React from "react";

const Channel = ({ value, handleValueChange }) => {

  const updateValue = (newValue) => {
    handleValueChange(newValue);
  };

  return (
    <div className="channel">
      <button
        type="button"
        className="btn up"
        onClick={ () => updateValue(value + 1)}
      >
      +
      </button>

      <input type="text" className="txt" value={value} onChange={ ({target}) => updateValue(target.value) } />


      <button
        type="button"
        className="btn down"
        onClick={ () => updateValue(value - 1)}
      >
      -
      </button>
    </div>
  );
};

export default Channel;

