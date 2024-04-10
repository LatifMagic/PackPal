/* eslint-disable react/prop-types */

function Filter({ setItems, sortBy, handleSort }) {
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      setItems([]);
      localStorage.removeItem("items");
    }
  }
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center">
      <select
        value={sortBy}
        onChange={handleSort}
        className="uppercase p-3 w-fit rounded-full  shadow-md bg-green-50 text-center"
      >
        <option value="description">sort by description</option>
        <option value="packed">sort by packed state</option>
        <option value="input">sort by input order</option>
      </select>

      <button
        onClick={handleClearList}
        className="p-3 bg-red-400  rounded-full uppercase font-bold text-green-50 shadow-md w-fit"
      >
        Clear All
      </button>
    </div>
  );
}

export default Filter;
