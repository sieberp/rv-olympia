import React from "react";
import styled from "styled-components";
import DynamicComponent from "../components/DynamicComponent";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Grid = ({ blok }) => {
  return (
    <GridStyles>
      {blok.columns.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </GridStyles>
  );
};

export default Grid;
