const CheckoutItem = ({
  cartItems,
  cartItem,
  addHandler,
  removeHandler,
  clearHandler,
}) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch({
      payload: addHandler(cartItems, cartItem),
      type: "cart/updCart",
    });
  };
  const removeItemHandler = () => {
    dispatch({
      payload: removeHandler(cartItems, cartItem),
      type: "cart/updCart",
    });
  };
  const clearItemHandler = () => {
    dispatch({
      payload: clearHandler(cartItems, cartItem),
      type: "cart/updCart",
    });
  };

  return (
    React.createElement("div", {className: `checkoutItemContainer`}, 
      React.createElement("div", {className: `imageContainer`}, 
        React.createElement("img", {src: imageUrl, alt: `${name}`})
      ), 
      React.createElement("span", {className: `name`}, " ", name, " "), 
      React.createElement("span", {className: `quantity`}, 
        React.createElement("div", {className: `arrow`, onClick: removeItemHandler}, 
          "❮"
        ), 
        React.createElement("span", {className: `value`}, quantity), 
        React.createElement("div", {className: `arrow`, onClick: addItemHandler}, 
          "❯"
        )
      ), 
      React.createElement("span", {className: `price`}, "$", price.toFixed(2)), 
      React.createElement("div", {className: `removeButton`, onClick: clearItemHandler}, 
        "✕"
      )
    )
  );
};
