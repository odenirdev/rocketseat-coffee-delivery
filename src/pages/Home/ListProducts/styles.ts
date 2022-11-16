import styled from "styled-components";

export const ListProductsSection = styled.section`
  padding: 0 1rem;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 3rem;
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 3rem;

    li {
      width: 16rem;
      flex: 0 0 16rem;
    }
  }
`;
