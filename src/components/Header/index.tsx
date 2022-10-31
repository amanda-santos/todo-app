import { ReactElement } from "react";
import { Image } from "react-native";

import logoImg from "@assets/logo.png";
import * as S from "./styles";

export const Header = (): ReactElement => {
  return (
    <S.HeaderContainer>
      <Image source={logoImg} />
    </S.HeaderContainer>
  );
};
