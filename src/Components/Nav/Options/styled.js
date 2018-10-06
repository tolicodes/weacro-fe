import styled from 'styled-components';
import Icon from 'Common/Icon';
import { Orange } from 'UI/DeviceRules';

export const UserIcon = styled(Icon('bars'))`
    margin: 0 0.5vw;
    ${props => props.isUser && `color: ${Orange}`}
  `;
