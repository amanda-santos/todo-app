import styled, { css } from "styled-components/native";

export const InputContainer = styled.TextInput`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    color: ${theme.colors["gray-100"]};
    background-color: ${theme.colors["gray-500"]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.lg}px;
  `};

  border-radius: 6px;
  padding: 16px;
`;
