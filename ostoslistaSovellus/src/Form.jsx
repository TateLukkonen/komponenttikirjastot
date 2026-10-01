import { useState } from "react";
import { useShoppingList } from "./shoppingListContext";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const { addItem } = useShoppingList();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") return;

    addItem(inputValue);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita ostos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">Lisää</button>
    </form>
  );
}

export default Form;
