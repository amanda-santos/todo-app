import * as S from "./styles";

import { Text } from "@components/Text";
import emptyStateImg from "@assets/empty-state.png";

export const EmptyState = () => {
  return (
    <S.EmptyStateContainer>
      <S.EmptyStateImage source={emptyStateImg} />
      <Text color="gray-300" weight="bold">
        You don't have any tasks registered yet.
      </Text>
      <Text color="gray-300">Create tasks and organize your to-do items</Text>
    </S.EmptyStateContainer>
  );
};
