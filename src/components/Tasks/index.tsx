import { EmptyState, TasksInfo } from "./components";
import * as S from "./styles";

export const Tasks = () => {
  return (
    <S.TasksContainer>
      <TasksInfo />

      <EmptyState />
    </S.TasksContainer>
  );
};
