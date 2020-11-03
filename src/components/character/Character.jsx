import React from "react";

const Character = ({ name, image, species, status }) => {
  return (
    <div style={{ border: "solid 1px yellow" }}>
      <img src={image} alt="" />
      <div>Name: {name}</div>
      <div>Species: {species}</div>
      <div>Status: {status}</div>
    </div>
  );
};

export default Character;
