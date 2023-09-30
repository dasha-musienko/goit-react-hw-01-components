import styled from 'styled-components';


export const FriendCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  width: 200px;
  cursor: pointer;
  padding: 10px;
  border-radius: ${(p) => p.theme.border.borderRadius};
  background-color: ${(p) => p.theme.colors.backgroundColor};
`;

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${p => p.color}
`;
