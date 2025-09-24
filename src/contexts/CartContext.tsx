import React, { createContext, useState } from "react";

export type CategoryType = "Clothing" | "Accessories";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: CategoryType;
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
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(defaultCartItems);

  const addCartItem = (item: CartItem) => {
    const matchingCartItem = cartItems.find(
      (cartItem: CartItem) => cartItem.id === item.id
    );
    if (matchingCartItem) {
      const updated = cartItems.map((cartItem: CartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, item]);
    }
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

  const clearCart = () => {
    setCartItems(defaultCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
