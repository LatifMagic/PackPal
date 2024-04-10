/* eslint-disable react/prop-types */
function Header({ items }) {
  const derivedItems = items.filter((item) => item.packed);
  const itemsLength = derivedItems.length;
  console.log(`items length ${items.length}`);

  return (
    <div className="bg-stone-900 w-full m-auto my-8 p-2">
      <h1 className="text-4xl uppercase text-center text-stone-100">
        {items.length === 0
          ? `Put some items in your bag 💼`
          : itemsLength !== items.length
          ? `Pack Your Bag 💼`
          : `Congrats 🎉Your bag is packed ✔`}
      </h1>
    </div>
  );
}

export default Header;
