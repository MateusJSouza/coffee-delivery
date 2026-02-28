import styled from "styled-components";

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
`;