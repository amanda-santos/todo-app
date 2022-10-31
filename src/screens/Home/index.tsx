import { ReactElement } from "react";

import { Header } from "@components/index";
import { Container } from "./styles";

export const Home = (): ReactElement => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
