import { useState, useEffect,  } from "react";
import type { CartItem, } from '../types/types'

export const useCart = () => {
  const initialState = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart  , ] = useState(initialState);

  // const MAX_ITEMS = 5;
  // const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // function addToCart(item : Board) {
  //   const itemExist = cart.findIndex((board) => board.id === item.id);
  //   if (itemExist >= 0) {
  //     if (cart[itemExist].quantity >= MAX_ITEMS) return;
  //     const updateCart = [...cart];
  //     updateCart[itemExist].quantity += 1;
  //     setCart(updateCart);
  //   } else {
  //     const newItem : CartItem = {...item, quantity: 1}
  //     setCart((cart) => [...cart, newItem]);
  //   }
  // }
  // function removeFromCart(id : Board['id']) {
  //   const updateCart = cart.filter((board) => board.id !== id);
  //   setCart(updateCart);
  // }

  //  const removeFromCart = (id) =>{
  //     setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  //   }

  // function decreaseItem(id : Board['id']) {
  //   const updateQuantity = cart.map((item) => {
  //     if (item.id === id && item.quantity > MIN_ITEMS) {
  //       return {
  //         ...item,
  //         quantity: item.quantity - 1,
  //       };
  //     }
  //     return item;
  //   });
  //   setCart(updateQuantity);
  // }
  // function increaseItem(id : Board['id']) {
  //   const updateQuantity = cart.map((item) => {
  //     if (item.id === id && item.quantity < MAX_ITEMS) {
  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     }
  //     return item;
  //   });
  //   setCart(updateQuantity);
  // }

  // function clearCart() {
  //   setCart([]);
  // }

  

  return {
    cart,

  };
};
