import { Icon, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

export const MenuItem = styled(Menu.Item)`
    cursor: default;
`;

export const TagsIcon = styled(Icon).attrs({
  name: 'tags',
  size: 'big',
  style: { opacity: '0.2' },
})``;
