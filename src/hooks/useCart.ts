import { useContext } from "react";

import { CartContext } from "@/contexts";

const useCart = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};

export default useCart;
