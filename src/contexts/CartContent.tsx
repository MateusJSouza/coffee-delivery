import { createContext, ReactNode, useState } from "react";
import { produce } from 'immer';
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartQuantity: number;
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
}

interface CartContextTypeProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextTypeProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const cartQuantity = cartItems.length;

  // Adiciona um ou mais itens ao carrinho
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

  // altera a quantidade de um item no carrinho de compras, aumentando ou diminuindo a quantidade em 1, dependendo do tipo fornecido.
  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  // remove o item do carrinho com o ID correspondente ao cartItemId.
  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    })

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}