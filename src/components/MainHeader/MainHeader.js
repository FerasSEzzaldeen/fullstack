import React from "react";
import styled from "styled-components";

const MyHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00ABB3;
  padding: 0 2rem;
  border-bottom: 3px solid #3C4048;

`;

const Title =styled.h1`
  color: #3C4048;
`;

const MainHeader = (props) => {
  return (
    <MyHeader>
      <Title>Policies</Title>
    </MyHeader>
  );
};

export default MainHeader;
