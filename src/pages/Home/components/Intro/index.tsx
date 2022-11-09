import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.png';
import { RegularText } from "../../../../components/Typograph";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe seu café onde estiver, a {'\n'} qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <p>Benefício</p>
            <p>Benefício</p>
            <p>Benefício</p>
            <p>Benefício</p>
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}