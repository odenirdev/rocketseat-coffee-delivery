import React from "react";

import { ProductCard } from "../../../components/ProductCard";

import { productsMock } from "../mock";

import { ListProductsSection } from "./styles";

export const ListProducts: React.FC = () => {
  return (
    <ListProductsSection>
      <h2>Nossos cafés</h2>

      <ul>
        {productsMock.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </ListProductsSection>
  );
};
