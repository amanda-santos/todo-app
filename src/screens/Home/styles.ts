import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["gray-600"]};
`;
