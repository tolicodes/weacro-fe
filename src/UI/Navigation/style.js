import styled from 'styled-components';
import Icon from 'Common/Icon';

export const LeftArrow = Icon('chevron left', 'huge', 'pink');

export const RightArrow = Icon('chevron right', 'huge', 'pink');

export const ArrowButton = styled.a`
  height: 6vh;
  cursor: pointer;
  opacity: 0.3;
`;

export const Control = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 45vh;
  display: flex;
  justify-content: space-between;
`;
