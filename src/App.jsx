import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ItemsContainer from "./components/ItemsContainer.jsx";
import Manipulation from "./components/Manipulation.jsx";
function App() {
  const [items, setItems] = useState([]);

  const localItems = JSON.parse(localStorage.getItem("items"));

  const [sortBy, setSortBy] = useState("description");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      ?.slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      ?.slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  useEffect(() => {
    if (localItems) setItems(JSON.parse(localStorage.getItem("items")));
  }, [localItems]);

  function handleSort(e) {
    setSortBy(e.target.value);
    console.log(sortBy);
  }
  const handleAddItems = (item) => {
    setItems((items) => {
      const list = [...items, item];
      localStorage.setItem("items", JSON.stringify(list));
      return list;
    });
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
    localStorage.setItem(
      "items",
      JSON.stringify(localItems.filter((item) => item.id !== id))
    );
  };

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    localStorage.setItem(
      "items",
      JSON.stringify(
        localItems.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      )
    );
  }

  return (
    <main>
      <Header items={sortedItems} />
      <Manipulation
        items={sortedItems}
        onAddItems={handleAddItems}
        setItems={setItems}
        handleSort={handleSort}
        sortBy={sortBy}
      />
      <ItemsContainer
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
    </main>
  );
}

export default App;
