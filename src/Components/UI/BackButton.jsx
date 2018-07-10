import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';


export default () => (
  <BackButton>
    <StyledIcon
      name="reply"
      size="huge"
      onClick={() => window.history.back()}
    />
  </BackButton>
);

const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const StyledIcon = styled(Icon).attrs({
  style: { fontSize: '3.3rem' },
})`
  cursor: pointer;
  font-size: 3.3rem;
  color: rgb(255, 114, 87);
`;
