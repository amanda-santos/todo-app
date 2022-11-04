import { ReactNode } from "react";

import * as S from "./styles";

type TextProps = S.TextProps & {
  children: ReactNode;
};

export const Text = ({ children, ...rest }: TextProps) => {
  return <S.Text {...rest}>{children}</S.Text>;
};
