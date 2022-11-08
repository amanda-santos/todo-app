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
  const [isChecked, setChecked] = useState(task.isCompleted);
  const { colors } = useTheme();
  const { onRemoveTask } = useTasksContext();

  const handleRemoveTask = () => {
    onRemoveTask(task.uuid);
  };

  return (
    <S.TaskItemContainer>
      <S.TaskCheckboxAndText
        onPress={() => setChecked((prevState) => !prevState)}
      >
        <S.TaskItemCheckbox
          color={colors["primary-base"]}
          value={isChecked}
          onValueChange={setChecked}
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
