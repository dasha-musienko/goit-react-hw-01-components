import styled from 'styled-components';

export const StatiscticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 14px;
  width: 80px;

  border-radius: ${(p) => p.theme.border.borderRadius };
  background-color: ${(p) => p.theme.randomColor()};
`;