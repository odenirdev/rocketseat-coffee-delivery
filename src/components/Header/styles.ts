import styled from "styled-components";

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem 1rem;
`;

export const HomeHeaderInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    padding: 0.5rem;

    border-radius: 6px;

    background-color: var(--purple-light);
    color: var(--purple);
  }
`;

interface CartButtonProps {
  amount: number;
}

export const CartButton = styled.button<CartButtonProps>`
  background-color: var(--yellow-light);
  color: var(--yellow-dark);

  border: 0;
  padding: 0.5rem;
  border-radius: 6px;

  transition: 0.1s;

  cursor: pointer;

  position: relative;

  &:hover {
    filter: brightness(1.05);
  }

  &::after {
    content: ${(props) => (props.amount > 0 ? `"${props.amount}"` : undefined)};
    font-size: 0.875rem;
    font-weight: 800;
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;

    background-color: var(--yellow-dark);
    color: var(--yellow-light);

    position: absolute;

    top: 0;
    right: 0;
    transform: translate(50%, -25%);
  }
`;
