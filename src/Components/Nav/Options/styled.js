import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Orange } from '../../UI/DeviceRules';

export const UserIcon = styled(Icon).attrs({
  name: 'bars',
  size: 'big',
})`
    margin: 0 0.5vw;
    ${props=>props.isUser && `color: ${Orange}`}
  `;
