import { createContext, ReactNode, Reducer, useReducer, useState } from "react";

import { Product } from "../components/ProductCard";
import {
  addProductAction,
  decrementProductAction,
  incrementProductAction,
  removeProductAction,
} from "../reducers/cart/actions";
import { cartReducer, CartState } from "../reducers/cart/reducer";

export interface CartProduct extends Product {
  amount: number;
}

interface CartContextProps {
  cartState: CartState;
  addProduct: (product: Product) => void;
  incrementProduct: (productId: string) => void;
  decrementProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

interface CartContextProviderProps {
  children: ReactNode;
}

const initialCartReducer: CartState = {
  products: [],
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer<Reducer<CartState, any>>(
    cartReducer,
    initialCartReducer
  );

  const addProduct = (newProduct: Product) => {
    dispatch(addProductAction(newProduct));
  };

  const incrementProduct = (productId: string) => {
    dispatch(incrementProductAction(productId));
  };

  const decrementProduct = (productId: string) => {
    dispatch(decrementProductAction(productId));
  };

  const removeProduct = (productId: string) => {
    dispatch(removeProductAction(productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addProduct,
        incrementProduct,
        decrementProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
