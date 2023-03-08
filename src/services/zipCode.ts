import axios from "axios";

export const zipCodeAPI = axios.create({
  baseURL: "http://viacep.com.br/ws"
})