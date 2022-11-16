import styled from "styled-components";

export const CheckoutListProductsSection = styled.section``;

export const CheckoutListProducts = styled.div`
  background: var(--base-card);
  padding: 2.5rem;

  border-radius: 6px 44px 6px 44px;

  hr {
    margin: 1.5rem 0;
    border-top: 1px solid var(--base-button);
  }
`;

export const CheckoutListProductsFooter = styled.footer``;

export const CheckoutListProductsFooterItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutConfirmButton = styled.button`
  width: 100%;
  height: 2.875rem;
  margin-top: 1.5rem;

  background-color: var(--yellow);
  color: var(--base-white);
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 1rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
