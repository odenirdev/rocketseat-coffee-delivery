import { CartContextProvider } from "./contexts/CartContext";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";

import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <CartContextProvider>
      <CheckoutContextProvider>
        <GlobalStyle />
        <Routes />
      </CheckoutContextProvider>
    </CartContextProvider>
  );
}
