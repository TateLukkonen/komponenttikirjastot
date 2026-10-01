import { useShoppingList } from "./shoppingListContext";

function ItemList() {
  const { items, removeItem } = useShoppingList();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => removeItem(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
