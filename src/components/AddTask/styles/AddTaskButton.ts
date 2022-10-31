import styled from "styled-components/native";

export const AddTaskButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["secondary-base"]};

  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
