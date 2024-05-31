import React from "react";
const CardContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemHandler: (item) => {},
  RemoveItemHandler: (id) => {},
});
export default CardContext;
