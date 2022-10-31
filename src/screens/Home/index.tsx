import { ReactElement } from "react";

import { Header } from "@components/index";
import { HomeContainer } from "./styles";

export const Home = (): ReactElement => {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
};
