import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const CheckoutFormContainer = styled.div``;

export const CheckoutFormSection = styled.section`
  padding: 2.5rem;

  background: var(--base-card);

  border-radius: 6px;

  & > header {
    display: flex;
    gap: 0.5rem;

    svg {
      font-size: 1.5rem;
      color: var(--yellow);
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

export const CheckoutFormWrapper = styled.div`
  padding-top: 2.5rem;

  & > input {
    display: block;
    margin-bottom: 1rem;
  }
`;

export const CheckoutLocationNumberContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const CheckoutLocationCityContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;
`;

export const CheckoutFooter = styled.footer`
  padding: 2.5rem;

  background: var(--base-card);

  border-radius: 6px;

  margin-top: 1rem;

  header {
    h2 {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1.5rem;
      font-weight: 500;

      svg {
        font-size: 1.5rem;
        color: var(--purple);
      }
    }

    p {
      margin-left: calc(0.5rem + 24px);
    }
  }
`;

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
`;

export const ToggleGroupItem = styled(ToggleGroup.Item)`
  background-color: var(--base-button);

  border: 1px solid var(--base-button);
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  height: 3.1875rem;

  padding: 0 1rem;

  cursor: pointer;

  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--base-text);

  svg {
    color: var(--purple);
    font-size: 1.2rem;
  }

  &[data-state="on"] {
    border-color: var(--purple);
    background-color: var(--purple-light);
  }
`;
