/* eslint-disable react/prop-types */
import { RiDeleteBin5Line } from "react-icons/ri";

function ItemsContainer({ items, onDeleteItem, onToggleItem }) {
  return (
    <div
      className="py-2 flex flex-col flex-wrap sm:flex-row gap-4 bg-slate-200 justify-center 
    h-[68vh] uppercase px-4 md:px-10 overflow-scroll"
    >
      {items.length === 0 ? (
        <p className="text-lg">No items yet.</p>
      ) : (
        <>
          {items?.map((item) => (
            <div
              key={item.id}
              className={`flex gap-1 justify-between bg-slate-100 rounded-md p-2 w-full sm:w-48 shadow-md  
            ring-offset-2 ring-2 h-fit ${item.packed ? `line-through` : ""} `}
            >
              <p className="flex gap-2 text-base">
                {item.packed ? (
                  <input
                    type="checkbox"
                    checked
                    value={item.packed}
                    onChange={() => onToggleItem(item.id)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    value={item.packed}
                    onChange={() => onToggleItem(item.id)}
                  />
                )}

                {item.quantity}
                {item.description}
              </p>
              <span
                className="text-lg text-red-500 mt-1 cursor-pointer"
                onClick={() => onDeleteItem(item.id)}
              >
                <RiDeleteBin5Line />
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ItemsContainer;
