import React from 'react';
import styled from 'styled-components';
//the styling for each item in the carousel
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px; 
  height: 250px; 
  background-color: #00008B;
  color: #fff;
  margin: 0 15px;
  font-size: 2em; /* Decrease font size */
`;

const Item = ({ children }) => { //"children" wrapped in an item container that encapsulates the style, so the styling remains consistent for every item
  return (
    <ItemContainer>
      {children}
    </ItemContainer>
  );
};

export default Item;