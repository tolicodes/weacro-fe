import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import Icon from 'Common/Icon';

export const MenuItem = styled(Menu.Item)`
    cursor: default;
`;

export const TagsIcon = Icon('tags', 'big', 'black', { opacity: '0.2' });
