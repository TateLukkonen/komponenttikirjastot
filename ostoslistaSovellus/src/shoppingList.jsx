import { useState } from "react";

import Form from "./Form";
import ItemList from "./ItemList";
import ShoppingListContext from "./shoppingListContext";

function ShoppingList() {
  const [items, setItems] = useState([]);

  function addItem(newItemText) {
    const newItem = {
      id: crypto.randomUUID(),
      text: newItemText,
    };

    setItems([...items, newItem]);
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <ShoppingListContext.Provider value={{ items, addItem, removeItem }}>
      <div>
        <Form />
        <ItemList />
      </div>
    </ShoppingListContext.Provider>
  );
}

export default ShoppingList;
