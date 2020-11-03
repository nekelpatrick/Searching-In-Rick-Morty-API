import React from "react";
import "./styles.css";

const FilterInput = (props) => {
  return (
    <form className="filter-input">
      <input type="text" onChange={props.inputHandler} />
    </form>
  );
};

export default FilterInput;
