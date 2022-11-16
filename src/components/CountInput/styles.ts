import styled from "styled-components";

export const CountInputContainer = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 2.375rem;
  gap: 0.7rem;
  padding: 0 0.5rem;

  background: var(--base-button);

  border-radius: 6px;

  button {
    border: 0;
    background-color: transparent;

    cursor: pointer;

    color: var(--purple);
  }

  span {
    font-size: 1.25rem;
  }
`;
