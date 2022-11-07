import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";

import * as S from "./styles";

type TaskItemProps = {
  description: string;
  isCompleted: boolean;
};

export const TaskItem = ({ description, isCompleted }: TaskItemProps) => {
  const [isChecked, setChecked] = useState(isCompleted);
  const { colors } = useTheme();

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
          {description}
        </Text>
      </S.TaskCheckboxAndText>
      <TouchableOpacity>
        <S.DeleteIcon />
      </TouchableOpacity>
    </S.TaskItemContainer>
  );
};
