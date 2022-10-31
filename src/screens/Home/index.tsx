import { ReactElement } from "react";

import { AddTask, Header } from "@components/index";
import * as S from "./styles";

export const Home = (): ReactElement => {
  return (
    <>
      <Header />

      <S.HomeContainer>
        <AddTask />
      </S.HomeContainer>
    </>
  );
};
