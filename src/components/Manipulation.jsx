import CreateSection from "./CreateSection";
import Filter from "./Filter";

// eslint-disable-next-line react/prop-types
function Manipulation({ items, onAddItems, setItems, sortBy, handleSort }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between mx-2 md:mx-12 mb-10 ">
      <CreateSection items={items} onAddItems={onAddItems} />
      <Filter setItems={setItems} handleSort={handleSort} sortBy={sortBy} />
    </div>
  );
}

export default Manipulation;
