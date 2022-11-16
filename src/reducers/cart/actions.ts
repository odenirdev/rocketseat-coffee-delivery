import { ProductCard, Product } from "../../components/ProductCard";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  INCREMENT_PRODUCT = "INCREMENT_PRODUCT",
  DECREMENT_PRODUCT = "DECREMENT_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

export const addProductAction = (newProduct: Product) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      newProduct,
    },
  };
};

export const incrementProductAction = (productId: string) => {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      productId,
    },
  };
};

export const decrementProductAction = (productId: string) => {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: {
      productId,
    },
  };
};

export const removeProductAction = (productId: string) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
};
