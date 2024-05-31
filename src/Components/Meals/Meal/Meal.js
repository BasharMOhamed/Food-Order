import { useContext, useRef } from "react";
import "./Meal.css";
import CardContext from "../../../Store/Cart-Context";
const Meal = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const Amount = useRef();
  const ctx = useContext(CardContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      name: props.name,
      price: props.price,
      amount: +Amount.current.value,
      id: props.id,
    };
    if (
      Amount.current.value.trim().length === 0 ||
      item.amount < 1 ||
      item.amount > 5
    ) {
      return;
    }
    ctx.addItemHandler(item);
  };
  return (
    <li className="meal">
      <div className="meal-details">
        <h3 className="meal-name">{props.name}</h3>
        <div className="meal-description">{props.description}</div>
        <div className="meal-price">{price}</div>
      </div>
      <form className="meal-form" onSubmit={submitHandler}>
        <div className="input-box">
          <label htmlFor="amount">Amount</label>
          <input
            className="amount-input"
            type="number"
            id="amount"
            defaultValue={1}
            ref={Amount}
          />
        </div>
        <button type="submit" className="add-btn">
          + Add
        </button>
      </form>
    </li>
  );
};
export default Meal;
