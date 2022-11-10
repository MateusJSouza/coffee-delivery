import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typograph";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}