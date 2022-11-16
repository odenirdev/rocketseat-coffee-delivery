import styled from "styled-components";

export const HomeHighlightSection = styled.section`
  padding: 6rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
    max-width: 29.625rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      margin: 0 auto;
    }
  }
`;

export const HomeHighlightContent = styled.div`
  p {
    color: var(--base-subtitle);
  }

  ul {
    margin-top: 4rem;

    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    li {
      display: flex;
      align-items: center;

      span {
        display: flex;
        gap: 0.2rem;
        font-size: 1rem;

        i {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;

          flex: 0 0 32px;
          height: 32px;

          color: var(--base-white);
        }
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

      &:nth-child(4) i {
        background-color: var(--purple);
      }
    }
  }
`;
