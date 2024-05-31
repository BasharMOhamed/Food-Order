import { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CardContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";
const Cart = (props) => {
  //const Selected = [{ id: "m5", name: "Sushi", price: 32.5, amount: 2 }];
  const ctx = useContext(CardContext);
  return (
    <Modal onClose={props.onClose}>
      <ul className="items-list">
        {ctx.items.map((item) => {
          return (
            // <li className="cart-item">
            //   <div>
            //     <h3>{item.name}</h3>
            //     <div>${item.price}</div>
            //   </div>
            // </li>
            <CartItem
              id={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={ctx.RemoveItemHandler.bind(null, item.id)}
              onAdd={ctx.addItemHandler.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="btns">
        <button className="order-btn">Order</button>
        <button className="close-btn" onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
