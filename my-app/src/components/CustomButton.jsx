import React from "react";

export const CustomButton = ({ name }) => {
  const handleClick = () => {
    console.log(`${name}'s button was clicked`);
  };
  return <button onClick={handleClick}>My Button</button>;
};
