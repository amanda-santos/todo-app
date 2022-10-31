import { ReactElement } from "react";

import { AddTask, Header, Tasks } from "@components/index";
import * as S from "./styles";

export const Home = (): ReactElement => {
  return (
    <>
      <Header />

      <S.HomeContainer>
        <AddTask />

        <Tasks />
      </S.HomeContainer>
    </>
  );
};
