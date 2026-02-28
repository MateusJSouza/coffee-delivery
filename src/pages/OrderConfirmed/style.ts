import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]}
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      max-width: 32rem;
      width: 100%;
    }

    @media (max-width: 1024px) {
      gap: 2rem;

      > img {
        max-width: 24rem;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      > img {
        width: 100%;
        max-width: 20rem;
        align-self: center;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    gap: 1.5rem;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

  @media (max-width: 1024px) {
    min-width: unset;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;
