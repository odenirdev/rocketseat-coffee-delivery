import React, { useContext } from "react";
import { ShoppingCart, Trash } from "phosphor-react";

import { CartContext } from "../../contexts/CartContext";

import { CountInput } from "../../components/CountInput";

import {
  AddCartButton,
  CartInputsContainer,
  Price,
  ProductCardCheckoutContainer,
  ProductCardCheckoutCountContainer,
  ProductCardCheckoutPrice,
  ProductCardCheckoutRemoveButton,
  ProductCardCheckoutSection,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardHeader,
  ProductCardSection,
} from "./styles";
import { parsePrice } from "../../utils/parsePrice";

export interface Product {
  id: string;
  productImage: string;
  name: string;
  description: string;
  price: number;
  labels: string[];
}

interface ProductCardProps extends Product {
  checkout?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    cartState,
    addProduct,
    incrementProduct,
    decrementProduct,
    removeProduct,
  } = useContext(CartContext);

  const addedProduct = cartState.products.find(
    (product) => product.id === props.id
  );
  const isAdded = !!addedProduct;

  const onAddProduct = () => {
    addProduct(props);
  };

  const onIncrementProduct = () => {
    if (addedProduct) incrementProduct(addedProduct.id);
  };

  const onDecrementProduct = () => {
    if (addedProduct) decrementProduct(addedProduct.id);
  };

  const onRemoveProduct = () => {
    if (addedProduct) removeProduct(addedProduct.id);
  };

  if (props.checkout) {
    return (
      <ProductCardCheckoutContainer>
        <img src={props.productImage} alt="" />

        <ProductCardCheckoutSection>
          <h4>{props.name}</h4>

          <ProductCardCheckoutCountContainer>
            <CountInput
              value={addedProduct!.amount}
              onIncrement={onIncrementProduct}
              onDecrement={onDecrementProduct}
              onRemove={onRemoveProduct}
            />

            <ProductCardCheckoutRemoveButton onClick={onRemoveProduct}>
              <Trash /> Remover
            </ProductCardCheckoutRemoveButton>
          </ProductCardCheckoutCountContainer>
        </ProductCardCheckoutSection>

        <ProductCardCheckoutPrice>
          R$ {parsePrice(props.price)}
        </ProductCardCheckoutPrice>
      </ProductCardCheckoutContainer>
    );
  }

  return (
    <ProductCardContainer>
      <ProductCardHeader>
        <img src={props.productImage} alt="" />

        <div>
          {props.labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </ProductCardHeader>

      <ProductCardSection>
        <h4>{props.name}</h4>
        <p className="text-s">{props.description}</p>
      </ProductCardSection>

      <ProductCardFooter>
        <Price.Root>
          <Price.CurrencyIndicator>R$</Price.CurrencyIndicator>
          <Price.Value>{parsePrice(props.price)}</Price.Value>
        </Price.Root>

        <CartInputsContainer>
          {isAdded && (
            <CountInput
              value={addedProduct.amount}
              onIncrement={onIncrementProduct}
              onDecrement={onDecrementProduct}
              onRemove={onRemoveProduct}
            />
          )}

          <AddCartButton onClick={onAddProduct} disabled={isAdded}>
            <ShoppingCart size={22} /> {!isAdded && "Adicionar"}
          </AddCartButton>
        </CartInputsContainer>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};
