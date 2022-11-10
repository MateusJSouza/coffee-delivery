import { CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import coffeeImg from '../../../../../public/coffes/americano.png'
import { RegularText, TitleText } from "../../../../components/Typograph";

export function CoffeeCard() {

  return (
    <CoffeeCardContainer>
      <img src={coffeeImg} alt="" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name>
        Expresso Tradicional
      </Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}