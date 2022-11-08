import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import { Task } from "src/types";
import { Text } from "@components/Text";
import { useTasksContext } from "@contexts/TasksContext";

import * as S from "./styles";

type TaskItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const [isChecked, setIsChecked] = useState(task.isCompleted);
  const { colors } = useTheme();
  const { onRemoveTask, onUpdateTask } = useTasksContext();

  const handleRemoveTask = () => {
    onRemoveTask(task.uuid);
  };

  const handleUpdateTask = () => {
    onUpdateTask(task.uuid);
    setIsChecked((prevState) => !prevState);
  };

  return (
    <S.TaskItemContainer>
      <S.TaskCheckboxAndText onPress={handleUpdateTask}>
        <S.TaskItemCheckbox
          color={colors["primary-base"]}
          value={isChecked}
          onValueChange={handleUpdateTask}
        />

        <Text
          {...(isChecked && {
            color: "gray-300",
            customStyles: "text-decoration: line-through",
          })}
        >
          {task.description}
        </Text>
      </S.TaskCheckboxAndText>
      <TouchableOpacity onPress={handleRemoveTask}>
        <S.DeleteIcon />
      </TouchableOpacity>
    </S.TaskItemContainer>
  );
};
