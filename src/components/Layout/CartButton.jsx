import { useContext, useState, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartContext from "../../store/cart-context";

//TODO Display only icon and popover when hover

export const CartButton = (props) => {
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const cartCtx = useContext(CartContext);
  const quantityOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  const buttonHighlight = buttonAnimation ? "bump" : "";

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimation(true);

    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onClick}
      className={`flex flex-row items-center gap-2 rounded-full bg-gray-800 p-2 hover:animate-pulse ${buttonHighlight}`}
    >
      <span className="mx-2 text-3xl">
        <HiOutlineShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className="z-5 mx-2 w-8 rounded-full bg-orange-400">
        {quantityOfCartItems}
      </span>
    </button>
  );
};
