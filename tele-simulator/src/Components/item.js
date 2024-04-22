import React from 'react';
import styled from 'styled-components';

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

const Item = ({ children }) => {
  return (
    <ItemContainer>
      {children}
    </ItemContainer>
  );
};

export default Item;