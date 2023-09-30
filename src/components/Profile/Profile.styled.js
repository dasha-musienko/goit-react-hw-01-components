import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 60px 0;
`;
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;

  background-color: ${(p) => p.theme.colors.primaryColor};
  border-radius: 50%; 
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 14px;
  width: 80px;

  border-radius: ${(p) => p.theme.border.borderRadius };
  background-color: ${(p) => p.theme.colors.backgroundColor};
`;