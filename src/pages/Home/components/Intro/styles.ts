import styled from "styled-components";
import introBackgroundImg from '../../../../assets/intro-background.png'
import { TitleText } from "../../../../components/Typograph";
import { rgba } from 'polished';

export const IntroContainer = styled.section`
  width: 100%;
  height: 27.75rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 2.5rem 0;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > img {
    max-width: 29.75rem;
    width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 2rem;

    > img {
      max-width: 22rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    > img {
      display: none;
    }
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;
