import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: var(--base-card);
  width: 100%;

  padding: 1rem;
  margin-top: 20%;

  border-radius: 0.5rem 2rem 0.5rem 2rem;
`;

export const ProductCardHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -20%;
  margin-bottom: 1rem;

  img {
    width: 7.5rem;
    flex: 0 0 7.5rem;

    margin-bottom: 1rem;
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    span {
      background-color: var(--yellow-light);
      color: var(--yellow);
      font-weight: 700;

      padding: 0.25rem 0.5rem;

      border-radius: 100px;
    }
  }
`;

export const ProductCardSection = styled.section`
  text-align: center;

  margin-bottom: 2rem;
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddCartButton = styled.button`
  background: var(--purple-dark);
  color: var(--base-card);

  display: flex;
  align-items: center;
  gap: 0.2rem;

  font-size: 0.875rem;
  font-weight: 800;

  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  transition: 0.1s;

  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(1.4);
  }

  &:disabled {
    opacity: 0.9;
    cursor: initial;
  }
`;

export const Price = {
  Root: styled.span`
    display: block;
  `,

  Value: styled.span`
    font-size: 1.5rem;
    font-weight: 800;
  `,

  CurrencyIndicator: styled.span`
    font-size: 0.875rem;
    font-weight: 400;
  `,
};

export const CartInputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductCardCheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h4 {
    font-weight: 500;
  }

  img {
    width: 4rem;
    height: 4rem;
    flex: 0 4rem;
  }
`;

export const ProductCardCheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ProductCardCheckoutCountContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProductCardCheckoutRemoveButton = styled.button`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 2.375rem;
  gap: 0.5rem;
  padding: 0 1rem;

  background: var(--base-button);
  color: var(--base-text);

  text-transform: uppercase;

  border-radius: 6px;

  border: 0;

  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: var(--purple);
  }
`;

export const ProductCardCheckoutPrice = styled.strong`
  font-size: 1.25rem;
`;
