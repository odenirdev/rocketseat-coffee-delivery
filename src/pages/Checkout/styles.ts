import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 1rem;

  padding: 0 1rem;

  ul {
    list-style: none;

    li + li {
      margin-top: 1rem;
    }
  }

  @media (max-width: 1072px) {
    grid-template-columns: 1fr;
  }
`;
