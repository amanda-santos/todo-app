import { Input } from "@components/index";
import * as S from "./styles";

export const AddTask = () => {
  return (
    <S.AddTaskContainer>
      <Input placeholder="Add a new task" />
      <S.AddTaskButton>
        <S.AddTaskIcon size={24} />
      </S.AddTaskButton>
    </S.AddTaskContainer>
  );
};
