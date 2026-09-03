import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [name, setName] = useState("");

  const changeName = () => {
    const newName = prompt("Enter your name:");

    if (newName) {
      setName(newName);
    }
  };

  return (
    <UserContext.Provider value={{ name, changeName }}>
      {children}
    </UserContext.Provider>
  );
}
