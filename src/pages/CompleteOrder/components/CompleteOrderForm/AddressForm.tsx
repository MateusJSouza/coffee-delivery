import { useState } from "react";

import { Input } from "../../../../components/Input";
import { zipCodeAPI } from "../../../../services/zipCode";

import { AddressFormContainer } from "./styles";

type Address = {
  street: string;
  neighborhood: string;
  city: string;
  uf: string | null;
}

export function AddressForm() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState<Address>({
    uf: null,
    city: '',
    street: '',
    neighborhood: '',
  });

  const handleZipCodeBlur = async () => {
    if (zipCode.length === 8) {
      try {
        const response = await zipCodeAPI.get(`/${zipCode}/json`);

        console.log({response});
  
        if (response.status === 200) {
          const { logradouro, localidade, bairro, uf } = response.data;
          
          setAddress({
            street: logradouro,
            neighborhood: bairro,
            city: localidade,
            uf
          });
        } else {
          console.error('Não foi possível consultar o CEP.')
        }
      } catch (err) {
        console.error('Ocorreu um erro ao consultar o CEP.', err);
      }
    }
  }

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        onChange={(event) => setZipCode(event.target.value)}
        onBlur={handleZipCodeBlur}
      />
      <Input
        placeholder="Rua"
        className="street"
        value={address?.street}
        onChange={(event) => setAddress({ ...address, street: event.target.value})}
      />
      <Input
        placeholder="Número"
        type="number"
      />
      <Input
        placeholder="Complemento"
        className="complement"
      />
      <Input
        placeholder="Bairro"
        value={address?.neighborhood}
        onChange={(event) => setAddress({ ...address, neighborhood: event.target.value})}
      />
      <Input
        placeholder="Cidade"
        value={address?.city}
        onChange={(event) => setAddress({ ...address, city: event.target.value})}
      />
      <Input
        placeholder="UF"
        value={address?.uf || ''}
        onChange={(event) => setAddress({ ...address, uf: event.target.value})}
      />
    </AddressFormContainer>
  )
}