import styled from "styled-components";

export const SuccessContainer = styled.main`
  padding: 0 1rem;

  h1 {
    color: var(--yellow-dark);
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    color: var(--base-subtitle);
  }

  section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 1072px) {
      grid-template-columns: 1fr;
    }
  }

  ul {
    margin: 0 auto;

    list-style: none;

    padding: 2.5rem;

    width: fit-content;

    border: 1px solid var(--purple);
    border-radius: 6px 36px;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & + li {
        margin-top: 1rem;
      }

      i {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;

        flex: 0 0 32px;
        height: 32px;

        color: var(--base-white);
      }

      &:nth-child(1) i {
        background-color: var(--yellow-dark);
      }

      &:nth-child(2) i {
        background-color: var(--base-text);
      }

      &:nth-child(3) i {
        background-color: var(--yellow);
      }
    }
  }

  img {
    margin: 0 auto;
  }
`;
