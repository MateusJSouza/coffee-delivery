import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

// Tipando o input para que ele receba todos os atributos de um input padrão
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />;
}