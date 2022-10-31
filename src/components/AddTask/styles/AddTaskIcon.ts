import styled from "styled-components/native";
import { PlusCircle } from "phosphor-react-native";

export const AddTaskIcon = styled(PlusCircle).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors["gray-100"],
}))``;
