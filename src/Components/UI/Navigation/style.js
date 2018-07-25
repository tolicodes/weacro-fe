import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const LeftArrow = styled(Icon).attrs({
  name:"chevron left",
  color: "pink",
  size: "huge"
})``;
export const RightArrow = styled(Icon).attrs({
  name:"chevron right",
  color: "pink",
  size: "huge"
})``;
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
