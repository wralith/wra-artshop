const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='flex flex-row justify-between items-center border-b-[1px] border-gray-800 '>
      <div>
        <h2 className="text-xl">{props.name}</h2>
        <div className="flex items-center gap-5">
          <span className="text-gray-800 font-bold">{price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div className="flex flex-row text-white p-4">
        <button className='p-3 rounded-l-xl bg-gray-800 hover:bg-gray-600' onClick={props.onRemove}>-</button>
        <button className='p-3 rounded-r-xl bg-gray-800 hover:bg-gray-600' onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
