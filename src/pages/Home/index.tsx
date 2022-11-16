import React from "react";

import { ListProducts } from "./ListProducts";
import { HighlightSection } from "./HighlightSection";
import { Header } from "../../components/Header";

import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.HomeContainer>
      <HighlightSection />

      <ListProducts />
    </S.HomeContainer>
  );
};
