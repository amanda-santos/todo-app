import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 72px 128px;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
`;
