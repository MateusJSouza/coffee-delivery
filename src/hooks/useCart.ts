import { useContext } from "react";
import { CartContext } from "../contexts/CartContent";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}