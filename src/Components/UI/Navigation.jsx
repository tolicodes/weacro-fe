import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';


const Navigation = ({ next, prev, skip }) => {
  if (skip) {
    return null;
  }
  return (
    <Control>
      <ArrowButton onClick={prev}>
        <Icon
          name="chevron left"
          color="pink"
          size="huge"
        />
      </ArrowButton>
      <ArrowButton onClick={next}>
        <Icon
          name="chevron right"
          color="pink"
          size="huge"
        />
      </ArrowButton>
    </Control>
  );
};

export default Navigation;

const ArrowButton = styled.a`
  height: 6vh;
  cursor: pointer;
  opacity: 0.3;
`;
const Control = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 45vh;
  display: flex;
  justify-content: space-between;
`;
