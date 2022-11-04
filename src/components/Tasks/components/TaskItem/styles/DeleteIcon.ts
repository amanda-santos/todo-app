import styled from "styled-components/native";
import { Trash } from "phosphor-react-native";

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors["gray-300"],
}))``;
