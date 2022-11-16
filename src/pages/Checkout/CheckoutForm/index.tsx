import React, { useContext } from "react";
import {
  MapPinLine,
  CurrencyDollarSimple,
  Money,
  Bank,
  CreditCard,
} from "phosphor-react";

import {
  CheckoutFooter,
  CheckoutFormContainer,
  CheckoutFormSection,
  CheckoutFormWrapper,
  CheckoutLocationCityContainer,
  CheckoutLocationNumberContainer,
  ToggleGroupItem,
  ToggleGroupRoot,
} from "./styles";

import { Input } from "../../../components/Input";

import { CheckoutContext } from "../../../contexts/CheckoutContext";

export const CheckoutForm: React.FC = () => {
  const { checkoutState, onChangeLocation, onChangePayment } =
    useContext(CheckoutContext);

  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>

      <CheckoutFormSection>
        <header>
          <MapPinLine />

          <div>
            <h1>Endereço de Entrega</h1>

            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <CheckoutFormWrapper>
          <Input
            type="text"
            placeholder="CEP"
            name="zipcode"
            value={checkoutState.location.zipcode}
            onChange={onChangeLocation}
            required
          />

          <Input
            type="text"
            placeholder="Rua"
            className="w-100"
            name="address"
            value={checkoutState.location.address}
            onChange={onChangeLocation}
            required
          />

          <CheckoutLocationNumberContainer>
            <Input
              type="text"
              placeholder="Numero"
              name="number"
              value={checkoutState.location.number || ""}
              onChange={onChangeLocation}
              required
            />

            <Input
              type="text"
              placeholder="Complemento(opcional)"
              name="complement"
              value={checkoutState.location.complement}
              onChange={onChangeLocation}
            />
          </CheckoutLocationNumberContainer>

          <CheckoutLocationCityContainer>
            <Input
              type="text"
              placeholder="Bairro"
              name="neighborhood"
              value={checkoutState.location.neighborhood}
              onChange={onChangeLocation}
            />

            <Input
              type="text"
              placeholder="Cidade"
              name="city"
              value={checkoutState.location.city}
              onChange={onChangeLocation}
            />

            <Input
              type="text"
              placeholder="UF"
              name="state"
              value={checkoutState.location.state}
              onChange={onChangeLocation}
            />
          </CheckoutLocationCityContainer>
        </CheckoutFormWrapper>
      </CheckoutFormSection>

      <CheckoutFooter>
        <header>
          <h2>
            <CurrencyDollarSimple size={24} />
            Pagamento
          </h2>

          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </header>

        <ToggleGroupRoot
          type="single"
          value={checkoutState.payment}
          onValueChange={onChangePayment}
        >
          <ToggleGroupItem value="credit">
            <CreditCard /> Cartão de credito
          </ToggleGroupItem>

          <ToggleGroupItem value="debit">
            <Bank /> Cartão de débito
          </ToggleGroupItem>

          <ToggleGroupItem value="money">
            <Money /> Dinheiro
          </ToggleGroupItem>
        </ToggleGroupRoot>
      </CheckoutFooter>
    </CheckoutFormContainer>
  );
};
