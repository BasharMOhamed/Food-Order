import "./HeaderButton.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CardContext from "../../Store/Cart-Context";
const HeaderButton = (props) => {
  const ctx = useContext(CardContext);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button onClick={props.onShow} className="bump">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderButton;
