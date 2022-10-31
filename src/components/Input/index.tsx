import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type InputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>;
};

export const Input = ({ inputRef, ...rest }: InputProps) => {
  const { colors } = useTheme();

  return (
    <S.InputContainer
      ref={inputRef}
      placeholderTextColor={colors["gray-300"]}
      {...rest}
    />
  );
};
