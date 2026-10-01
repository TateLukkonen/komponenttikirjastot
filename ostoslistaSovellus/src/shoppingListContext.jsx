import { createContext, useContext } from "react";

const ShoppingListContext = createContext();

export function useShoppingList() {
  return useContext(ShoppingListContext);
}

export default ShoppingListContext;
