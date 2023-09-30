import styled from 'styled-components';

export const THead = styled.thead`
  background-color: ${p => p.theme.colors.backgroundColor};
`;

export const TableHeadTitle = styled.th`
  width: 100px;
	padding: 14px;

  color: ${(p) => p.theme.colors.textColor};
  font-size: 16px;
  font-weight: 600;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #eee;
  }
`;

export const TableData = styled.td`
  padding: 10px 18px;
  font-size: 14px;
`;