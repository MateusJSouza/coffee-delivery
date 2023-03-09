import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input";
import { zipCodeAPI } from "../../../../services/zipCode";

import { AddressFormContainer } from "./styles";

type Address = {
  street: string;
  neighborhood: string;
  city: string;
  uf: string | null;
}

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  // const [zipCode, setZipCode] = useState("");
  // const [address, setAddress] = useState<Address>({
  //   uf: null,
  //   city: '',
  //   street: '',
  //   neighborhood: '',
  // });

  // const handleZipCodeBlur = async () => {
  //   if (zipCode.length === 8) {
  //     try {
  //       const response = await zipCodeAPI.get(`/${zipCode}/json`);

  //       console.log({response});
  
  //       if (response.status === 200) {
  //         const { logradouro, localidade, bairro, uf } = response.data;
          
  //         setAddress({
  //           street: logradouro,
  //           neighborhood: bairro,
  //           city: localidade,
  //           uf
  //         });
  //       } else {
  //         console.error('Não foi possível consultar o CEP.')
  //       }
  //     } catch (err) {
  //       console.error('Ocorreu um erro ao consultar o CEP.', err);
  //     }
  //   }
  // }

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        // onChange={(event) => setZipCode(event.target.value)}
        // onBlur={handleZipCodeBlur}
        {...register('cep')}
        error={errors.cep?.message}
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