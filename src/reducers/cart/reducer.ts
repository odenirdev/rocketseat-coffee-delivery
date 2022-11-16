import { produce } from "immer";

import { CartProduct } from "../../contexts/CartContext";

import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface CartState {
  products: CartProduct[];
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const { newProduct } = action.payload;

      const isAlreadyAdded = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (!!isAlreadyAdded) return state;

      return produce(state, (draft) => {
        draft.products.push({ ...newProduct, amount: 1 });
      });
    }

    case ActionTypes.INCREMENT_PRODUCT: {
      const { productId } = action.payload;

      const indexProduct = state.products.findIndex(
        (product) => product.id === productId
      );

      return produce(state, (draft) => {
        draft.products[indexProduct].amount += 1;
      });
    }

    case ActionTypes.DECREMENT_PRODUCT: {
      const { productId } = action.payload;

      const indexProduct = state.products.findIndex(
        (product) => product.id === productId
      );

      return produce(state, (draft) => {
        draft.products[indexProduct].amount -= 1;
      });
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const { productId } = action.payload;

      const indexProduct = state.products.findIndex(
        (product) => product.id === productId
      );

      return produce(state, (draft) => {
        draft.products.splice(indexProduct, 1);
      });
    }
  }

  return state;
};
