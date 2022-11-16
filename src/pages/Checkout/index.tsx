import React from "react";
import { useNavigate } from "react-router-dom";

import { CheckoutForm } from "./CheckoutForm";
import { ListProducts } from "./ListProducts";

import { CheckoutContainer } from "./styles";

export const Checkout: React.FC = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm />

      <ListProducts />
    </CheckoutContainer>
  );
};
