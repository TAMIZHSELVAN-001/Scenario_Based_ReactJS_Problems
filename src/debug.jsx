import { useState } from "react";
export default function Cart() {
  const [items, setItems] = useState([]);
  const [visiblity, setVisiblity] = useState(false);
  const add = () => {
    setVisiblity(true);
    items.push({ id: Date.now() });
    // setItems(items)
    console.log("before", items);
    setTimeout(() => {
        setVisiblity(false)
    }, 5000);
    // setItems((prevItems)=>[...prevItems,{id:Date.now()}]);
    // setItems([]);
    // setItems(items);
    // console.log("after", items)
  };

  return (
    <button disabled={visiblity} onClick={add}>
      Add ({items.length})
    </button>
  );
}
