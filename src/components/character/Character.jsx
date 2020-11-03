import React from "react";
import "./styles.css";

const Character = ({ name, image, species, status }) => {
  return (
    <div className="Character">
      <img src={image} alt="" />
      <div>Name: {name}</div>
      <div>Species: {species}</div>
      <div>Status: {status}</div>
    </div>
  );
};

export default Character;
