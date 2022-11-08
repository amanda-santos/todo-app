import { useRef, useState } from "react";

import { useTasksContext } from "@contexts/TasksContext";
import { Input } from "../Input";
import * as S from "./styles";
import { TextInput } from "react-native";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const { onCreateTask } = useTasksContext();

  const newTaskInputRef = useRef<TextInput>(null);

  const handleCreateNewTask = async () => {
    onCreateTask(task);

    newTaskInputRef.current?.blur();

    setTask("");
  };

  return (
    <S.AddTaskContainer>
      <Input
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
        inputRef={newTaskInputRef}
        onSubmitEditing={handleCreateNewTask}
      />
      <S.AddTaskButton onPress={handleCreateNewTask}>
        <S.AddTaskIcon size={24} />
      </S.AddTaskButton>
    </S.AddTaskContainer>
  );
};
