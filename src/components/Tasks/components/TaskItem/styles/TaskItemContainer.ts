import styled from "styled-components/native";

export const TaskItemContainer = styled.View`
  background-color: ${({ theme }) => theme.colors["gray-500"]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors["gray-400"]};

  width: 100%;
  height: 64px;
  padding: 8px 16px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
