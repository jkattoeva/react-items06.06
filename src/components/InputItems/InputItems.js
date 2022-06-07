import { useState } from "react";
import classes from "./InputItems.module.css";

function InputItems() {

  
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function AddItem(event) {
    event.preventDefault();
    setItems([
      ...items,
      {
        name: item,
      },
    ]);
    setItem("");
  }

  function DeleteItem() {
  setItems(!item.name)
  }


  return (
    <div className={classes.example}>
      <h1>My favorite films:</h1>
      <form onSubmit={AddItem}>
        <input className={classes.input} name="item" type="text" value={item}
          onChange={(item) => setItem(item.target.value)}
        />
      </form>
      <button className={classes.button} onClick={AddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li>
            {item.name}
            <button onClick={DeleteItem}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputItems;