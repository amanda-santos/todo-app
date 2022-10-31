import { ReactElement } from "react";
import { Image } from "react-native";

import logoImg from "@assets/logo.png";
import { HeaderContainer } from "./styles";

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <Image source={logoImg} />
    </HeaderContainer>
  );
};
