import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: fit-content;

  padding: 10px;

  background-color: transparent; 
  border: ${(p) => p.theme.border.borderValue };
  border-radius: ${(p) => p.theme.border.borderRadius };
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const PrimaryTitle = styled.h2`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 18px;
  font-weight: 600;
`;

export const SecondaryTitle = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 16px;
  font-weight: 400;
`;

export const CommonText = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 14px;
  font-weight: 500;
`;

export const CommonBoldText = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 14px;
  font-weight: 600;
`;

export const SecondaryText = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 12px;
  font-weight: 400;
`;
