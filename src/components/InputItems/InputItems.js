import { useState } from "react";

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

  return (
    <>
      <form onSubmit={AddItem}>
        <input name="item" type="text" value={item}
          onChange={(item) => setItem(item.target.value)}
        />
      </form>
      <button onClick={AddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default InputItems;