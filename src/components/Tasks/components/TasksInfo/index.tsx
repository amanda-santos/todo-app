import * as S from "./styles";

export const TasksInfo = () => {
  return (
    <S.TasksInfoContainer>
      <S.TasksInfoItemContainer>
        <S.TasksInfoTitle type="primary">Created</S.TasksInfoTitle>
        <S.TasksInfoAmount>0</S.TasksInfoAmount>
      </S.TasksInfoItemContainer>

      <S.TasksInfoItemContainer>
        <S.TasksInfoTitle type="secondary">Done</S.TasksInfoTitle>
        <S.TasksInfoAmount>0</S.TasksInfoAmount>
      </S.TasksInfoItemContainer>
    </S.TasksInfoContainer>
  );
};
