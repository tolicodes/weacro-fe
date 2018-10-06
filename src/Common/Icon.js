import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledIcon = (name, size = 'big', color = 'black', style) => styled(Icon).attrs({
  name,
  size,
  style,
  color: ({ theme }) => theme[color] || color,
})`
  font-size: ${({ theme }) => theme.iconSize};
  color: black;
`;

StyledIcon.defaultProps = {
  name: '',
  size: 'big',
  color: 'black',
  style: null,
};


export default StyledIcon;
