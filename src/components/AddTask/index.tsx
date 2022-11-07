import { useState } from "react";

import { useTasksContext } from "@contexts/TasksContext";
import { Input } from "../Input";
import * as S from "./styles";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const { onCreateTask } = useTasksContext();

  const handleCreateNewTask = async () => {
    onCreateTask(task);
    setTask("");
  };

  return (
    <S.AddTaskContainer>
      <Input placeholder="Add a new task" value={task} onChangeText={setTask} />
      <S.AddTaskButton onPress={handleCreateNewTask}>
        <S.AddTaskIcon size={24} />
      </S.AddTaskButton>
    </S.AddTaskContainer>
  );
};
