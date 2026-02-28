import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input";
import { zipCodeAPI } from "../../../../services/zipCode";

import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function AddressForm() {
  const { register, formState, setValue } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  async function handleZipCodeChange(zipCode: string) {
    try {
      if (zipCode.length === 8) {
        const response = await zipCodeAPI.get(`${zipCode}/json`);
        const { logradouro: street, bairro: district, localidade: city, uf } = response.data;
        setValue("street", street);
        setValue("district", district);
        setValue("city", city);
        setValue("uf", uf);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { onBlur: onCepBlur, ...cepRegister } = register('cep');

  function handleCepBlur(event: React.FocusEvent<HTMLInputElement>) {
    onCepBlur(event);
    const { value } = event.target;
    const cepRegex = /^\d{5}-?\d{3}$/;

    if (cepRegex.test(value)) {
      handleZipCodeChange(value.replace("-", ""));
    }
  }

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="text"
        inputMode="numeric"
        maxLength={9}
        className="cep"
        {...cepRegister}
        error={errors.cep?.message}
        onBlur={handleCepBlur}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("district")}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        {...register("uf")}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}