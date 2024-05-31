import { useReducer } from "react";
import CardContext from "./Cart-Context";

const defaultContext = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, actions) => {
  if (actions.type === "ADD") {
    console.log(
      `item in list id:  item want to be added id: ${actions.item.id}`
    );
    let index = state.items.findIndex((item) => item.id === actions.item.id);
    console.log(index);
    let updatedItems;
    if (index !== -1) {
      const existingItem = state.items[index];
      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount + actions.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = state.items.concat(actions.item);
    }
    const updatedAmount =
      state.totalAmount + actions.item.price * actions.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultContext;
};
const CartProvider = (props) => {
  const [CartItem, dispatchCartItem] = useReducer(CartReducer, defaultContext);
  const AddHanlder = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };
  const RemoveHanlder = (id) => {};
  const CartContext = {
    items: CartItem.items,
    totalAmount: CartItem.totalAmount,
    addItemHandler: AddHanlder,
    RemoveItemHandler: RemoveHanlder,
  };
  return (
    <CardContext.Provider value={CartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
