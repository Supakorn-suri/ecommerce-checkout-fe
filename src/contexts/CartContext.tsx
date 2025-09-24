import React, { createContext, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: "Clothing" | "Accessories" | "Electronics";
  image: string;
};

const defaultCartItems: CartItem[] = [
  {
    id: "item-2",
    name: "Hat",
    price: 250,
    quantity: 1,
    category: "Accessories",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470010/item/goods_31_470010_3x4.jpg?width=369",
  },
  {
    id: "item-3",
    name: "Hoodie",
    price: 950,
    quantity: 1,
    category: "Clothing",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/475855/sub/goods_475855_sub13_3x4.jpg?width=369",
  },
];

export type CartContextType = {
  cartItems: CartItem[];
  addCartItem: (product: CartItem) => void;
  removeCartItem: (productId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(defaultCartItems);

  const addCartItem = (item: CartItem) => {
    const matchingCartItem: CartItem | undefined = cartItems.find(
      (cartItem: CartItem) => cartItem.id === item.id
    );
    if (matchingCartItem) {
      matchingCartItem.quantity += 1;
    } else {
      cartItems.push(item);
    }
    setCartItems([...cartItems]);
  };

  const removeCartItem = (itemId: string) => {
    const newCartItems = cartItems.filter(
      (item: CartItem) => item.id !== itemId
    );
    setCartItems(newCartItems);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    const matchingCartItem = cartItems.find(
      (item: CartItem) => item.id === itemId
    );
    if (!matchingCartItem) {
      return;
    }
    matchingCartItem.quantity = quantity;
    setCartItems([...cartItems]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
