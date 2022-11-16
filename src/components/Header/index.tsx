import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import logoSvg from "../../assets/logo.svg";

import { CartContext } from "../../contexts/CartContext";

import { CartButton, HomeHeader, HomeHeaderInfos } from "./styles";

interface LocationProps {
  city: string;
  countryCode: string;
}

export const Header: React.FC = () => {
  const { cartState } = useContext(CartContext);

  const navigate = useNavigate();

  const [location, setLocation] = useState<LocationProps>();

  const amountProducts = cartState.products.reduce((sum, product) => {
    return sum + product.amount;
  }, 0);

  const onShowCityName = useCallback(() => {
    fetch("https://geolocation-db.com/json/")
      .then((response) => response.json())
      .then((data) => {
        setLocation({
          city: data.city,
          countryCode: data.country_code,
        });
      });
  }, []);

  useEffect(() => {
    onShowCityName();
  }, [onShowCityName]);

  const onGotoCheckout = () => {
    if (amountProducts > 0) navigate("/checkout");
  };

  return (
    <HomeHeader>
      <img src={logoSvg} alt="" />

      <HomeHeaderInfos>
        {location && (
          <span className="text-s">
            <MapPin size={22} /> {location.city}, {location.countryCode}
          </span>
        )}

        <CartButton onClick={onGotoCheckout} amount={amountProducts}>
          <ShoppingCart size={22} />
        </CartButton>
      </HomeHeaderInfos>
    </HomeHeader>
  );
};
