import { createContext, ReactNode, useState } from "react";
import { produce } from 'immer';
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextTypeProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextTypeProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}