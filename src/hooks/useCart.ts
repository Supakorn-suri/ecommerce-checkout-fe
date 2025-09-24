import { useContext } from "react";

import { CartContext } from "@/contexts";

const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartContext;
};

export default useCart;
