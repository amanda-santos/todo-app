import * as S from "./styles";

type TasksInfoProps = {
  amountOfCreatedTasks?: number;
  amountOfCompletedTasks?: number;
};

export const TasksInfo = ({
  amountOfCreatedTasks = 0,
  amountOfCompletedTasks = 0,
}: TasksInfoProps) => {
  return (
    <S.TasksInfoContainer>
      <S.TasksInfoItemContainer>
        <S.TasksInfoTitle type="primary">Created</S.TasksInfoTitle>
        <S.TasksInfoAmount>{amountOfCreatedTasks}</S.TasksInfoAmount>
      </S.TasksInfoItemContainer>

      <S.TasksInfoItemContainer>
        <S.TasksInfoTitle type="secondary">Done</S.TasksInfoTitle>
        <S.TasksInfoAmount>{amountOfCompletedTasks}</S.TasksInfoAmount>
      </S.TasksInfoItemContainer>
    </S.TasksInfoContainer>
  );
};
