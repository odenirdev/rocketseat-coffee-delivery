import React, { useContext } from "react";
import { Clock, CurrencyDollarSimple, MapPin } from "phosphor-react";

import successIllustration from "../../assets/succes-illustration.png";

import { SuccessContainer } from "./styles";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export const Success: React.FC = () => {
  const { checkoutState } = useContext(CheckoutContext);

  const PAYMENT_TYPE: any = {
    credit: "Cartão de Credito",
    debit: "Cartão de Debito",
    money: "Dinheiro",
  };

  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <section>
        <ul>
          <li>
            <i>
              <MapPin />
            </i>

            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {checkoutState.location.address},{" "}
                  {checkoutState.location.number}
                </strong>
              </p>
              <p>
                {checkoutState.location.neighborhood} -{" "}
                {checkoutState.location.city}, {checkoutState.location.state}
              </p>
            </div>
          </li>

          <li>
            <i>
              <Clock />
            </i>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </li>

          <li>
            <i>
              <CurrencyDollarSimple />
            </i>

            <div>
              <p>Pagamento na entrega</p>
              <strong>{PAYMENT_TYPE[checkoutState.payment || "credit"]}</strong>
            </div>
          </li>
        </ul>

        <img src={successIllustration} alt="" />
      </section>
    </SuccessContainer>
  );
};
