import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleCartItemRemove = (id) => {};
  const handleCartItemAdd = (item) => {};

  const cartItems = (
    <ul className="flex flex-col gap-3 max-h-[20rem] overflow-scroll">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleCartItemRemove.bind(null, item.id)}
          onAdd={handleCartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className="mx-2 flex flex-col gap-12">
        {cartItems}
        <div className="flex justify-between">
          <span className="text-2xl">Total Amount</span>
          <span className="text-3xl font-bold">{totalAmount}</span>
        </div>
        <div className="flex justify-end gap-5">
          <button onClick={props.onClose} className="btn-cancel">
            Close
          </button>
          {hasItems && <button className="btn-primary">Buy</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
