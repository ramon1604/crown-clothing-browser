const Checkout = () => {
  const { cartItems, itemsCount, total } = useSelector(
    (state) => state.cart.cart
  );

  return (
    React.createElement("div", {className: `checkoutContainer`}, 
      React.createElement("div", {className: `checkoutHeader`}, 
        React.createElement("div", {className: `headerBlock`}, 
          React.createElement("span", null, "Product")
        ), 
        React.createElement("div", {className: `headerBlock`}, 
          React.createElement("span", null, "Description")
        ), 
        React.createElement("div", {className: `headerBlock`}, 
          React.createElement("span", null, "Quantity")
        ), 
        React.createElement("div", {className: `headerBlock`}, 
          React.createElement("span", null, "Price")
        ), 
        React.createElement("div", {className: `headerBlock`}, 
          React.createElement("span", null, "Remove")
        )
      ), 
      cartItems.map((cartItem) => {
        return (
          React.createElement(CheckoutItem, {
            key: cartItem.id, 
            className: `checkoutHeader`, 
            cartItems: cartItems, 
            cartItem: cartItem, 
            addHandler: globalObjects.addItemToCart, 
            removeHandler: globalObjects.removeItemFromCart, 
            clearHandler: globalObjects.clearItemFromCart}
          )
        );
      }), 
      React.createElement("div", {className: `footer`}, 
        React.createElement("div", {className: `itemsCount`}, "Items: ", itemsCount), 
        React.createElement("div", {className: `total`}, "Total: $", total.toFixed(2))
      ), 
      React.createElement("div", {style: { padding: 20, width: 400}}, 
        React.createElement(Payment, null)
      )
    )
  );
};
