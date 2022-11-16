import React, { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext";

import { ProductCard } from "../../../components/ProductCard";

import { parsePrice } from "../../../utils/parsePrice";

import {
  CheckoutConfirmButton,
  CheckoutListProducts,
  CheckoutListProductsFooter,
  CheckoutListProductsFooterItem,
  CheckoutListProductsSection,
} from "./styles";
import { CheckoutContext } from "../../../contexts/CheckoutContext";
import { useNavigate } from "react-router-dom";

export const ListProducts: React.FC = () => {
  const { cartState } = useContext(CartContext);
  const { checkoutState } = useContext(CheckoutContext);

  const DEVILERY_PRICE = 5;

  const totalOfProducts = cartState.products.reduce(
    (sum, product) => sum + product.price * product.amount,
    0
  );
  const total = totalOfProducts + DEVILERY_PRICE;

  const isDisabledConfirmButton =
    !checkoutState.location.address ||
    !checkoutState.location.zipcode ||
    !checkoutState.location.city ||
    !checkoutState.location.number ||
    !checkoutState.location.neighborhood ||
    !checkoutState.location.state ||
    !checkoutState.payment;

  const navigate = useNavigate();

  const onSubmitCheckout = () => {
    navigate("/checkout/success");
  };

  return (
    <CheckoutListProductsSection>
      <h2>Cafés selecionados</h2>

      <CheckoutListProducts>
        <ul>
          {cartState.products.map((product) => (
            <>
              <li key={product.id}>
                <ProductCard {...product} checkout />
              </li>

              <hr />
            </>
          ))}
        </ul>

        <CheckoutListProductsFooter>
          <CheckoutListProductsFooterItem>
            <span>Total de itens</span>

            <span>R$ {parsePrice(totalOfProducts)}</span>
          </CheckoutListProductsFooterItem>

          <CheckoutListProductsFooterItem>
            <span>Entrega</span>

            <span>R$ {parsePrice(DEVILERY_PRICE)}</span>
          </CheckoutListProductsFooterItem>

          <CheckoutListProductsFooterItem>
            <strong className="text-l">Total</strong>

            <strong className="text-l">R$ {parsePrice(total)}</strong>
          </CheckoutListProductsFooterItem>

          <CheckoutConfirmButton
            onClick={onSubmitCheckout}
            disabled={isDisabledConfirmButton}
          >
            Confirmar pedido
          </CheckoutConfirmButton>
        </CheckoutListProductsFooter>
      </CheckoutListProducts>
    </CheckoutListProductsSection>
  );
};
