import styled from "styled-components/native";

export const TasksInfoAmount = styled.Text`
  background-color: ${({ theme }) => theme.colors["gray-400"]};
  color: ${({ theme }) => theme.colors["gray-200"]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: 8px;
  padding: 4px 8px;
`;
