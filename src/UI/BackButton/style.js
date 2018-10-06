
import styled from 'styled-components';
import Icon from 'Common/Icon';

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const ReplyIcon = styled(Icon('reply', 'big', 'red'))`
  cursor: pointer;
  color: ${({ theme }) => theme.red}
`;
