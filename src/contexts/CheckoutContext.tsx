import { createContext, ReactNode, useState } from "react";

interface CheckoutState {
  location: {
    zipcode: string;
    address: string;
    number: number | null;
    complement?: string;
    city: string;
    neighborhood: string;
    state: string;
  };
  payment?: string;
}

interface CheckoutContextProps {
  checkoutState: CheckoutState;
  onChangeLocation: React.ChangeEventHandler<HTMLInputElement>;
  onChangePayment: (value: string) => void;
}

interface CheckoutContextProvider {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextProps);

export const CheckoutContextProvider = ({
  children,
}: CheckoutContextProvider) => {
  const initalCheckoutState: CheckoutState = {
    location: {
      zipcode: "",
      address: "",
      number: null,
      complement: "",
      city: "",
      neighborhood: "",
      state: "",
    },
    payment: "",
  };
  const [checkoutState, setCheckoutState] =
    useState<CheckoutState>(initalCheckoutState);

  const onChangeLocation: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;

    setCheckoutState((state) => ({
      ...state,
      location: {
        ...state.location,
        [name]: value,
      },
    }));
  };

  const onChangePayment = (value: string) => {
    setCheckoutState((state) => ({
      ...state,
      payment: value,
    }));
  };

  return (
    <CheckoutContext.Provider
      value={{ checkoutState, onChangeLocation, onChangePayment }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
