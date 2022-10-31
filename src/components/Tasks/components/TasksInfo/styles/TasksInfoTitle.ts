import styled from "styled-components/native";

type TasksInfoTitleProps = {
  type: "primary" | "secondary";
};

export const TasksInfoTitle = styled.Text<TasksInfoTitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme, type }) =>
    type === "primary"
      ? theme.colors["primary-base"]
      : theme.colors["secondary-base"]};

  margin-right: 4px;
`;
