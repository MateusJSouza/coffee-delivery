import { CreditCard } from "phosphor-react";
import { PaymenthMethodInputContainer } from "./styles";

export function PaymentMethodInput() {
  return (
    <PaymenthMethodInputContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymenthMethodInputContainer>
  )
}