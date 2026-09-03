import { useContext } from "react";
import { UserContext } from "./UserContext";


function NameButton() {
    const { name, changeName} = useContext(UserContext)
    return (
        <div>
            <p>{name || "NoName"}</p>
            <button onClick={changeName}>Swap Name</button>
        </div>
    )
}

export default NameButton