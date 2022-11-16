import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Success />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
