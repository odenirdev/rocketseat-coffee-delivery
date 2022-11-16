import React from "react";
import { ShoppingCart, Package, Coffee, Clock } from "phosphor-react";

import bannerHomeImage from "../../../assets/banner-home.png";

import { HomeHighlightContent, HomeHighlightSection } from "./styles";

export const HighlightSection: React.FC = () => {
  return (
    <HomeHighlightSection>
      <HomeHighlightContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="text-l">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <ul>
          <li>
            <span>
              <i>
                <ShoppingCart />
              </i>
              Compra simples e segura
            </span>
          </li>

          <li>
            <span>
              <i>
                <Package />
              </i>
              Embalagem mantém o café intacto
            </span>
          </li>

          <li>
            <span>
              <i>
                <Clock />
              </i>
              Entrega rápida e rastreada
            </span>
          </li>

          <li>
            <span>
              <i>
                <Coffee />
              </i>
              O café chega fresquinho até você
            </span>
          </li>
        </ul>
      </HomeHighlightContent>

      <img src={bannerHomeImage} alt="" />
    </HomeHighlightSection>
  );
};
