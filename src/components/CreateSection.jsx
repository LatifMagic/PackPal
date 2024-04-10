/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateSection({ items, onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleDescription(e) {
    if (!items.some((r) => r.description === e.target.value))
      setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (description.length < 2) return;

    const newItem = { description, quantity, packed: false, id: uuidv4() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 items-center"
    >
      <div className="flex gap-2">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="p-3  rounded-full  shadow-md bg-green-50 text-center"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option value={n} key={n}>
              {n}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={handleDescription}
          className="p-3 rounded-full shadow-md bg-green-50  w-60 px-4"
        />
      </div>
      <button className="p-3 bg-green-400 w-20 rounded-full uppercase font-bold text-green-50 shadow-md">
        Add
      </button>
    </form>
  );
}

export default CreateSection;
