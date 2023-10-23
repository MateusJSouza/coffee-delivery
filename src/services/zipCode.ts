import axios from "axios";

export const zipCodeAPI = axios.create({
  baseURL: "https://viacep.com.br/ws"
})