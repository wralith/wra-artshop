import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "b1", name: "Example", price: 12.5}].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className="flex flex-col gap-12 mx-2">
        {cartItems}
        <div className="flex justify-between">
          <span className="text-2xl">Total Amount</span>
          <span className="font-bold text-3xl">45.56</span>
        </div>
        <div className="flex justify-end gap-5">
          <button onClick={props.onClose} className="btn-cancel">Close</button>
          <button className="btn-primary">Buy</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
